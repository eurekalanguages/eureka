"use strict";

var maxquestions = 20;
var baseDirectory = 'http://dl.dropboxusercontent.com/u/26353384/Language%20sound%20files';

var data = {
	"words": {
		"Congratulations": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Good morning": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Hello": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Goodbye": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Here": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"There": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Thanks": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Sorry": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Now": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Later": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Water": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Toilet": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Rain": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Snow": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Hot": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Cold": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Dog": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Cat": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"]
	},
	"short_questions": {
		"Is this enough?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Are you lost?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"How are you?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Are you tired?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Where are you going?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"What do you want?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Do you need this?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Do you understand me?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Where are you from?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"When are you leaving?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"]
	},
	"short_statements": {
		"Pleased to meet you.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"We open at ten.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"I don't speak English.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"It is not here.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"The train has left.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Please come with me.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Don't worry about it.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"You have to wait.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Let's go now.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"I can't help you.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"]
	},
	"long_statements": {
		"It is very windy today.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"The shop is closed on Sundays.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"You can't go there now.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"You must take the train there.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"It is very far from here.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"You have to buy a ticket here.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"You can go to the beach tonight.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"I don't know where it is.": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"]
	},
	"long_questions": {
		"Who ordered the apple juice?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"What would you like to drink?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Where do you want to go tomorrow?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Would you like anything else now?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Can you come back tomorrow morning?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Do you want to taste the cake?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"],
		"Do you know how to go there?": ["Welsh", "Spanish", "Mandarin", "French", "Malay", "Afrikaans"]
	}
};
