var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1 = createSprite(0,580,360,30);
block1.shapeColor = "yellow";

block2 = createSprite(295,580,200,30);
block2.shapeColor = "green";

block3 = createSprite(515,580,200,30);
block3.shapeColor = "red";

block4 = createSprite(740,580,220,30);
block4.shapeColor = "orange";
    
ball = createSprite(random(20,750),200,40,40);
ball.velocityY = 5;
ball.velocityX = 5;
}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if (ball.isTouching(block1)&& ball.bounceOff(block1)) {
        ball.shapeColor = "yellow";
    }

    if (ball.isTouching(block2)&& ball.bounceOff(block2)) {
        ball.shapeColor = "green";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    
    if (ball.isTouching(block3)&& ball.bounceOff(block3)) {
        ball.shapeColor = "red";
        music.play();
    }

    if (ball.isTouching(block4)&& ball.bounceOff(block4)) {
        ball.shapeColor = "orange";
    }

drawSprites();    
}
