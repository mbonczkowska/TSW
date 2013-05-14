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
						alert("Przedpok�j" );
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
				
				var w30 = $("#30").position();
				var w35 = $("#35").position();
				var w41 = $("#41").position();
				var w46 = $("#46").position();
				
			
				var w56 = $("#56").position();
				var w61 = $("#61").position();
				var w67 = $("#67").position();
				var w72 = $("#72").position();
			
				switch(e.keyCode) {                    
                            case 65:
                                   if (position.left < 100) {        
										position.left = 100;
									} 
										
                                    $(".player").animate({'left': position.left - 50 +'px'},'fast');
									// domy�lne slow jesli co� osiagnie mo�na fast 
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
					if(position.top === w30.top && position.left > w30.left - 50 
									 && w30.left + 50 > position.left)
									 position.left = w30.left-50;
									 if(position.top === w35.top && position.left > w35.left - 50
									 && w35.left + 50 > position.left)
									 position.left = w35.left-50;
									 if(position.top === w41.top && position.left > w41.left - 50
									 && w41.left + 50 > position.left)
									 position.left = w41.left-50;
									 if(position.top === w46.top && position.left > w46.left - 50  
									 && w46.left + 50 > position.left)
									 position.left = w46.left-50;
									
									 if(position.top === w56.top && position.left > w56.left - 50 
									 && w56.left + 50 > position.left)
									 position.left = w56.left-50; 
									 if(position.top === w61.top && position.left > w61.left - 50
									 && w61.left + 50 > position.left)
									 position.left = w61.left-50;
									 if(position.top === w67.top && position.left > w67.left - 50
									 && w67.left + 50 > position.left)
									 position.left = w67.left-50;
									 if(position.top === w72.top && position.left > w72.left - 50  
									 && w72.left + 50 > position.left)
									 position.left = w72.left-50;
					
								
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
