$(document).ready(function() {

var winningNumber;
var score = 0;
var win = 0;
var loss = 0;

$('#win').text(wins);
$('#loss').text(loss);

$('.start').text(winningNumber);
    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src',);
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
    }



  $('#crystalImage').on('click', function(){
		score = score + parseInt($(this).data('num'));
		   
		    $('#score').text(counter);

		    if (counter == winningNumber){
		      alert ('You Won!');
		      wins ++;
		      $('#win').text(win);
		      console.log(wins)
		      $('#crystals').empty();
		     
		        
		    } else if ( counter > numberToGuess){
		        alert ('You Lost!');
		        loss ++;
		        $('#loss').text(loss);
		        console.log(loss)
		        $('#crystals').empty();
		    }
		});
	}

});
