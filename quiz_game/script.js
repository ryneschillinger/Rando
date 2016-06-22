$(function(){
	var questions = [
		"What is the capital of Tennessee?",
		"What is the capital of Florida?",
		"What is the capital of New Jersey?",
		"What is the capital of Colorado?",
		"What is the capital of Wyoming?"
	];

	var answers = [
		"Nashville",
		"Tallahassee",
		"Trenton",
		"Denver",
		"Cheyenne"
	];

	for (var i = 0; i < questions.length; i +=1){
		var myDiv = $("<div>");
		myDiv.html("<h2>" + questions[i] + "</h2>");
		var textBox = $("<input>");
		textBox.attr("type", "text");
		textBox.attr("id", "question" + i);
		myDiv.append(textBox);
		$("body").append(myDiv);
	}

	var myButton = $("<button>");
	myButton.text("Submit Answers");
	$("body").append(myButton);
	myButton.click(function(){
		var zero = $("#question0").val().toLowerCase();
		console.log(one); // Check to see it's working
		var one = $("#question1").val();
		var two = $("#question2").val();
		var fhree = $("#question3").val();
		var four = $("#question4").val();

		if (zero === answers[0].toLowerCase()) {
			$("#question0").css("borderColor", "#00FF7F");
		} else {
			$("#question0").css("borderColor", "#FF4040");
		}

		if (one === answers[1].toLowerCase()) {
			$("#question1").css("borderColor", "#00FF7F");
		} else {
			$("#question1").css("borderColor", "#FF4040");
		}

		if (two === answers[2].toLowerCase()) {
			$("#question2").css("borderColor", "#00FF7F");
		} else {
			$("#question2").css("borderColor", "#FF4040");
		}

		if (three === answers[3].toLowerCase()) {
			$("#question3").css("borderColor", "#00FF7F");
		} else {
			$("#question3").css("borderColor", "#FF4040");
		}

		if (four === answers[4].toLowerCase()) {
			$("#question4").css("borderColor", "#00FF7F");
		} else {
			$("#question4").css("borderColor", "#FF4040");
		}
	})

})

