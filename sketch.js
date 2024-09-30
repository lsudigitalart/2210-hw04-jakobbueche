
///////////////////
// IN CLASS DEMO //
///////////////////

/* function setup () {

    createCanvas(800,600)
    noCursor()
    circleSize = 50
    sqx = 1300;
    sqy = 200;
    sqS = 200;

}

var circleSize;
var sqx;
var sqy;

function draw () {

    background(0)

    fill(225)

    ellipse(mouseX,mouseY,circleSize)

    if(mouseX > sqx - circleSize/2 && mouseX < sqS*2 + circleSize/2) {
        if(mouseY > sqy - circleSize/2 && mouseY < sqS*2 + circleSize/2) {
          fill(255,255,0)    
        }

    }

    square(sqx,sqy,sqS)
   
} */

/////////////
// MY GAME //
/////////////

let x = 20;
let y = 300;
let img
let cWhite;
let cBlack;

function preload() {
    img = loadImage('simplemazebam.jpg');
}

function setup() {
  createCanvas(600, 600);
//    cWhite = color(255, 255, 255, 255);
   cWhite = [255, 255, 255, 255];

   cBlack = color(0, 0, 0, 255);
 
   c = [0, 0, 0, 255]
  //image(img, 0, 0);

  s = 10;
}

let c;

function draw() {

    image(img, 0, 0);
    //background(0);

  if (keyIsDown(LEFT_ARROW) === true) {
    x -= 3;
    c = get(x,y);
    print(c)
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x += 3;
    c = get(x,y);
    print(c)
  }

  if (keyIsDown(UP_ARROW) === true) {
    y -= 3;
    c = get(x,y);
    print(c)
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    y += 3;
    c = get(x,y);
    print(c)

  }

  noStroke();
  fill(255);
  circle(x, y, s);

  if(c[0] == 255) {
    print("out")
    x = 20
    y = 300
  }

}