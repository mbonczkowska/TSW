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

var john = new Gracz('1','John','7','5','5','6','Saw');
var sam   = new Gracz('2','Sam','4','5','7','7','Gun');
var patty = new Gracz('3','Patty','6','5','4','8','Ax');
var victor = new Gracz('4','Victor','4','4','8','7','Paralyzer');
var olivia = new Gracz('5','Olivia','5','7','5','6','Saw');

//felix.pet();          // alerts 'Purr!'
//sam.callOver();       // alerts 'Sam ignores you'.  Just like a cat!
//alert(patty.species); // alerts 'cat'

var wybor;
var pom = 0;

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

 $("#player1").html("Imię " + john.name + "<br/>Siła " + john.strengh +
 "<br/>Celność " + john.accuracy + "<br/>Inteligencja " + john.intaligence + 
 "<br/>Punkty przerażenia " + john.fear_points + "<br/>Broń " +
 john.weapon);
 $("#player2").html("Imię " + sam.name + "<br/>Siła " + sam.strengh +
 "<br/>Celność " + sam.accuracy + "<br/>Inteligencja " + sam.intaligence + 
 "<br/>Punkty przerażenia " + sam.fear_points + "<br/>Broń " +
 sam.weapon);
 $("#player3").html("Imię " + patty.name + "<br/>Siła " + patty.strengh +
 "<br/>Celność " + patty.accuracy + "<br/>Inteligencja " + patty.intaligence + 
 "<br/>Punkty przerażenia " + patty.fear_points + "<br/>Broń " +
 patty.weapon);
 $("#player4").html("Imię " + victor.name + "<br/>Siła " + victor.strengh +
 "<br/>Celność " + victor.accuracy + "<br/>Inteligencja " + victor.intaligence + 
 "<br/>Punkty przerażenia " + victor.fear_points + "<br/>Broń " +
 victor.weapon);
 $("#player5").html("Imię " + olivia.name + "<br/>Siła " + olivia.strengh +
 "<br/>Celność " + olivia.accuracy + "<br/>Inteligencja " + olivia.intaligence + 
 "<br/>Punkty przerażenia " + olivia.fear_points + "<br/>Broń " +
 olivia.weapon);

$("#player1").click(function() {
	window.main = john;
// var $link = $("<div><a href=\"index.html\">Str </a></div>");
 //$link;
  //window.location = $(this).attr("index.html
  window.location = "index.html";
  //$("a").attr("href", "http://www.google.com/");
   // return false;
 //$("a").attr("href", "http://www.google.com/");
});
$("#player2").click(function() {
	wybor = sam;
	window.location = "index.html";
	
});
$("#player3").click(function() {
	wybor = patty;
	window.location = "index.html";
	
});
$("#player4").click(function() {
	wybor = victor;
	window.location = "index.html";
	
});
$("#player5").click(function() {
	wybor = olivia;
	window.location = "index.html";
	
});
$("a").attr("href", "http://www.google.com/");
//alert(john.weapon);
//};
//drukuj();
        

			/*$("#wybrany").html("Imię"
			+ wybor.name + "<br/>Siła " + wybor.strengh +
			"<br/>Celność " + wybor.accuracy + "<br/>Inteligencja " + wybor.intaligence + 
			"<br/>Punkty przerażenia " + wybor.fear_points + "<br/>Broń " +
			wybor.weapon);
	*/
});
