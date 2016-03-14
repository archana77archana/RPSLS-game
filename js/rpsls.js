//manipulating the choice of user
//if the user choice is a string,
//then make it into lowercase


var rock = "rock";
var paper = "paper";
var scissor = "scissors";
var lizard = "lizard";
var spock = "spock";

$(document).ready(function() {

	$(".btn-info").click(function() {
		location.reload(true);
	});

	//Store computers choice in a variable
	$(".btn-blu").click(function() {

		var computerChoice = Math.random();

		var userChoice = $("#userchoice").val();
		
		//Give the random number a choice name
		if (computerChoice < 0.2) {
			computerChoice = rock;
		} else if(computerChoice <= 0.4) {
			computerChoice = paper;
		} else if(computerChoice <= 0.6) {
			computerChoice = scissors;
		} else if(computerChoice <= 0.8) {
			computerChoice = lizard;
		} else {
			computerChoice = spock;
		}


		//showing computer's choice
		$(".thumb").append("<b>I took </b><b> " +computerChoice+ "</b>");
		$(".thumb").css("color", "lightseagreen");

		Result(userChoice, computerChoice);
	});

	//Algorithm
	function Result(userChoice, computerChoice) {
			index = {
				"paper": 0,
				"rock": 1, 
				"lizard": 2,
				"spock": 3,
				"scissors": 4
			};
		
		var list = [
				['Tie', 'You win', 'You loose', 'You win', 'You loose'],
				['You loose', 'Tie', 'You win', 'You win', 'You win'],
				['You win', 'You loose', 'Tie', 'You loose', 'You loose'],
				['You loose', 'You win', 'You loose', 'Tie', 'You win'],
				['You win', 'You loose', 'You win', 'You loose', 'Tie'],
			];

			$(".thumb-result").append("<b>"+list[index[userChoice]][index[computerChoice]]+"</b>");
			$(".thumb-result").css("color", "firebrick");
	}

});


