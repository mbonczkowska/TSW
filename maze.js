    $(function() {

 
 
			 $.each(tile, function(k, v) { // k - indeks v- wartosc tablicy
                    if (k % 26 === 0) {
                             $("#map").append('<div class="'+ v +' clear" id="' + k + '"></div>');
                    }
                   
					else {
                            $("#map").append('<div class="'+ v +'" id="' + k + '"></div>');
                   }
            });
 
			 var player = '<div class="player"></div>';
            $("#map").append(player);  
				movePlayer();
				

		$(document).keydown(function(e) { 
				var d = $(".door").position();
				var p = $(".player").position();
			   
			   if(d.top === p.top && d.left === p.left)		
				if(e.keyCode === 65)
					alert("Salon" );
					else if (e.keyCode === 68)
						alert("Przedpokój" );
				});
			
		 /* $(document).keydown(function(e) { 
				var w = $(".wall").position();
				var p = $(".player").position();
			   
			   if(w.top === p.top && w.left === p.left)		
				if(e.keyCode === 65)
				$(".wall").prop('disabled', false);
					else if (e.keyCode === 68)
					$(".wall").prop('disabled', false);
				});
			
			$(document).keydown(function(e) { 
				var w = $(".wall").position();
				var p = $(".player").position();
				var h = $(".wall").heigth();
				
				 if(p.top > w.top + h)	
					{
						alert("kolizja");
					}				 

	});*/
		 
		
		// WSAD left:65, up:87, right: 68, down: 83 
		function movePlayer(){
            $(document).keydown(function(e) {
           
                    /* Get the current position */
				var position = $(".player").position();
			
				switch(e.keyCode) {                    
                            case 65:
                                   if (position.left < 100) {        
										position.left = 100;
									} 
										
                                    $(".player").animate({'left': position.left - 50 +'px'},'fast');
									// domyœlne slow jesli coœ osiagnie mo¿na fast 
									// 'fast' 'slow' 100 400
                                    break;
                            case 87:
                                 if (position.top < 100) {        
										position.top = 100;
									}
								
                                    $(".player").animate({'top': position.top - 50 +'px'},'fast');
                                    break;
                            case 68:
                                   if (position.left > 1150) {        
										position.left = 1150;
									}
								
                                    $(".player").animate({'left' : position.left + 50 +'px'},'fast');
                                    break;
                            case 83:
                          
									if (position.top > 800) {        
										position.top = 800;
									}
									
									
									$(".player").animate({'top': position.top + 50 +'px'},'fast');
                                    break;
                    }
                   
            });

		  };
    });