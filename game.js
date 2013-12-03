var gameController = function(d, data, baseDirectory, maxquestions, ga) {
'use strict';

var gameboard = d.getElementById('gameboard'),
	scoreboard = d.getElementById('score'),
	questionboard = d.getElementById('question'),
	countdownboard = d.getElementById('timer'),
	errorboard = d.getElementById('error'),
	multiplechoice = d.forms['multiplechoice'].elements,
	resultsboard = d.getElementById('results'),
	mobprompt = d.getElementById('pressplay'),
	speak = d.getElementById('player'),
//	speak = new MediaElementPlayer('#player'),
	score = 0,
	question = 0,
	qn = {},
	answered = [],	// Array of (phrases + language) that have already been asked
	timer = 10,
	timeout = null,
	histogram = [],
	brag = '';

this.speechReady = function(audioTag) {
	mobprompt.style.opacity = 0;
	clearTimeout(timeout);
	var i = multiplechoice.length;
	while (i--) {
		multiplechoice[i].disabled = false;
	}
	timer = 10;
	countdownboard.innerHTML = String(timer);
	audioTag.play();
	timeout = setTimeout(game.countdown, 1000);
	ga('send', 'event', 'Game', 'speaking', '', 0);
};

this.countdown = function() {
	countdownboard.innerHTML = String(--timer);
	if (timer === 0) {
		displayResult('<b class="red">Too slow!</b> I said <i>&lsquo;' + qn.answer + '&rsquo;</i> in ' + qn.language);
		setTimeout(game.nextQuestion, 3000);
		ga('send', 'event', qn.language, 'too-slow', qn.answer, 0);
	}
	else {
		timeout = setTimeout(game.countdown, 1000);
	}
};

this.nextQuestion = function() {
	clearTimeout(timeout);
	if (question == maxquestions) {
		gameResults();
		return;
	}
	qn = newQuestion(data);
	speak.src = qn.mp3;
	speak.load();
	var i = multiplechoice.length;
	while (i--) {
		multiplechoice[i].innerHTML = qn.choices[i];
		multiplechoice[i].className = '';
	}
	if (histogram[qn.language] === undefined) {
		histogram[qn.language] = [0, 0];
	}
	histogram[qn.language][1]++;
	questionboard.innerHTML = String(++question) + '/' + maxquestions;
	gameboard.className = 'game play';
	errorboard.style.opacity = 0;
};

this.checkAnswer = function(guess) {
	clearTimeout(timeout);
	if (qn.answer == guess.innerHTML) {
		guess.className = 'green';
		histogram[qn.language][0]++;
		scoreboard.innerHTML = String(score += timer);
		displayResult('<b class="green">Correct!</b> That was ' + qn.language);
		ga('send', 'event', qn.language, 'correct', qn.answer, timer);
		ga('set', 'metric1', String(score));
	}
	else {
		guess.className = 'red';
		displayResult('<b class="red">No!</b> I said <i>&lsquo;' + qn.answer + '&rsquo;</i> in ' + qn.language);
		ga('send', 'event', qn.language, 'incorrect', qn.answer, 0);
	}
	setTimeout(game.nextQuestion, 3000);
};

this.playOn = function() {
	maxquestions += 10;
	ga('send', 'event', 'Game', 'extend', brag, score/question);
	this.nextQuestion();
};

this.fbShare = function() {
	var url = 'http://eurekalanguages.me/';
	ga('send', 'social', 'facebook', 'share', brag);
	return !window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(brag),
		'sharer', 'toolbar=0,status=0,width=626,height=436');
};


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
	var language = shuffle(questions[answer])[0];	// Pick a random langauge for the answer
	var choices = shuffle(shuffledKeys.slice(0,numberOfChoices));	// Pick & shuffle the first n choices, which includes the answer   
	return {
		language: language,
		category: category,
		answer: answer,
		mp3: baseDirectory + '/' + language + '/' + convertToSlug(answer) + '.m4a',
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
	while (answered.indexOf(result.answer + result.language) >= 0);
	answered.push(result.answer + result.language);
	return result;
}

function displayResult(message){
	var i = multiplechoice.length;
	while (i--) {
		multiplechoice[i].disabled = true;
	}
	errorboard.innerHTML = message;
	errorboard.style.opacity = 1;
}

function gameResults(){
	var languages = [],
		correct = [],
		incorrect = [];
	brag = 'I scored ' + score + ' points, getting ';
	for (var bar in histogram) {
		languages.push(bar);
		correct.push(histogram[bar][0]);
		incorrect.push(histogram[bar][1] - histogram[bar][0]);
		brag += histogram[bar][0] + '/' + histogram[bar][1] + ' in ' + bar + ', ';
	}
	brag += 'correct in the Eureka Languages Challenge!';
	drawChart(languages, correct, incorrect);
	gameboard.className = 'game over';
	ga('send', 'event', 'Game', 'result', brag, score/question);
}

function drawChart(categs, lowerSeries, upperSeries) {
	return new Highcharts.Chart({
		chart: {
			type: 'column',
			renderTo: 'results'
		},
		title: {
			text: null,
		},
		xAxis: {
			categories: categs
		},
		yAxis: {
			min: 0,
			title: {
				text: '% correct'
			},
			color: '#000'
		},
		legend: {
			enabled: false,
		},
		plotOptions: {
			column: {
				stacking: 'percent'
			}
		},
		series: [{
				name: 'Incorrect',
				color: '#edd',
				data: upperSeries
			}, {
				name: 'Correct',
				color: '#6b5',
				data: lowerSeries
		}]
	});
}

ga('send', 'event', 'Game', 'start', '', 0);
ga('set', 'metric1', '0');
this.nextQuestion();
};

var game;

$(document).ready(function() {
	game = new gameController(document, data, baseDirectory, maxquestions, ga);
});
