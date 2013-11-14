"use strict";

var maxquestions = 20;
var baseDirectory = 'http://dl.dropboxusercontent.com/u/26353384/Language%20sound%20files';

var data = {
	"words": {
		"Congratulations": ["Welsh", "Spanish", "Mandarin", "French"],
		"Good morning": ["Welsh", "Spanish", "Mandarin", "French"],
		"Hello": ["Welsh", "Spanish", "Mandarin", "French"],
		"Goodbye": ["Welsh", "Spanish", "Mandarin", "French"],
		"Here": ["Welsh", "Spanish", "Mandarin", "French"],
		"There": ["Welsh", "Spanish", "Mandarin", "French"],
		"Thanks": ["Welsh", "Spanish", "Mandarin", "French"],
		"Sorry": ["Welsh", "Spanish", "Mandarin", "French"],
		"Now": ["Welsh", "Spanish", "Mandarin", "French"],
		"Later": ["Welsh", "Spanish", "Mandarin", "French"],
		"Water": ["Welsh", "Spanish", "Mandarin", "French"],
		"Toilet": ["Welsh", "Spanish", "Mandarin", "French"],
		"Rain": ["Welsh", "Spanish", "Mandarin", "French"],
		"Snow": ["Welsh", "Spanish", "Mandarin", "French"],
		"Hot": ["Welsh", "Spanish", "Mandarin", "French"],
		"Cold": ["Welsh", "Spanish", "Mandarin", "French"],
		"Dog": ["Welsh", "Spanish", "Mandarin", "French"],
		"Cat": ["Welsh", "Spanish", "Mandarin", "French"]
	},
	"short_questions": {
		"Is this enough?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Are you lost?": ["Welsh", "Spanish", "Mandarin", "French"],
		"How are you?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Are you tired?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Where are you going?": ["Welsh", "Spanish", "Mandarin", "French"],
		"What do you want?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Do you need this?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Do you understand me?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Where are you from?": ["Welsh", "Spanish", "Mandarin", "French"],
		"When are you leaving?": ["Welsh", "Spanish", "Mandarin", "French"]
	},
	"short_statements": {
		"Pleased to meet you.": ["Welsh", "Spanish", "Mandarin", "French"],
		"We open at ten.": ["Welsh", "Spanish", "Mandarin", "French"],
		"I don't speak English.": ["Welsh", "Spanish", "Mandarin", "French"],
		"It is not here.": ["Welsh", "Spanish", "Mandarin", "French"],
		"The train has left.": ["Welsh", "Spanish", "Mandarin", "French"],
		"Please come with me.": ["Welsh", "Spanish", "Mandarin", "French"],
		"Don't worry about it.": ["Welsh", "Spanish", "Mandarin", "French"],
		"You have to wait.": ["Welsh", "Spanish", "Mandarin", "French"],
		"Let's go now.": ["Welsh", "Spanish", "Mandarin", "French"],
		"I can't help you": ["Welsh", "Spanish", "Mandarin", "French"]
	},
	"long_statements": {
		"It is very windy today.": ["Welsh", "Spanish", "Mandarin", "French"],
		"The shop is closed on Sundays.": ["Welsh", "Spanish", "Mandarin", "French"],
		"You can't go there now.": ["Welsh", "Spanish", "Mandarin", "French"],
		"You must take the train there.": ["Welsh", "Spanish", "Mandarin", "French"],
		"It is very far from here.": ["Welsh", "Spanish", "Mandarin", "French"],
		"You have to buy a ticket here.": ["Welsh", "Spanish", "Mandarin", "French"],
		"You can go to the beach tonight.": ["Welsh", "Spanish", "Mandarin", "French"],
		"I don't know where it is.": ["Welsh", "Spanish", "Mandarin", "French"]
	},
	"long_questions": {
		"Who ordered the apple juice?": ["Welsh", "Spanish", "Mandarin", "French"],
		"What would you like to drink?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Where do you want to go tomorrow?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Would you like anything else now?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Can you come back tomorrow morning?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Do you want to taste the cake?": ["Welsh", "Spanish", "Mandarin", "French"],
		"Do you know how to go there?": ["Welsh", "Spanish", "Mandarin", "French"]
	}
};
