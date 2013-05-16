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
				var d = $(".door").position(); //konkretne drzwi
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
				var w30 = $("#30").position();
				var w32 = $("#32").position(); //
				var w35 = $("#35").position();
				var w37 = $("#37").position(); //
				var w41 = $("#41").position();
				var w43 = $("#43").position(); //
				var w46 = $("#46").position();
				var w48 = $("#48").position(); //
				
			
				var w56 = $("#56").position();
				var w58 = $("#58").position();
				var w61 = $("#61").position();
				var w63 = $("#63").position();
				var w67 = $("#67").position();
				var w69 = $("#69").position();
				var w72 = $("#72").position();
				var w74 = $("#74").position();
				
				var w82 = $("#82").position();
				var w84 = $("#84").position();				
				var w87 = $("#87").position();
				var w89 = $("#89").position();
				var w98 = $("#98").position();
				var w100 = $("#100").position();
				
				
				var w108 = $("#108").position();
				var w115 = $("#115").position();
				var w124 = $("#124").position();
				var w126 = $("#126").position();
				
				var w139 = $("#139").position();
				var w141 = $("#141").position();
				var w145 = $("#145").position();
				var w147 = $("#147").position();
				var w150 = $("#150").position();
				var w152 = $("#152").position();
				
				var w171 = $("#171").position();
				var w173 = $("#173").position();
				var w176 = $("#176").position();
				var w178 = $("#178").position();
				
				var w186 = $("#186").position();
				var w188 = $("#188").position();
				var w191 = $("#191").position();
				var w204 = $("#204").position();
				
				var w217 = $("#217").position();
				var w219 = $("#219").position();
				var w222 = $("#222").position();
				var w224 = $("#224").position();
				var w228 = $("#228").position();
				var w230 = $("#230").position();
				
				var w238 = $("#238").position();
				var w245 = $("#245").position();
				var w248 = $("#248").position();
				var w250 = $("#250").position();
				
				var w264 = $("#264").position();
				var w266 = $("#266").position();
				var w268 = $("#268").position();
				var w270 = $("#270").position();
				var w274 = $("#274").position();
				var w276 = $("#276").position();
				var w280 = $("#280").position();
				var w282 = $("#282").position();
				
				var w290 = $("#290").position();
				var w292 = $("#292").position();
				var w300 = $("#300").position();
				var w302 = $("#302").position();
				var w306 = $("#306").position();
				var w318 = $("#318").position();
				
				var w342 = $("#342").position();
				var w344 = $("#344").position();
				var w346 = $("#346").position();
				var w348 = $("#348").position();
				var w352 = $("#352").position();
				var w354 = $("#354").position();
				var w358 = $("#358").position();
				var w360 = $("#360").position();
				
				var w394 = $("#394").position();
				var w396 = $("#396").position();				
				var w407 = $("#407").position();
				var w409 = $("#409").position();
				
				var w420 = $("#420").position();
				var w422 = $("#422").position();				
				var w433 = $("#433").position();
				var w435 = $("#435").position();
				
			
				//var w228 = $("#228").position();
				
				var position = $(".player").position();
			
				switch(e.keyCode) {                    
                            case 65:
                                   if (position.left < 100) {        
										position.left = 100;
									} 
									
									 if(position.top === w32.top && position.left < w32.left + 50  
									 && w32.left - 50 < position.left)						   
									 position.left = w32.left+50;
									 if(position.top === w37.top && position.left < w37.left + 50  
									 && w37.left - 50 < position.left)						   
									 position.left = w37.left+50;
									 if(position.top === w43.top && position.left < w43.left + 50  
									 && w43.left - 50 < position.left)						   
									 position.left = w43.left+50;
									 if(position.top === w48.top && position.left < w48.left + 50  
									 && w48.left - 50 < position.left)						   
									 position.left = w48.left+50;
									 
									 if(position.top === w58.top && position.left < w58.left + 50  
									 && w58.left - 50 < position.left)						   
									 position.left = w58.left+50;
									 if(position.top === w63.top && position.left < w63.left + 50  
									 && w63.left - 50 < position.left)						   
									 position.left = w63.left+50;
									 if(position.top === w69.top && position.left < w69.left + 50  
									 && w69.left - 50 < position.left)						   
									 position.left = w69.left+50;
									 if(position.top === w74.top && position.left < w74.left + 50  
									 && w74.left - 50 < position.left)						   
									 position.left = w74.left+50;
									 
									 if(position.top === w82.top && position.left < w82.left + 50  
									 && w82.left - 50 < position.left)						   
									 position.left = w82.left+50;
									 if(position.top === w89.top && position.left < w89.left + 50  
									 && w89.left - 50 < position.left)						   
									 position.left = w89.left+50;
									 if(position.top === w100.top && position.left < w100.left + 50  
									 && w100.left - 50 < position.left)						   
									 position.left = w100.left+50;
									 
									 if(position.top === w115.top && position.left < w115.left + 50  
									 && w115.left - 50 < position.left)						   
									 position.left = w115.left+50;
									 if(position.top === w126.top && position.left < w126.left + 50  
									 && w126.left - 50 < position.left)						   
									 position.left = w126.left+50;
									 
									 if(position.top === w141.top && position.left < w141.left + 50  
									 && w141.left - 50 < position.left)						   
									 position.left = w141.left+50;
									 if(position.top === w147.top && position.left < w147.left + 50  
									 && w147.left - 50 < position.left)						   
									 position.left = w147.left+50;
									 if(position.top === w152.top && position.left < w152.left + 50  
									 && w152.left - 50 < position.left)						   
									 position.left = w152.left+50;
									 
									 if(position.top === w173.top && position.left < w173.left + 50  
									 && w173.left - 50 < position.left)						   
									 position.left = w173.left+50;
									 if(position.top === w178.top && position.left < w178.left + 50  
									 && w178.left - 50 < position.left)						   
									 position.left = w178.left+50;
									 
									 if(position.top === w188.top && position.left < w188.left + 50  
									 && w188.left - 50 < position.left)						   
									 position.left = w188.left+50;
									 if(position.top === w204.top && position.left < w204.left + 50  
									 && w204.left - 50 < position.left)						   
									 position.left = w204.left+50;
									 
									 if(position.top === w219.top && position.left < w219.left + 50  
									 && w219.left - 50 < position.left)						   
									 position.left = w219.left+50;
									 if(position.top === w224.top && position.left < w224.left + 50  
									 && w224.left - 50 < position.left)						   
									 position.left = w224.left+50;
									 if(position.top === w230.top && position.left < w230.left + 50  
									 && w230.left - 50 < position.left)						   
									 position.left = w230.left+50;
									 
									 if(position.top === w245.top && position.left < w245.left + 50  
									 && w245.left - 50 < position.left)						   
									 position.left = w245.left+50;
									 if(position.top === w250.top && position.left < w250.left + 50  
									 && w250.left - 50 < position.left)						   
									 position.left = w250.left+50;
									 
									 if(position.top === w266.top && position.left < w266.left + 50  
									 && w266.left - 50 < position.left)						   
									 position.left = w266.left+50;
									 if(position.top === w270.top && position.left < w270.left + 50  
									 && w270.left - 50 < position.left)						   
									 position.left = w270.left+50;
									 if(position.top === w276.top && position.left < w276.left + 50  
									 && w276.left - 50 < position.left)						   
									 position.left = w276.left+50;
									 if(position.top === w282.top && position.left < w282.left + 50  
									 && w282.left - 50 < position.left)						   
									 position.left = w282.left+50;
									 
									 if(position.top === w292.top && position.left < w292.left + 50  
									 && w292.left - 50 < position.left)						   
									 position.left = w292.left+50;
									 if(position.top === w302.top && position.left < w302.left + 50  
									 && w302.left - 50 < position.left)						   
									 position.left = w302.left+50;
									 if(position.top === w318.top && position.left < w318.left + 50  
									 && w318.left - 50 < position.left)						   
									 position.left = w318.left+50;
									 
									 if(position.top === w344.top && position.left < w344.left + 50  
									 && w344.left - 50 < position.left)						   
									 position.left = w344.left+50;
									 if(position.top === w348.top && position.left < w348.left + 50  
									 && w348.left - 50 < position.left)						   
									 position.left = w348.left+50;
									 if(position.top === w354.top && position.left < w354.left + 50  
									 && w354.left - 50 < position.left)						   
									 position.left = w354.left+50;
									 if(position.top === w360.top && position.left < w360.left + 50  
									 && w360.left - 50 < position.left)						   
									 position.left = w360.left+50;
									 
									 if(position.top === w396.top && position.left < w396.left + 50  
									 && w396.left - 50 < position.left)						   
									 position.left = w396.left+50;
									 if(position.top === w409.top && position.left < w409.left + 50  
									 && w409.left - 50 < position.left)						   
									 position.left = w409.left+50;
									 if(position.top === w422.top && position.left < w422.left + 50  
									 && w422.left - 50 < position.left)						   
									 position.left = w422.left+50;
									 if(position.top === w435.top && position.left < w435.left + 50  
									 && w435.left - 50 < position.left)						   
									 position.left = w435.left+50;



									
                                    $(".player").animate({'left': position.left - 50 +'px'},'fast');
									// domyślne slow jesli coś osiagnie można fast 
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
									 if(position.top === w46.top && position.left > w46.left - 50  && w46.left + 50 > position.left)						   position.left = w46.left-50;
									
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
									 
									 if(position.top === w82.top && position.left > w82.left - 50
									 && w82.left + 50 > position.left)
									 position.left = w82.left-50;
									 if(position.top === w87.top && position.left > w87.left - 50
									 && w87.left + 50 > position.left)
									 position.left = w87.left-50;
									 if(position.top === w98.top && position.left > w98.left - 50  
									 && w98.left + 50 > position.left)						   
									 position.left = w98.left-50;
									
									 if(position.top === w108.top && position.left > w108.left - 50
									 && w108.left + 50 > position.left)
									 position.left = w108.left-50;
									 if(position.top === w124.top && position.left > w124.left - 50  
									 && w124.left + 50 > position.left)						   
									 position.left = w124.left-50;
									 
									 if(position.top === w139.top && position.left > w139.left - 50
									 && w139.left + 50 > position.left)
									 position.left = w139.left-50;
									 if(position.top === w145.top && position.left > w145.left - 50
									 && w145.left + 50 > position.left)
									 position.left = w145.left-50;
									 if(position.top === w150.top && position.left > w150.left - 50  
									 && w150.left + 50 > position.left)						   
									 position.left = w150.left-50;
									
									if(position.top === w171.top && position.left > w171.left - 50
									 && w171.left + 50 > position.left)
									 position.left = w171.left-50;
									 if(position.top === w176.top && position.left > w176.left - 50
									 && w176.left + 50 > position.left)
									 position.left = w176.left-50;
									 
									 if(position.top === w186.top && position.left > w186.left - 50  
									 && w186.left + 50 > position.left)						   
									 position.left = w186.left-50;	
									 if(position.top === w191.top && position.left > w191.left - 50  
									 && w191.left + 50 > position.left)						   
									 position.left = w191.left-50;	
									 
									  if(position.top === w217.top && position.left > w217.left - 50
									 && w217.left + 50 > position.left)
									 position.left = w217.left-50;
									 if(position.top === w222.top && position.left > w222.left - 50
									 && w222.left + 50 > position.left)
									 position.left = w222.left-50;
									 if(position.top === w228.top && position.left > w228.left - 50  
									 && w228.left + 50 > position.left)						   
									 position.left = w228.left-50;
									 
								
									 if(position.top === w238.top && position.left > w238.left - 50  
									 && w238.left + 50 > position.left)						   
									 position.left = w238.left-50;	
									 if(position.top === w248.top && position.left > w248.left - 50  
									 && w248.left + 50 > position.left)						   
									 position.left = w248.left-50;	
									 
									  if(position.top === w264.top && position.left > w264.left - 50
									 && w264.left + 50 > position.left)
									 position.left = w264.left-50;
									 if(position.top === w268.top && position.left > w268.left - 50
									 && w268.left + 50 > position.left)
									 position.left = w268.left-50;
									 if(position.top === w274.top && position.left > w274.left - 50  
									 && w274.left + 50 > position.left)						   
									 position.left = w274.left-50;
									 if(position.top === w280.top && position.left > w280.left - 50  
									 && w280.left + 50 > position.left)						   
									 position.left = w280.left-50;
									 
									 if(position.top === w290.top && position.left > w290.left - 50  
									 && w290.left + 50 > position.left)						   
									 position.left = w290.left-50;
									 if(position.top === w300.top && position.left > w300.left - 50  
									 && w300.left + 50 > position.left)						   
									 position.left = w300.left-50;
									 if(position.top === w306.top && position.left > w306.left - 50  
									 && w306.left + 50 > position.left)						   
									 position.left = w306.left-50;
									 
									 if(position.top === w342.top && position.left > w342.left - 50  
									 && w342.left + 50 > position.left)						   
									 position.left = w342.left-50;
									 if(position.top === w346.top && position.left > w346.left - 50  
									 && w346.left + 50 > position.left)						   
									 position.left = w346.left-50;
									 if(position.top === w352.top && position.left > w352.left - 50  
									 && w352.left + 50 > position.left)						   
									 position.left = w352.left-50;
									 if(position.top === w358.top && position.left > w358.left - 50  
									 && w358.left + 50 > position.left)						   
									 position.left = w358.left-50;
									 
									 if(position.top === w394.top && position.left > w394.left - 50  
									 && w394.left + 50 > position.left)						   
									 position.left = w394.left-50;
									 if(position.top === w407.top && position.left > w407.left - 50  
									 && w407.left + 50 > position.left)						   
									 position.left = w407.left-50;
									 
									 if(position.top === w420.top && position.left > w420.left - 50  
									 && w420.left + 50 > position.left)						   
									 position.left = w420.left-50;
									 if(position.top === w433.top && position.left > w433.left - 50  
									 && w433.left + 50 > position.left)						   
									 position.left = w433.left-50;
			
									
									
									
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
