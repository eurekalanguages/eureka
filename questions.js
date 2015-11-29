var maxquestions = 60;
var baseDirectory = './voices';

var data = {
	"words": {
		"Congratulations":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Good morning":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Hello":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Goodbye":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Here":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"There":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Thanks":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Sorry":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Now":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Later":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Water":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Toilet":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Rain":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Snow":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Hot":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Cold":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Dog":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Cat":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"]
	},
	"short_questions": {
		"Is this enough?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Are you lost?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"How are you?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Are you tired?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Where are you going?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"What do you want?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Do you need this?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Do you understand me?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Where are you from?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"When are you leaving?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"]
	},
	"short_statements": {
		"Pleased to meet you.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"We open at ten.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"I don't speak English.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"It is not here.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"The train has left.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Please come with me.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Don't worry about it.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"You have to wait.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Let's go now.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"I can't help you.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"]
	},
	"long_statements": {
		"It is very windy today.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"The shop is closed on Sundays.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"You can't go there now.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"You must take the train there.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"It is very far from here.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"You have to buy a ticket here.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"You can go to the beach tonight.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"I don't know where it is.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"]
	},
	"long_questions": {
		"Who ordered the apple juice?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"What would you like to drink?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Where do you want to go tomorrow?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Would you like anything else now?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Can you come back tomorrow morning?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Do you want to taste the cake?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"],
		"Do you know how to go there?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish"]
	}
};
