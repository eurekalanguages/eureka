var maxquestions = 20;
var baseDirectory = './voices';

var data = {
	"words": {
		"Congratulations": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Good morning": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Hello": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Goodbye": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Here": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"There": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Thanks": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Sorry": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Now": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Later": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Water": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Toilet": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Rain": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Snow": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Hot": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Cold": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Dog": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Cat": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"]
	},
	"short_questions": {
		"Is this enough?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Are you lost?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"How are you?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Are you tired?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Where are you going?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"What do you want?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Do you need this?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Do you understand me?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Where are you from?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"When are you leaving?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"]
	},
	"short_statements": {
		"Pleased to meet you.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"We open at ten.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"I don't speak English.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"It is not here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"The train has left.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Please come with me.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Don't worry about it.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"You have to wait.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Let's go now.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"I can't help you.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"]
	},
	"long_statements": {
		"It is very windy today.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"The shop is closed on Sundays.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"You can't go there now.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"You must take the train there.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"It is very far from here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"You have to buy a ticket here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"You can go to the beach tonight.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"I don't know where it is.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"]
	},
	"long_questions": {
		"Who ordered the apple juice?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"What would you like to drink?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Where do you want to go tomorrow?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Would you like anything else now?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Can you come back tomorrow morning?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Do you want to taste the cake?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"],
		"Do you know how to go there?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese"]
	}
};
