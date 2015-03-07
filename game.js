var game;

function GameController(d, data, url, baseDirectory, maxquestions, ga) {
	'use strict';

	var gameboard = d.getElementById('gameboard'),
		scoreboard = d.getElementById('score'),
		questionboard = d.getElementById('question'),
		countdownboard = d.getElementById('timer'),
		errorboard = d.getElementById('error'),
		multiplechoice = d.forms.multiplechoice.elements,
		mobprompt = d.getElementById('pressplay'),
		speak = d.getElementById('player'),
		score = 0,
		question = 0,
		qn = {},
		answered = [],	// Array of (phrases + language) that have already been asked
		timer = 10,
		timeout = null,
		histogram = [],
		brag = '',
		ad = null;

	if (!Object.keys) Object.prototype.keys = function(o) {
		var k=[],p;
		for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
		return k;
	};

	function stop() { clearTimeout(timeout); }

	function speechReady(audioTag) {
		mobprompt.style.opacity = 0;
		stop();
		disableInput(false);
		timer = 11;
		countdown();
		audioTag.play();
		ga('send', 'event', 'Game', 'speaking', '', 0);
	}

	function countdown() {
		countdownboard.innerHTML = String(--timer);
		if (timer === 0) {
			displayResult('<b class="red">Too slow!</b> I said <i>&lsquo;' + qn.answer + '&rsquo;</i> in ' + qn.lng);
			countdownboard.className = 'red';
			setTimeout(game.nextQuestion, 3000);
			ga('send', 'event', qn.lng, 'too-slow', qn.answer, 0);
		}
		else {
			timeout = setTimeout(game.countdown, 1000);
		}
	}

	function nextQuestion() {
		stop();
		if (question == maxquestions) {
			gameResults();
			return;
		}
		qn = newQuestion(data);
		speak.src = qn.mp3;
		speak.load();
		countdownboard.innerHTML = '...';
		countdownboard.className = '';
		var i = multiplechoice.length;
		while (i--) {
			multiplechoice[i].innerHTML = qn.choices[i];
			multiplechoice[i].className = '';
		}
		if (histogram[qn.lng] === undefined) {
			histogram[qn.lng] = [0, 0];
		}
		histogram[qn.lng][1]++;
		questionboard.innerHTML = String(++question) + '/' + maxquestions;
		gameboard.className = 'game play';
		errorboard.style.opacity = 0;
	}

	function checkAnswer(guess) {
		stop();
		if (qn.answer == guess.innerHTML) {
			countdownboard.className = guess.className = 'green';
			histogram[qn.lng][0]++;
			scoreboard.innerHTML = String(score += timer);
			displayResult('<b class="green">Correct!</b> That was ' + qn.lng);
			ga('send', 'event', qn.lng, 'correct', qn.answer, timer);
			ga('set', 'metric1', String(score));
		}
		else {
			countdownboard.className = guess.className = 'red';
			displayResult('<b class="red">No!</b> I said <i>&lsquo;' + qn.answer + '&rsquo;</i> in ' + qn.lng);
			ga('send', 'event', qn.lng, 'incorrect', qn.answer, 0);
		}
		setTimeout(game.nextQuestion, 3000);
	}

	function playOn() {
		maxquestions += 10;
		ga('send', 'event', 'Game', 'extend', brag, score/question);
		nextQuestion();
	}

	function fbShare() {
		ga('send', 'social', 'facebook', 'share', brag);
		return !FB.ui( {
				method: 'feed',
				link: url,
				picture: url + 'flags.png',
				name: 'I scored ' + score + ' points in a ' + question + ' question Eureka Languages game',
				description: 'I got ' + brag,
				actions: [{'name': 'Take the Challenge yourself', 'link': url}]
			},
			function(response) {
				ga('send', 'social', 'facebook',
					(response && response.post_id) ? 'published' : 'cancelled',
					brag);
			}
		);
	}

	function disableInput(disable) {
		var i = multiplechoice.length;
		while (i--) {
			multiplechoice[i].disabled = disable;
		}
	}

	function pickRandomProperty(obj) {
		var keys = [];
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				keys.push(prop);
			}
		}
		return keys[ keys.length * Math.random() << 0 ];
	}

	function shuffle(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}

	function convertToSlug(text) {
		return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
	}

	function pickAnswerAndChoices(questions, category, numberOfChoices) {
		var keys = Object.keys(questions);	// List all the keys to the questions
		var shuffledKeys = shuffle(keys);	// Shuffle them so they are in a random order

		var answer = shuffledKeys[0];		// First one will be the answer
		var lng = shuffle(questions[answer])[0];	// Pick a random langauge for the answer
		var choices = shuffle(shuffledKeys.slice(0,numberOfChoices));	// Pick & shuffle the first n choices, which includes the answer   
		return {
			lng: lng,
			category: category,
			answer: answer,
			mp3: baseDirectory + '/' + lng + '/' + convertToSlug(answer) + '.m4a',
			choices: choices
		};
	}

	function getChoices(data, numberOfChoices) {
		var category = pickRandomProperty(data);
		var questions = data[category];
		return pickAnswerAndChoices(questions, category, numberOfChoices);
	}

	function newQuestion(data) {
		var result;
		// This is a horrible way for making sure the same audio clip doesn't appear twice
		// but as long as the number of questions is far below the number of possible answers it will be ok.
		do {
			// Keep looping until we find an unseen answer
			result = getChoices(data, 4);
		}
		while (answered[result.answer + result.lng] !== undefined);
		answered.push(result.answer + result.lng);
		return result;
	}

	function displayResult(message){
		disableInput(true);
		errorboard.innerHTML = message;
		errorboard.style.opacity = 1;
	}

	function List() {
		var txt = '',
			sep = '';
		function unshift(item) {
			txt = item + sep + txt;
			if (sep !== ', ') sep = sep ? ', ' : ' and ';
		}
		function toString() { return txt; }
		return { unshift: unshift, toString: toString };
	}

	function gameResults() {
		var languages = [],
			correct = [],
			incorrect = [],
			notBad = new List(),
			good = new List(),
			hopeless = new List();
		for (var lang in histogram) {
			if (histogram.hasOwnProperty(lang)) {
				var qns = histogram[lang][1],
					right = histogram[lang][0];
				languages.push(lang);
				correct.push(right);
				incorrect.push(qns - right);
				if (qns > 3 && right/qns > 0.3) {
					if (right/qns > 0.9)
						good.unshift(right + '/' + qns + ' in ' + lang);
					else
						notBad.unshift(right + '/' + qns + ' in ' + lang);
				}
				else
					hopeless.unshift(right + '/' + qns + ' in ' + lang);
			}
		}
		if (notBad.toString())
			brag = notBad.toString() + ' correct';
		else if (good.toString())
			brag = good.toString() + ' correct';
		else
			brag = hopeless.toString() + ' correct';
		gameboard.className = 'game over';
		drawChart(languages, correct, incorrect);
		ga('send', 'event', 'Game', 'result', brag, score/question);
		if (!ad) {
			ad = window.adsbygoogle || [];
			ad.push({});
		}
	}

	function drawChart(categs, lowerSeries, upperSeries) {
		return new Highcharts.Chart( {
			chart: {
				type: 'column',
				renderTo: 'results'
			},
			plotOptions: {
				column: {
					stacking: 'percent'
				}
			},
			title: { text: null },
			legend: { enabled: false },
			credits: { enabled: false },
			xAxis: {
				categories: categs
			},
			yAxis: {
				min: 0,
				title: {
					text: '% correct'
				}
			},
			series: [{
					name: 'Incorrect',
					color: '#fdd',
					data: upperSeries
				}, {
					name: 'Correct',
					color: '#8cbb2e',
					data: lowerSeries
			}]
		});
	}

	disableInput(true);
	ga('send', 'event', 'Game', 'start', '', 0);
	ga('set', 'metric1', '0');
	return {
		stop: stop,
		speechReady: speechReady,
		countdown: countdown,
		nextQuestion: nextQuestion,
		checkAnswer: checkAnswer,
		playOn: playOn,
		fbShare: fbShare
	};
};

game = new GameController(document, data, 'http://www.eurekalanguages.com/', baseDirectory, maxquestions, ga);
