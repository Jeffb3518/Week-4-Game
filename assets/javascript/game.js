$(document).ready(function() {

var ranNum;
var win = 0;
var loss= 0;
var score = ""; 
var green;
var yellow;
var red;
var blue;




function gameStart() {

	ranNum =  Math.floor(Math.random() * 56) + 17; ;
	green = Math.floor(Math.random() * 11) + 1 ;
	yellow = Math.floor(Math.random() * 11) + 1 ;
	red = Math.floor(Math.random() * 11) + 1 ;
	blue = Math.floor(Math.random() * 11) + 1 ;

	score = 0;
	$('#score').html(score);
	$('.start').html(ranNum);			
}

gameStart();


$('#win').html(win);
$('#loss').html(loss);
	

	$(".green").on("click", function(){					 
		
		score += green
		$('#score').html(score);
		decider();


	});

	$(".yellow").on("click", function(){					

		score += yellow
		$('#score').html(score);
		decider();


	});

	$(".red").on("click", function(){					

		score += red
		$('#score').html(score);
		decider();


	});

	$(".blue").on("click", function(){					

		score += blue
		$('#score').html(score);
		decider();

	});

});

console.log(ranNum);
console.log(score);

function decider(){

	if(score > ranNum) {

		loss++
		$('#loss').html(loss);
		gameStart();

	}

	else if(score == ranNum) {

		win++
		$('#win').html(win)
		gameStart();
	}

}