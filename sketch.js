
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
    
    //PUSH ARRAY OF POINTS
    for (var i=0; i<1000; i++) {
    points.push(new Points());
  }
    //for down population
     for (var i=0; i<1000; i++) {
    points.push(new PointsDown());
  }
}

function draw() {
  background(200);
  calcWave();
  renderWave();
}


//population going up
function Points() {
        this.x = width/2 + random(-60, 60);
        this.y = height/2 + random(700);  
    
//    this.move = function() {
//        this.y += random(-2);
//        if (this.y < 0) {
//            this.y = height;
//        }
//    };
    
    this.show = function() {
        stroke(random(100));
        strokeWeight(4);
        point(this.x, this.y);
    };
}

//population going down
function PointsDown() {
        this.x = width/2 + random(-60, 60);
        this.y =  random(-700);  
    
//    this.move = function() {
//        this.y += random(2);
//        if (this.y > height) {
//            this.y = 0;
//        }
//    };
    
    this.show = function() {
        stroke(random(105, 200));
        strokeWeight(4);
        point(this.x, this.y);
    };
}


function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
      for (var i=0; i<points.length; i++) {
        points[i].show();
        }  
  }
}

