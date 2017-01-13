function setup() {
	//createCanvas(480, 120);
	createCanvas(windowWidth, windowHeight);
	fill(25, 70, 40);
	stroke(50, 40, 30);
	frameRate(6);
	background(0);
}	

function draw() {
	//background(0);
	for (var y = 20; y <= windowHeight-20; y += 65) {
		for (var x = 20; x <= windowWidth-20; x += 55) {
			
			//Draw a line to the center of the display
			//line(x, y, 240, 60);
			rX = random(windowWidth);
			rY = random(windowHeight);
			line(rX, rY, windowWidth/2, windowHeight/2);
			//noStroke();
			weight = random(16);
			strokeWeight(weight);
			red = random(255);
			green = random(255);
			blue = random(255)
			stroke(red, green, blue);
			//fill(random(255), random(255), random(255));
			fill(red, green, blue);
			//ellipse(rX, rY, random(16), random(16));
			ellipse(rX, rY, random(weight), random(weight));
		}
	} 
 }

function windowResized() {
	background(0);
	resizeCanvas(windowWidth, windowHeight);
}