var maxquestions = 50;
var baseDirectory = './voices';

var data = {
	"words": {
		"Congratulations": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Good morning": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Hello": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Goodbye": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Here": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"There": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Thanks": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Sorry": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Now": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Later": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Water": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Toilet": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Rain": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Snow": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Hot": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Cold": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Dog": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Cat": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"]
	},
	"short_questions": {
		"Is this enough?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Are you lost?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"How are you?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Are you tired?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Where are you going?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"What do you want?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Do you need this?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Do you understand me?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Where are you from?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"When are you leaving?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"]
	},
	"short_statements": {
		"Pleased to meet you.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"We open at ten.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"I don't speak English.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"It is not here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"The train has left.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Please come with me.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Don't worry about it.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"You have to wait.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Let's go now.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"I can't help you.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"]
	},
	"long_statements": {
		"It is very windy today.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"The shop is closed on Sundays.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"You can't go there now.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"You must take the train there.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"It is very far from here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"You have to buy a ticket here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"You can go to the beach tonight.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"I don't know where it is.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"]
	},
	"long_questions": {
		"Who ordered the apple juice?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"What would you like to drink?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Where do you want to go tomorrow?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Would you like anything else now?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Can you come back tomorrow morning?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Do you want to taste the cake?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"],
		"Do you know how to go there?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Afrikaans", "Cantonese", "Italian"]
	}
};
