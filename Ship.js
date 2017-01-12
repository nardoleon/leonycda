function Ship(){
//this.set_velocity = function(speed){
//this.velocity = speed;
//}
  this.temperature = 100;
//ship()
}
Ship.prototype.set_velocity = function(velocity){
this.velocity = velocity;

};
var kiui =  new Ship();
kiui.set_velocity (100);
console.log (kiui);

var canfire = true; {

}
var ALLY = new Ship();
ALLY.prototype = new Ship();
ALLY.side = "ALLY";
ALLY.name = "ALLY";
ALLY.prototype_speed ='7';
ALLY.prototype_color = ('pink');


console.log(ALLY);



var ENEMY = new Ship();
ENEMY.prototype = new Ship();
ENEMY.side = "ENEMY";
ENEMY.name = "ENEMY";
ENEMY.prototype_color = ('orange');
console.log(ENEMY);
