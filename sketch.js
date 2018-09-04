// Springy animation tutorial
// https://www.youtube.com/watch?v=VWfXiSUDquw

var pos =0;
var target = 100;
var strength = 0.03;
var strengthMin = 0.01;
var strengthStep = 0.01;
var strengthMax = 1;

var vel =0;
var drag = 0.85;
var dragMin = 0.1;
var dragMax = 0.99;
var dragStep = 0.01;
var offset = 0;
var offsetMin = -20;
var offsetMax = 20;
var offsetStep = 0.01;

var acc = 0.1;

var accMin = 0.1;
var accMax = 1;
var accStep = 0.01;

var move = 30;
var moveVal = 0;

var backupDelay = 50;
var backupDelayMax = 1000;
var moveDelay = 200;
var moveDelayMax = 1000;

var backup = 10;


var keyPressedOnce;
var gui;
function setup() {
  createCanvas(600,600);
  gui = createGui('Spring Setting', width/3*2,10);
  gui.addGlobals('drag','strength',"backupDelay","moveDelay","move","backup");
  textSize(30);
    
}

function draw() {
  background(50);
  text("Movement : d - move right, r - reset position ", 0, height-90);

  // target = mouseX;

  //pull spring;s distance between the mouse and the ball
  var force = target - pos;
  // print(force)
  //scale how strong the pull is
  force *= strength;
  
  //slow down the velocity
  vel *= drag;
  
  // force+= moveVal;
  // moveVal = 0;
  vel += force;
  
  //add the position to the current position
  pos += vel;
  // pos = target;
  rect(pos,200,40,40);
}
function keyTyped() {
  if (key === "d") {
    print("d");
    setTimeout(function(){
      target -= backup;
    },backupDelay);
    setTimeout(function(){
      target += move;
    },moveDelay);
  } 
  
  if (key === "r") {
   target = 0;
  }
}
