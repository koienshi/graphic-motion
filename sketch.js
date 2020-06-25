var x = 30;
var y = 30;
var linex = 0;
var liney = 400;
var value = 255;
var value2 = 255;
var linemove = 4;
var rectx = 0;
var recty = 0;
var ballsize = 60;
var bx = 50;
var bx2 = 125;
var bx3 = 200;
var bx4 = 275;
var bx5 = 350;
var wallx = 80;
var wally = 90;
var wallx2 = 170;
var wally2 = 170;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(153);
  
  noStroke();
  fill(value);
  ellipse(width/2, height/2, x, x);
    x = x + 9;  
    value = value - 3;
  if (value <= 150)

  fill(value2);
  ellipse(width/2, height/2, y, y);
  if (value <= 219)
    y = y + 9;
  if (value <= 219)
    value2 = value2 - 3;

  if (x >= 800 || y >= 800) {
    stroke(255)
  } else {
    noStroke();
  }
  strokeWeight(5);
  line(linex,0,linex,400); //vertical
  line(0,liney,400,liney); //horizontal
  if (x >= 800 || y >= 800) {
    linex = linex + linemove;
    liney = liney - linemove;
  } else {
    linex = 0;
    liney = 400;
  }
  
  fill(255);
  rect(0,400,rectx, recty);
  if (x >= 800 || y >= 800) {
    rectx = rectx + linemove;
    recty = recty - linemove;
  } else {
    rectx = 0;
    recty = 0;
  }
  
  if (rectx >= 100 || recty >= 100) {
    fill(130);
    ellipse(bx, 350, ballsize, ballsize);
  }
  if (rectx >= 200 || recty >= 200) {
    ellipse(bx2, 275, ballsize, ballsize);
  }
  if (rectx >= 300 || recty >= 300) {
    ellipse(bx3, 200, ballsize, ballsize);
  }
  if (rectx >= 400 || recty >= 400) {
    ellipse(bx4, 125, ballsize, ballsize);
  }
  if (rectx >= 500 || recty >= 500) {
    ellipse(bx5, 50, ballsize, ballsize);
  }
  
  if (rectx >= 500 || recty >= 500) {
    bx = bx + 5;
    bx2 = bx2 + 2.5;
    bx4 = bx4 - 2.5;
    bx5 = bx5 - 5;
  }
  
  if (bx >= 100) {
    fill(0);
    rect(410,-10,wallx,wally);
    wallx = wallx - 5;
  }
  if (bx2 >= 100) {
    rect(410, 75, wallx2, wally2);
  }
}