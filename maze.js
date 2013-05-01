    $(function() {

            tile = [];
            tile[0] = 'wall';
            tile[1] = 'wall';
            tile[2] = 'wall';
            tile[3] = 'wall';
           
            tile[4] = 'wall';
            tile[5] = 'walk';
            tile[6] = 'walk';
            tile[7] = 'wall';
           
            tile[8] = 'wall';
            tile[9] = 'walk';
            tile[10] = 'walk';
            tile[11] = 'door';
           
            tile[12] = 'wall';
            tile[13] = 'walk';
            tile[14] = 'walk';
            tile[15] = 'wall';
           
            tile[16] = 'wall';
            tile[17] = 'wall';
            tile[18] = 'wall';
            tile[19] = 'wall';

            $.each(tile, function(k, v) { // k - indeks v- wartosc tablicy
                    if (k % 4 == 0) {
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
                                   if (position.left > 100) {        
										position.left = 100;
									}
								
                                    $(".player").animate({'left' : position.left + 50 +'px'},'fast');
                                    break;
                            case 83:
                          
									if (position.top > 100) {        
										position.top = 100;
									}
									
									
									$(".player").animate({'top': position.top + 50 +'px'},'fast');
                                    break;
                    }
                   
            });

		  };
    });