let sprite
let speedX = 0
let speedY = 0
const size = 128
let walk = 0
let bool = false
let escala = 1
let dx = 0
let stepX = 0 	
let stepY = 0

function preload(){
	sprite=loadImage('images/sprite.jpg')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(1500)
}

function draw() {
	background('white');
	translate(dx,0);
	scale(escala,1);
	copy(sprite,speedX,speedY,128,128,stepX,stepY,128,128);
	speedX += size
	//walk++
	//speedY += size
	if(speedX==512){
		speedX = 0
		speedY += size
	}
	if(speedY==512){
		speedY = 0
		speedX = 0
	}

	if(stepX > windowWidth){
		stepY+=150
		speedX = 0 
		if(!bool){
			escala = -1
			dx = windowWidth
			bool = true 
		} else {
			escala = 1
			dx = 128
			bool = false 
		}
	}

	stepX+=5
	if(stepY >= 540){
		speedX = 0
		speedY = 0
		stepX = 0
		stepY = 0
		scale = 1
		dx = 0 
		bool = false
	}
}