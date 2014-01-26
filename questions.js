var maxquestions = 20;
var baseDirectory = 'http://dl.dropboxusercontent.com/u/26353384/Language%20sound%20files';

var data = {
	"words": {
		"Congratulations": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Good morning": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Hello": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Goodbye": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Here": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"There": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Thanks": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Sorry": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Now": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Later": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Water": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Toilet": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Rain": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Snow": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Hot": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Cold": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Dog": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Cat": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"]
	},
	"short_questions": {
		"Is this enough?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Are you lost?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"How are you?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Are you tired?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Where are you going?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"What do you want?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Do you need this?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Do you understand me?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Where are you from?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"When are you leaving?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"]
	},
	"short_statements": {
		"Pleased to meet you.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"We open at ten.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"I don't speak English.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"It is not here.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"The train has left.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Please come with me.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Don't worry about it.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"You have to wait.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Let's go now.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"I can't help you.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"]
	},
	"long_statements": {
		"It is very windy today.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"The shop is closed on Sundays.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"You can't go there now.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"You must take the train there.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"It is very far from here.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"You have to buy a ticket here.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"You can go to the beach tonight.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"I don't know where it is.": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"]
	},
	"long_questions": {
		"Who ordered the apple juice?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"What would you like to drink?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Where do you want to go tomorrow?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Would you like anything else now?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Can you come back tomorrow morning?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Do you want to taste the cake?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"],
		"Do you know how to go there?": ["Welsh", "Spanish", "Mandarin", "French", "Thai", "Malay", "Danish", "Afrikaans"]
	}
};
