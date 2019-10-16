var w = 10;
var vel = 10;
var snake;
var rat;
var fr = 15;
function setup() {
    createCanvas(640,360);
	frameRate(fr);
    snake = new Cobra();
	rat = new Food();
    
}

function draw() {
  background(0);
  if(snake.alive){
	  snake.eatBody();
	  snake.move();
	  snake.checkWall();
	  snake.eat(rat);
	  if (!rat.eaten){
		rat.display();
	  }
	  else {
		rat.newFood();
	   }
	  snake.display();
  }
  else {
	  background(255);
	  noLoop();
  }
  console.log(rat.x)
}

function keyPressed(){
    if(keyCode === LEFT_ARROW && snake.velx == 0){
        snake.velx = -vel;
        snake.vely = 0;
    }
    else if(keyCode == RIGHT_ARROW && snake.velx == 0){
        snake.velx = vel;
        snake.vely = 0;
    }
    else if(keyCode == DOWN_ARROW && snake.vely == 0){
        snake.velx = 0;
        snake.vely = vel;
    }
    else if(keyCode == UP_ARROW && snake.vely == 0){
        snake.velx = 0;
        snake.vely = -vel;
    }
}

