
var Pacman = function(centerX,centerY){
    this.centerX = centerX;
    this.centerY = centerY;

    this.step=10;

    this.startAngle = Math.PI/5;
    this.endAngle = 2*Math.PI - Math.PI/5;
};

Pacman.prototype.moveLeft = function(){ 
    this.startAngle = Math.PI + Math.PI/5;
    this.endAngle = Math.PI - Math.PI/5;
    this.centerX = this.centerX - this.step;
};

Pacman.prototype.moveRight = function(){ 
    this.startAngle = Math.PI/5;
    this.endAngle = 2*Math.PI - Math.PI/5;
    this.centerX = this.centerX + this.step;
};

Pacman.prototype.moveDown = function(){ 
    this.startAngle = Math.PI/2 + Math.PI/5;
    this.endAngle = Math.PI/2 - Math.PI/5;
    this.centerY = this.centerY + this.step;
};

Pacman.prototype.moveUp = function(){ 
    this.startAngle = 3*Math.PI/2 + Math.PI/5;
    this.endAngle = 3*Math.PI/2 - Math.PI/5;
    this.centerY = this.centerY - this.step;
};

Pacman.prototype.draw = function(ctx){
    if(this.centerY < 0){
        this.centerY = 600; 
    };

    if(this.centerY > 600){
        this.centerY = 0; 
    };

    if(this.centerX < 0){
        this.centerX = 600; 
    };

    if(this.centerX > 600){
        this.centerX = 0; 
    };

    var radius = 20;
    ctx.beginPath();

    var xMouth = radius * Math.cos(this.startAngle);
    var yMouth = radius * Math.sin(this.startAngle);
    
    ctx.moveTo(this.centerX,this.centerY);
    ctx.lineTo(xMouth + this.centerX, yMouth+this.centerY);

    ctx.arc(this.centerX, this.centerY, radius, this.startAngle, this.endAngle);
    
    ctx.lineTo(this.centerX,this.centerY);
    
    
    ctx.closePath();
    ctx.fillStyle="yellow";
    
    ctx.fill();
    ctx.stroke();
};


window.addEventListener("keydown",this.keyDown,true);
window.addEventListener("keyup",this.keyUp,true);
window.addEventListener("keypress",this.keyPress,true);

var canvas = document.querySelector('canvas');


var pacman = new Pacman(100,100);


canvas.height=600;
canvas.width = 600;
var ctx = canvas.getContext("2d");

pacman.draw(ctx);


function keyDown(e) {
    console.log ("keyDown: " + e.keyCode);

    if(e.keyCode == 37){
      pacman.moveLeft();  
    };

    if(e.keyCode == 39) {
        pacman.moveRight();
    };

    if(e.keyCode == 40){
        pacman.moveDown();
    };

    if(e.keyCode == 38){
        pacman.moveUp();
    };

    ctx.clearRect(0,0,600,600);
    pacman.draw(ctx);

};


function keyUp(e) {
    console.log ("keyUp:" + e.keyCode);
};

function keyPress(e){
    console.log ("keyPress"+e.keyCode);
};

canvas.addEventListener( "keydown", keyDown, true);
canvas.addEventListener( "keyUp", keyUp, true);


function keyUp() {
    console.log ("keyUp");
};