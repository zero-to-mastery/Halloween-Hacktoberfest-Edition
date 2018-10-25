console.log("Beep!");

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var colors = [
    "#D97904",
    "#D96704",
    "#BF4904",
    "#8C2703",
    "#0D0D0D",
];

var pumpkin = new Image();
pumpkin.src = "../images/icons/cute-pumpkin.svg"; 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var circleArray = [];


	for (let i = 0; i < 100; i++){
		var x = Math.random() * (innerWidth - rad * 2) + rad;
		var y = Math.random() * (innerHeight - rad * 2) + rad;	
		var dx = (Math.random() - 0.5) * 4;
		var dy = (Math.random() - 0.5) * 4;
		var rad = 30;
		var color = colors[Math.floor(Math.random()*colors.length)];
		var icon = pumpkin;
		var idtag = Math.floor(Math.random()*4);


		// var randomColor = colors[Math.floor(Math.random()*colors.length)];

		circleArray.push(new Circle(x, y, dx, dy, rad, color))
	};

function Circle(x, y, dx, dy, rad, color){
	this.x = x;
	this.y = y;	
	this.dx = dx;
	this.dy = dx;
	this.rad = rad;
	this.color = color;
	this.icon = icon;
	this.idtag = idtag;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
		c.fillStyle = color;
		c.fill();
		if (this.idtag === 0){
			c.drawImage(this.icon, this.x-35, this.y-40, 70, 70)
		};

	}
	this.update = function(){

		if (this.x + this.rad  > innerWidth || this.x -  this.rad < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.rad  > innerHeight || this.y - this.rad < 0) {
			this. dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
};

function refresh() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// init();
	
};

function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, innerWidth, innerHeight);

   	for (var i = 0; i < circleArray.length; i++) {
   		circleArray[i].update();
   }
   addEventListener("resize", refresh);
};

animate();

console.log("Boop!");
