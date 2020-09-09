var board 
var row1 = 0;
var snake1,snake2;
var ladder1,ladder2;
var dice;

function preload(){

  snake1Image = loadImage("capture.PNG");
  snake2Image = loadImage("images.png");
  ladder1Image = loadImage("Capture3.PNG")
  ladder2Image = loadImage("Capture1.PNG")
  ladder3Image = loadImage("Capture2.PNG")

  diceImage1 = loadImage("dieWhite1.png")
  diceImage2 = loadImage("dieWhite2.png")
  diceImage3 = loadImage("dieWhite3.png")
  diceImage4 = loadImage("dieWhite4.png")
  diceImage5 = loadImage("dieWhite5.png")
  diceImage6 = loadImage("dieWhite6.png")
}


function setup() {
  createCanvas(800,800);
  
  for(var i = 30; i<600; i=i+120){
   var box = createSprite(i,30,60,60);
   box.shapeColor = "red";
   row1=row1+1;
   fill("black")
   text(row1,i+10,40)
   console.log(row1)
   
  }
    


  for(var i = 30; i<600; i=i+120){
    var box2 = createSprite(i,90,60,60);
    box2.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box3 = createSprite(i,150,60,60);
    box3.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box4 = createSprite(i,210,60,60);
    box4.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box5 = createSprite(i,270,60,60);
    box5.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box6 = createSprite(i,330,60,60);
    box6.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box7 = createSprite(i,390,60,60);
    box7.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box8 = createSprite(i,450,60,60);
    box8.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box9 = createSprite(i,510,60,60);
    box9.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box10 = createSprite(i,570,60,60);
    box10.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box11 = createSprite(i,30,60,60)
    box11.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box12 = createSprite(i,90,60,60)
    box12.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box13 = createSprite(i,150,60,60)
    box13.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box14 = createSprite(i,210,60,60)
    box14.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box15 = createSprite(i,270,60,60)
    box15.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box16 = createSprite(i,330,60,60)
    box16.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box17 = createSprite(i,390,60,60)
    box17.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box18 = createSprite(i,450,60,60)
    box18.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box19 = createSprite(i,510,60,60)
    box19.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box20 = createSprite(i,570,60,60)
    box20.shapeColor = "red";
  }

  snake1 = createSprite(140,475,100,100);
  snake1.addImage("Capture.PNG",snake1Image);
  snake2 = createSprite(220,150,100,100);
  snake2.addImage("images.png",snake2Image);
  ladder1 = createSprite(270,480,100,100);
  ladder1.addImage("Capture3.PNG",ladder1Image);
  ladder2 = createSprite(510,280,100,100);
  ladder2.addImage("Capture1.PNG",ladder2Image);
  ladder3 = createSprite(90,180,100,100);
  ladder3.addImage("Capture2.PNG",ladder3Image);

  snake1.scale=0.65;
  ladder3.scale=0.8;
  ladder2.scale=0.7;
  ladder1.scale=0.7;
  snake2.scale=1.2;
}

function draw() {
  background(255,255,255);  
  
  dice();
  drawSprites();
}

function dice(){
  var dice = createSprite(300,300,50,50);
  dice.addImage(diceImage1);
  
  
  if(mousePressedOver(dice)){

   //console.log(rand);
var rand = Math.round(random(1,6));
  switch(rand) {
    case 1: dice.addImage(diceImage1);
            break;
    case 2: dice.addImage(diceImage2);
            break;
    case 3: dice.addImage(diceImage3);
            break;
    case 4: dice.addImage(diceImage4);
            break;
    case 5: dice.addImage(diceImage5);
            break;
    case 6: dice.addImage(diceImage6);
            break;
    default: dice.addImage(diceImage1);
       break;
  }
  }

}