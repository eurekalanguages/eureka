var maxquestions = 20;
var baseDirectory = './voices';

var data = {
	"words": {
		"Congratulations": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Good morning": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Hello": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Goodbye": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Here": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"There": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Thanks": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Sorry": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Now": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Later": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Water": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Toilet": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Rain": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Snow": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Hot": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Cold": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Dog": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Cat": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"]
	},
	"short_questions": {
		"Is this enough?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Are you lost?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"How are you?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Are you tired?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Where are you going?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"What do you want?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Do you need this?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Do you understand me?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Where are you from?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"When are you leaving?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"]
	},
	"short_statements": {
		"Pleased to meet you.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"We open at ten.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"I don't speak English.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"It is not here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"The train has left.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Please come with me.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Don't worry about it.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"You have to wait.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Let's go now.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"I can't help you.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"]
	},
	"long_statements": {
		"It is very windy today.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"The shop is closed on Sundays.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"You can't go there now.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"You must take the train there.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"It is very far from here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"You have to buy a ticket here.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"You can go to the beach tonight.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"I don't know where it is.": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"]
	},
	"long_questions": {
		"Who ordered the apple juice?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"What would you like to drink?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Where do you want to go tomorrow?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Would you like anything else now?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Can you come back tomorrow morning?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Do you want to taste the cake?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"],
		"Do you know how to go there?": ["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "Danish", "Hokkien", "Afrikaans"]
	}
};
