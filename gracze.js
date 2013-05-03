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