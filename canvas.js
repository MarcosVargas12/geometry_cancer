var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var d = canvas.getContext('3d');
let time = 0;
// prueba 2 de circulo animado: 
let score = 0;
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 80;
var x_button = innerWidth/2;
var y_button = innerHeight/2;
var radius_button = 40;

window.addEventListener('mousemove',function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('click', function(event){
    if (radius_button + event.x > x_button || event.x - radius_button < x_button){
        animate();
    }
})

var circleArray =[];


function Circle(x, y, dx, dy, radius, colorFill, id) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.colorFill = colorFill;
    this.id = id;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.colorFill
        c.fill();
    }

    this.update = function() {
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
            
        this.x += this.dx;
        this.y += this.dy;

        //interactivity begin

        if (mouse.x - this.x < 50 && 
            mouse.x - this.x > -50 && 
            mouse.y - this.y < 50 && 
            mouse.y - this.y > -50){

            if (this.radius < maxRadius){
                this.radius +=1; 
                if (this.radius > maxRadius){
                    //debugger
                circleArray.splice(this.id, 1)
                score+=1
                
            }

            }
        } else if (this.radius > this.minRadius){
            this.radius -=1
        }

        this.draw();
    }
}


for (var i = 0; i < 100; i++) {
    var radius = Math.random() * 10 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var colorFill = `rgba(${Math.random() * 50},${Math.random() * 255},${Math.random() * 2550},${Math.random()})`
    
    circleArray.push(new Circle (x, y, dx, dy, radius, colorFill, i))
    
}

function animate() {
    
    time +=1
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth,innerHeight);
    for (var i = 0; i < circleArray.length;i++){
        circleArray[i].update();
    }

    
    c.beginPath();
    c.fillStyle= `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1`
    c.font = '70px Courier'
    c.fillText('Puntaje: ' + score, innerWidth*.05, innerHeight/15);


    c.beginPath();
    c.fillStyle= `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1`
    c.font = '70px Courier'
    c.fillText('Tiempo: ' + time, innerWidth*.8, innerHeight/15)
   

    console.log(circleArray.length)
}

//animate();


    c.beginPath();
    c.arc(innerWidth/2, innerHeight/2, radius_button, 0, Math.PI * 2, false);
    c.fillStyle= `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1`
    c.fill()

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle= "blue"
//     c.stroke()
//     for (var i = 0; i < 5 ; i++) {
//         var x = Math.random() * window.innerWidth;
//         var y = Math.random() * window.innerHeight;
//         c.beginPath();
//         c.arc(x, y, 30, 0, Math.PI * 2, false);
//         c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random()})`
//         c.stroke()
//     }

//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx; dy = +dy;
//     }
//     if (y + radius > innerHeight || y - radius < 0){
//         dx = +dx; dy = -dy;
//     }
    
//     x += dx;
//     y += dy;
    
// }

// animate();

//ARC / Circle

// var x = 200;
// var y = 200;
// var dx = 5;
// var dy = 5;
// var radius = 30;

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x,y,radius,0,Math)
//     c.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random()})`
//     c.stroke()

// }

// animate();
