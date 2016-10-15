$(document).ready(function() {

	crystals = ['assets/images/yellow.png', 'assets/images/blue.png', 'assets/images/green.png', 'assets/images/red.png'];

	var score = 0;
	var wins = 0;
	var losses = 0;

	$('#win').text(total wins);
	$('#loss').text(total losses);

	newCrystal();
	nextGame();

	function newCrystal() {
		var numbers = []
			while(numbers.length < 4) {
				var randomNumber = Math.floor(Math.random()*15)
				var there = false;
				for (var i=0; i<numbers.length; i++){
					if (numbers[i] == randomNumber){
						there = true; break
					}
				}
				if(!there)numbers[numbers.length]=randomNumber
			}
		console.log(numbers);

		for (i=0; i<numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	function nextGame {

		counter = 0;
		$('#score').text(counter);

		function randomIntFromInterval(min,max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

	var winningNumber = randomIntFromInterval(21, 115);

	$('.start').text(winningNumber);


	}

}