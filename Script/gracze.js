$(document).ready(function() { 


	


function Gracz( id, name, strengh, accuracy, intaligence, fear_points, weapon){

	this.id     = id;
	this.name  = name;
	this.strengh     = strengh;
	this. accuracy =  accuracy;
	this.intaligence      = intaligence;
	this.fear_points = fear_points;
	this.weapon = weapon;
}



//wybor = john;
function Stwory()
{
	var wilkolak     = '7';
	var zombie  = '6';
	var czarownica = '5';
	var duch     = '5';
	var wampir  = '6';
	var strzyga = '6';
	var pajaki     = '3';
	var waze  = '3';
	var wisielec = '5';
	var krolik  = '1';
	var kurczak = '1';
	

}

function Zywioly()
{
	var ciemnosc     = '4';
	var pozar = '7';
	var blyskawica = '3';
	var trzesienie     = '6';
	var przeciag  = '1';
	var pyl = '1';
	var krew  = '4';
	var mroz = '4';
}	

// alerts 'Purr!'
//sam.callOver();       // alerts 'Sam ignores you'.  Just like a cat!
//alert(john.weapon); // alerts 'cat'
//(document).write(jw);
//function drukuj() {
//var jw = john.weapon;
function Gracze() {
var john = new Gracz('1','John','7','5','5','6','Pi�a');
var sam   = new Gracz('2','Sam','4','5','7','7','Pistolet');
var patty = new Gracz('3','Patty','6','5','4','8','Toporek');
var victor = new Gracz('4','Victor','4','4','8','7','Paralizator');
var olivia = new Gracz('5','Olivia','5','7','5','6','Pi�a');
var wybor =  new Gracz('6','','','','','','');;


}

var john = new Gracz('1','John','7','5','5','6','Pi�a');
var sam   = new Gracz('2','Sam','4','5','7','7','Pistolet');
var patty = new Gracz('3','Patty','6','5','4','8','Toporek');
var victor = new Gracz('4','Victor','4','4','8','7','Paralizator');
var olivia = new Gracz('5','Olivia','5','7','5','6','Pi�a');
var wybor =  new Gracz('6','','','','','','');;

 $(".ui-widget-content").filter(".1").html("Imi� " + john.name + "<br/>Si�a " + john.strengh +
 "<br/>Celno�� " + john.accuracy + "<br/>Inteligencja " + john.intaligence + 
 "<br/>Punkty przera�enia " + john.fear_points + "<br/>Bro� " +
 john.weapon);
 $(".ui-widget-content").filter(".2").html("Imi� " + sam.name + "<br/>Si�a " + sam.strengh +
 "<br/>Celno�� " + sam.accuracy + "<br/>Inteligencja " + sam.intaligence + 
 "<br/>Punkty przera�enia " + sam.fear_points + "<br/>Bro� " +
 sam.weapon);
 $(".ui-widget-content").filter(".3").html("Imi� " + patty.name + "<br/>Si�a " + patty.strengh +
 "<br/>Celno�� " + patty.accuracy + "<br/>Inteligencja " + patty.intaligence + 
 "<br/>Punkty przera�enia " + patty.fear_points + "<br/>Bro� " +
 patty.weapon);
 $(".ui-widget-content").filter(".4").html("Imi� " + victor.name + "<br/>Si�a " + victor.strengh +
 "<br/>Celno�� " + victor.accuracy + "<br/>Inteligencja " + victor.intaligence + 
 "<br/>Punkty przera�enia " + victor.fear_points + "<br/>Bro� " +
 victor.weapon);
 $(".ui-widget-content").filter(".5").html("Imi� " + olivia.name + "<br/>Si�a " + olivia.strengh +
 "<br/>Celno�� " + olivia.accuracy + "<br/>Inteligencja " + olivia.intaligence + 
 "<br/>Punkty przera�enia " + olivia.fear_points + "<br/>Bro� " +
 olivia.weapon);

 function dodaj(a)
{
return a;
}

Gracze();
 
$(".player").filter(".1").on("click", function() {

$(this).addClass('highlighted');
//alert(john.name);
	//wybor = john;
	
// var $link = $("<div><a href=\"index.html\">Str </a></div>");
 //$link;
  //window.location = $(this).attr("index.html
    
  window.location = "index.html";
  //$("a").attr("href", "http://www.google.com/");
   // return false;
 //$("a").attr("href", "http://www.google.com/");
});
$(".player").filter(".3").click(function(){
	wybor.name = patty.name;
	//alert(wybor.name);
	return wybor;
});

//alert(wybor.name);
$(".player").filter(".2").click(function() {
$(this).addClass('highlighted');
	wybor.name = sam.name;
	//$(this).html("Imi�"
	//		);
	window.location = "index.html";
	
});
function dodaj()
	{
		wybor.name = sam.name;
	//$(this).html("Imi�"
	//		);
	
	}
function funk1(){
	//wybor.name = sam.name;
	//$(this).html("Imi�"
	//		);
	window.location = "index.html";
}
$(".player").filter(".3").click(function() {
	$(this).addClass('highlighted');
	//wybor = patty;
	
	window.location = "index.html";

});
$(".player").filter(".4").click(function() {
	$(this).addClass('highlighted');
	//wybor = victor;
	
	window.location = "index.html";
	
});
$(".player").filter(".5").click(function() {
	$(this).addClass('highlighted');
	//wybor = olivia;
	window.location = "index.html";
	
});



/*$("a").attr("href", "http://www.google.com/");
*/


//alert(john.weapon);
//};
//drukuj();
        


$(".player").filter(".5").click(function() {
var john = new Gracz('1','John','7','5','5','6','Pi�a');
var sam   = new Gracz('2','Sam','4','5','7','7','Pistolet');
var patty = new Gracz('3','Patty','6','5','4','8','Toporek');
var victor = new Gracz('4','Victor','4','4','8','7','Paralizator');
var olivia = new Gracz('5','Olivia','5','7','5','6','Pi�a');
var wybor =  new Gracz('6','','','','','','');

$(".wybrany").html("Imi�"
+ wybor.name + "<br/>Si�a " + wybor.strengh +
"<br/>Celno�� " + wybor.accuracy + "<br/>Inteligencja " + wybor.intaligence + "<br/>Punkty przera�enia " + wybor.fear_points + "<br/>Bro� " + wybor.weapon);
});
});