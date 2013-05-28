$(document).ready(function() { 
	$("#getit").click(function(event) {  
	
	var numRand = Math.floor(Math.random()*10)	
   
	
	if (numRand > 3)	
	$('.#getit').prop('disabled', false);	
	
  
    // lista wylosowanych
	//$("#randomnumber").html($("#randomnumber").html() + numRand + "<br>");
	
	//ostatnio wylosowane
	$("#randomnumber").html(numRand);
	
	
	
	
	

	});
});
