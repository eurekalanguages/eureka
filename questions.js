var maxquestions = 60;
var baseDirectory = './voices';

var data = {
	"words": {
		"Congratulations":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Good morning":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Hello":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Goodbye":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Here":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"There":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Thanks":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Sorry":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Now":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Later":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Water":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Toilet":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Rain":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Snow":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Hot":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Cold":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Dog":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Cat":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"]
	},
	"short_questions": {
		"Is this enough?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Are you lost?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"How are you?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Are you tired?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Where are you going?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"What do you want?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Do you need this?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Do you understand me?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Where are you from?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"When are you leaving?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"]
	},
	"short_statements": {
		"Pleased to meet you.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"We open at ten.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"I don't speak English.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"It is not here.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"The train has left.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Please come with me.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Don't worry about it.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"You have to wait.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Let's go now.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"I can't help you.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"]
	},
	"long_statements": {
		"It is very windy today.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"The shop is closed on Sundays.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"You can't go there now.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"You must take the train there.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"It is very far from here.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"You have to buy a ticket here.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"You can go to the beach tonight.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"I don't know where it is.":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"]
	},
	"long_questions": {
		"Who ordered the apple juice?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"What would you like to drink?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Where do you want to go tomorrow?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Would you like anything else now?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Can you come back tomorrow morning?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Do you want to taste the cake?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"],
		"Do you know how to go there?":
			["Welsh", "Spanish", "Mandarin", "Persian", "French", "Thai", "Malay", "German", "Danish", "Hokkien", "Korean",
			"Afrikaans", "Cantonese", "Italian", "Finnish", "Hungarian"]
	}
};
