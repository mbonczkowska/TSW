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
				
		//alert(document.getElementsByClassName("door"));
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
	/*	 $(document).ready(function() {
    $('div#30').effect("highlight", {}, 3000);
});*/
		
		var i=0;
                function ukladanka(i){
                                if(i === 1)
                                {
                                        alert("lampa");
                                }
                                else
                                {
                                alert("nic tu nie ma");
                                }
                        }
            $(document).keydown(function(e) {   
                                         var position = $(".player").position();
										var w43 = $("#43").position(); 
                                        var w53 = $("#53").position();
										var w59 = $("#59").position();
										var w90 = $("#90").position();
										var w101 = $("#101").position();
										var w207 = $("#207").position();
										var w235 = $("#235").position();
										var w267 = $("#267").position();
										var w297 = $("#297").position();
										var w358 = $("#358").position();
										var w424 = $("#424").position();
										var w439 = $("#439").position();
										var w443 = $("#443").position();
                                        
                                        if(position.left === w53.left &&position.top === w53.top ){
                                        i++;
                                
                                        $("#53").effect( "highlight",
										{color:"#669966"}, 30000000);
                 
										ukladanka(i);
										}
										
										if(position.left === w59.left &&position.top === w59.top ){                                                                    
                                        $("#59").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w90.left &&position.top === w90.top ){                                                                    
                                        $("#90").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w43.left &&position.top === w43.top ){                                                                    
                                        $("#43").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w101.left &&position.top === w101.top ){                                                                    
                                        $("#101").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										
										if(position.left === w207.left &&position.top === w207.top ){                                                                    
                                        $("#207").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w235.left &&position.top === w235.top ){                                                                    
                                        $("#235").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w267.left &&position.top === w267.top ){                                                                    
                                        $("#267").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w297.left &&position.top === w297.top ){                                                                    
                                        $("#297").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w358.left &&position.top === w358.top ){                                                                    
                                        $("#358").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w439.left &&position.top === w439.top ){                                                                    
                                        $("#439").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w443.left &&position.top === w443.top ){                                                                    
                                        $("#443").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
										if(position.left === w424.left &&position.top === w424.top ){                                                                    
                                        $("#424").effect( "highlight",
										{color:"#669966"}, 30000000);
										}
      									
										
                });
				
		
		
		
		
		
		
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
				var w86 = $("#86").position();	
				var w87 = $("#87").position();
				var w89 = $("#89").position();
				var w98 = $("#98").position();
				var w100 = $("#100").position();
				
				
				var w108 = $("#108").position();
				var w115 = $("#115").position();
				var w124 = $("#124").position();
				var w126 = $("#126").position();
				
				var w131 = $("#131").position();
				var w132 = $("#132").position();
				var w133 = $("#133").position();
				var w134 = $("#134").position();
				var w136 = $("#136").position();
				var w138 = $("#138").position();
				var w139 = $("#139").position();
				var w139 = $("#139").position();
				var w141 = $("#141").position();
				var w145 = $("#145").position();
				var w147 = $("#147").position();
				var w150 = $("#150").position();
				var w152 = $("#152").position();
				
				var w162 = $("#162").position();
				var w167 = $("#167").position();
				var w168 = $("#168").position();
				var w169 = $("#169").position();
				var w170 = $("#170").position();								
				var w171 = $("#171").position();
				var w173 = $("#173").position();
				var w174 = $("#174").position();
				var w175 = $("#175").position();
				var w176 = $("#176").position();
				var w178 = $("#178").position();
				
				var w183 = $("#183").position();
				var w184 = $("#184").position();
				var w185 = $("#185").position();
				var w186 = $("#186").position();
				var w188 = $("#188").position();
				var w191 = $("#191").position();
				var w204 = $("#204").position();
				
				var w214 = $("#214").position();
				var w215 = $("#215").position();
				var w216 = $("#216").position();
				var w217 = $("#217").position();
				var w219 = $("#219").position();
				var w220 = $("#220").position();
				var w221 = $("#221").position();
				var w222 = $("#222").position();
				var w224 = $("#224").position();
				var w225 = $("#225").position();
				var w226 = $("#226").position();
				var w227 = $("#227").position();
				var w228 = $("#228").position();
				var w230 = $("#230").position();
				
				var w238 = $("#238").position();
				var w245 = $("#245").position();
				var w248 = $("#248").position();
				var w248 = $("#249").position();
				var w250 = $("#250").position();
				var w248 = $("#251").position();
				var w248 = $("#252").position();
				
				var w264 = $("#264").position();
				var w266 = $("#266").position();
				var w267 = $("#267").position();
				var w268 = $("#268").position();
			
				var w270 = $("#270").position();
				var w274 = $("#274").position();
				var w276 = $("#276").position();
				var w280 = $("#280").position();
				var w282 = $("#282").position();
				var w283 = $("#283").position();
				var w284 = $("#284").position();
				
				var w287 = $("#287").position();
				var w290 = $("#290").position();
				var w290 = $("#290").position();
				var w292 = $("#292").position();
				var w300 = $("#300").position();
				var w302 = $("#302").position();
				var w306 = $("#306").position();
				var w318 = $("#318").position();
				var w334 = $("#334").position();
				var w335 = $("#335").position();
				var w336 = $("#336").position();
				var w339 = $("#339").position();
				var w342 = $("#342").position();
				var w354 = $("#354").position();
				var w355 = $("#355").position();
				var w356 = $("#356").position();
				
				var w342 = $("#342").position();
				var w344 = $("#344").position();
				var w345 = $("#345").position();
				var w346 = $("#346").position();
				var w348 = $("#348").position();
				var w349 = $("#349").position();
				var w351 = $("#351").position();
				var w352 = $("#352").position();
				var w354 = $("#354").position();
				var w355 = $("#355").position();
				var w356 = $("#356").position();
				var w357 = $("#357").position();
				var w358 = $("#358").position();
				var w360 = $("#360").position();
							
				var w368 = $("#368").position();
				var w386 = $("#386").position();
				
				var w394 = $("#394").position();
				var w396 = $("#396").position();	
				var w397 = $("#397").position();
				var w398 = $("#398").position();
				var w399 = $("#399").position();
				var w400 = $("#400").position();
				var w401 = $("#401").position();
				var w403 = $("#403").position();
				var w404 = $("#404").position();
				var w405 = $("#405").position();
				var w406 = $("#406").position();
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
									 
									 if(position.top === w162.top && position.left < w162.left + 50  
									 && w162.left - 50 < position.left)						   
									 position.left = w162.left+50;
									 
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
									 
									  if(position.top === w386.top && position.left > w386.left - 50  
									 && w386.left + 50 > position.left)						   
									 position.left = w386.left-50;
									 
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
									// domyœlne slow jesli coœ osiagnie mo¿na fast 
									// 'fast' 'slow' 100 400
                                    break;
                            case 87:
                                 if (position.top < 100) {        
										position.top = 100;
									}
									 if(position.left === w136.left && position.top < w136.top + 50  
									 && w136.top - 50 < position.top)						   
									 position.top = w136.top+50;
									 if(position.left === w138.left && position.top < w138.top + 50  
									 && w138.top - 50 < position.top)						   
									 position.top = w138.top+50;                                    
									if(position.left === w139.left && position.top < w139.top + 50  
									 && w139.top - 50 < position.top)						   
									 position.top = w139.top+50;
									 
									 if(position.left === w183.left && position.top < w183.top + 50  
									 && w183.top - 50 < position.top)						   
									 position.top = w183.top+50;
									 if(position.left === w184.left && position.top < w184.top + 50  
									 && w184.top - 50 < position.top)						   
									 position.top = w184.top+50;
									 if(position.left === w185.left && position.top < w185.top + 50  
									 && w185.top - 50 < position.top)						   
									 position.top = w185.top+50;
									 if(position.left === w186.left && position.top < w186.top + 50  
									 && w186.top - 50 < position.top)						   
									 position.top = w186.top+50;
									 
									 if(position.left === w219.left && position.top < w219.top + 50  
									 && w219.top - 50 < position.top)						   
									 position.top = w219.top+50;
									 if(position.left === w220.left && position.top < w220.top + 50  
									 && w220.top - 50 < position.top)						   
									 position.top = w220.top+50;
									 if(position.left === w221.left && position.top < w221.top + 50  
									 && w221.top - 50 < position.top)						   
									 position.top = w221.top+50;
									 if(position.left === w222.left && position.top < w222.top + 50  
									 && w222.top - 50 < position.top)						   
									 position.top = w222.top+50;
									 
									 
									 if(position.left === w224.left && position.top < w224.top + 50  
									 && w224.top - 50 < position.top)						   
									 position.top = w224.top+50;
									 
									 if(position.left === w225.left && position.top < w225.top + 50  
									 && w225.top - 50 < position.top)						   
									 position.top = w225.top+50;
									 
									 if(position.left === w226.left && position.top < w226.top + 50  
									 && w226.top - 50 < position.top)						   
									 position.top = w226.top+50;
									 
									 if(position.left === w227.left && position.top < w227.top + 50  
									 && w227.top - 50 < position.top)						   
									 position.top = w227.top+50;
									 if(position.left === w228.left && position.top < w228.top + 50  
									 && w228.top - 50 < position.top)						   
									 position.top = w228.top+50;
									 
									 if(position.left === w266.left && position.top < w266.top + 50  
									 && w266.top - 50 < position.top)						   
									 position.top = w266.top+50;
									 if(position.left === w267.left && position.top < w267.top + 50  
									 && w267.top - 50 < position.top)						   
									 position.top = w267.top+50;
									 if(position.left === w268.left && position.top < w268.top + 50  
									 && w268.top - 50 < position.top)						   
									 position.top = w268.top+50;
									 if(position.left === w270.left && position.top < w270.top + 50  
									 && w270.top - 50 < position.top)						   
									 position.top = w270.top+50;
									 
									if(position.left === w334.left && position.top < w334.top + 50  
									 && w334.top - 50 < position.top)						   
									 position.top = w334.top+50
									 if(position.left === w335.left && position.top < w335.top + 50  
									 && w335.top - 50 < position.top)						   
									 position.top = w335.top+50;
									 if(position.left === w336.left && position.top < w336.top + 50  
									 && w336.top - 50 < position.top)						   
									 position.top = w336.top+50;
									 
									 if(position.left === w339.left && position.top < w339.top + 50  
									 && w339.top - 50 < position.top)						   
									 position.top = w339.top+50;
									 
									 if(position.left === w342.left && position.top < w342.top + 50  
									 && w342.top - 50 < position.top)						   
									 position.top = w342.top+50;
									 
									 if(position.left === w396.left && position.top < w396.top + 50  
									 && w396.top - 50 < position.top)						   
									 position.top = w396.top+50;
									 if(position.left === w397.left && position.top < w397.top + 50  
									 && w397.top - 50 < position.top)						   
									 position.top = w397.top+50;
									 if(position.left === w398.left && position.top < w398.top + 50  
									 && w398.top - 50 < position.top)						   
									 position.top = w398.top+50;
									 
									 if(position.left === w399.left && position.top < w399.top + 50  
									 && w399.top - 50 < position.top)						   
									 position.top = w399.top+50;
									 if(position.left === w400.left && position.top < w400.top + 50  
									 && w400.top - 50 < position.top)						   
									 position.top = w400.top+50;
									 if(position.left === w401.left && position.top < w401.top + 50  
									 && w401.top - 50 < position.top)						   
									 position.top = w401.top+50;
								
									 if(position.left === w403.left && position.top < w403.top + 50  
									 && w403.top - 50 < position.top)						   
									 position.top = w403.top+50;
									 if(position.left === w404.left && position.top < w404.top + 50  
									 && w404.top - 50 < position.top)						   
									 position.top = w404.top+50;
									 if(position.left === w405.left && position.top < w405.top + 50  
									 && w405.top - 50 < position.top)						   
									 position.top = w405.top+50;
									 if(position.left === w406.left && position.top < w406.top + 50  
									 && w406.top - 50 < position.top)						   
									 position.top = w406.top+50;
									 
									 if(position.left === w407.left && position.top < w407.top + 50  
									 && w407.top - 50 < position.top)						   
									 position.top = w407.top+50;
									 
									 
                                   
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
									 
									 if(position.top === w368.top && position.left > w368.left - 50  
									 && w368.left + 50 > position.left)						   
									 position.left = w368.left-50;
									 
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
									
									 if(position.left === w84.left && position.top > w84.top - 50  
									 && w84.top + 50 > position.top)						   
									 position.top = w84.top-50;
									 
									  if(position.left === w86.left && position.top > w86.top - 50  
									 && w86.top + 50 > position.top)						   
									 position.top = w86.top-50;
									 
									  if(position.left === w87.left && position.top > w87.top - 50  
									 && w87.top + 50 > position.top)						   
									 position.top = w87.top-50;
									 
									  if(position.left === w131.left && position.top > w131.top - 50  
									 && w131.top + 50 > position.top)						   
									 position.top = w131.top-50;
									 
									  if(position.left === w132.left && position.top > w132.top - 50  
									 && w132.top + 50 > position.top)						   
									 position.top = w132.top-50;
									 
									  if(position.left === w133.left && position.top > w133.top - 50  
									 && w133.top + 50 > position.top)						   
									 position.top = w133.top-50;
									 
									  if(position.left === w134.left && position.top > w134.top - 50  
									 && w134.top + 50 > position.top)						   
									 position.top = w134.top-50;
									 
									 
									  if(position.left === w167.left && position.top > w167.top - 50  
									 && w167.top + 50 > position.top)						   
									 position.top = w167.top-50;
									 
									 if(position.left === w168.left && position.top > w168.top - 50  
									 && w168.top + 50 > position.top)						   
									 position.top = w168.top-50;
									 
									 if(position.left === w169.left && position.top > w169.top - 50  
									 && w169.top + 50 > position.top)						   
									 position.top = w169.top-50;
									 
									 if(position.left === w170.left && position.top > w170.top - 50  
									 && w170.top + 50 > position.top)						   
									 position.top = w170.top-50;
									 
									 if(position.left === w171.left && position.top > w171.top - 50  
									 && w171.top + 50 > position.top)						   
									 position.top = w171.top-50;
									 
									 
									 if(position.left === w214.left && position.top > w214.top - 50  
									 && w214.top + 50 > position.top)						   
									 position.top = w215.top-50;
									 if(position.left === w215.left && position.top > w215.top - 50  
									 && w215.top + 50 > position.top)						   
									 position.top = w216.top-50;
									 if(position.left === w216.left && position.top > w216.top - 50  
									 && w216.top + 50 > position.top)						   
									 position.top = w216.top-50;
									 if(position.left === w217.left && position.top > w217.top - 50  
									 && w217.top + 50 > position.top)						   
									 position.top = w217.top-50;
									 
									
									 if(position.left === w282.left && position.top > w282.top - 50  
									 && w282.top + 50 > position.top)						   
									 position.top = w282.top-50;
									 
									 if(position.left === w283.left && position.top > w283.top - 50  
									 && w283.top + 50 > position.top)						   
									 position.top = w283.top-50;
									 
									 if(position.left === w284.left && position.top > w284.top - 50  
									 && w284.top + 50 > position.top)						   
									 position.top = w284.top-50;
									
									
									if(position.left === w287.left && position.top > w287.top - 50  
									 && w287.top + 50 > position.top)						   
									 position.top = w287.top-50;
									
									if(position.left === w290.left && position.top > w290.top - 50  
									 && w290.top + 50 > position.top)						   
									 position.top = w290.top-50;
									
									
									if(position.left === w344.left && position.top > w344.top - 50  
									 && w344.top + 50 > position.top)						   
									 position.top = w344.top-50;
									 
									 if(position.left === w345.left && position.top > w345.top - 50  
									 && w345.top + 50 > position.top)						   
									 position.top = w345.top-50;
									 
									 if(position.left === w346.left && position.top > w346.top - 50  
									 && w346.top + 50 > position.top)						   
									 position.top = w346.top-50;
									 
									 
									 if(position.left === w348.left && position.top > w348.top - 50  
									 && w348.top + 50 > position.top)						   
									 position.top = w348.top-50;
									 if(position.left === w349.left && position.top > w349.top - 50  
									 && w349.top + 50 > position.top)						   
									 position.top = w349.top-50;
									 
									
									 if(position.left === w351.left && position.top > w351.top - 50  
									 && w351.top + 50 > position.top)						   
									 position.top = w351.top-50;
									 
									
									 if(position.left === w352.left && position.top > w352.top - 50  
									 && w352.top + 50 > position.top)						   
									 position.top = w352.top-50;
									 
									 
									 
									 if(position.left === w354.left && position.top > w354.top - 50  
									 && w354.top + 50 > position.top)						   
									 position.top = w354.top-50;
									
									 if(position.left === w355.left && position.top > w355.top - 50  
									 && w355.top + 50 > position.top)						   
									 position.top = w355.top-50;
									 if(position.left === w356.left && position.top > w356.top - 50  
									 && w356.top + 50 > position.top)						   
									 position.top = w356.top-50;
									 
									 if(position.left === w357.left && position.top > w357.top - 50  
									 && w357.top + 50 > position.top)						   
									 position.top = w357.top-50;
									 
									 if(position.left === w358.left && position.top > w358.top - 50  
									 && w358.top + 50 > position.top)						   
									 position.top = w358.top-50;
									 
									 
									$(".player").animate({'top': position.top + 50 +'px'},'fast');
                                    break;
                    }
                   
            });

		  };
    });