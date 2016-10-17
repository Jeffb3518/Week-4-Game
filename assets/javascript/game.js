$(document).ready(function() {

var winningNumber= "";
var score = 0;
var win = 0;
var loss = 0;

$('#win').text(win);
$('#loss').text(loss);

$('.start').text(winningNumber);
    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
    }

 function startGame {

     score = 0

    $('#score').text(score);
    	function randomIntFromInterval (min,max) {
    		return Math.floor(Math.random()* (max-min+1)+1);
    		}

    	var winningNumber = randomIntFromInterval (25, 99);

    	$('.start').text(winningNumber);
    }

  $('#crystalImage').on('click', function(){
	score = score + parseInt($(this).data('num'));
		   

		    if (score == winningNumber){
		      alert ('You Won!');
		      wins ++;
		      $('#win').text(win);
		      console.log(wins)
		      $('#crystals').empty();
		     
		        
		    } 

		    else if ( score > winningNumber){
		       alert ('You Lost!');
		       loss ++;
		       $('#loss').text(loss);
		       console.log(loss)
		       $('#crystals').empty();
		    }
		}
	}

});
