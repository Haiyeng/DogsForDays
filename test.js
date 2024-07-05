var centerX = 200;
var centerY = 220;
var centerBaseline = 225;

var outerRadius = 95;
var innerRadius = 55;

var dogNum = 30;

var conditions = [
  { 'name': 'rainy', 'rainydays': 4, 'grayscale': 0 },
  { 'name': 'cloudy', 'cloudydays': 9, 'grayscale': 102 },
  { 'name': 'sunny', 'sunnydays': 17, 'grayscale': 179 } 
];



function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);
  

  fill(0);
  textAlign(LEFT);
  text("Sky Conditions", 45, 95);
  
  fill(0);
  
  
  
  noStroke();
  ellipseMode(RADIUS);
  var angleStart1 = -HALF_PI;
  var angleStart2 = -HALF_PI;
  var angleStart3 = -HALF_PI;  // start at the top
  for (var c = 0; c < 3; c++) {
    var dogData = conditions[c];
    fill(dogData.grayscale);
    var wedgeSize1 = map(dogData.rainydays, 0, dogNum, 0, TAU);
    var wedgeSize2 = map(dogData.cloudydays, 0, dogNum, 0, TAU);
    var wedgeSize3 = map(dogData.sunnydays, 0, dogNum, 0, TAU);
    var angleStop1 = angleStart1 + wedgeSize1;
    var angleStop2 = angleStart2 + wedgeSize2;
    var angleStop3 = angleStart3 + wedgeSize3;
    arc(centerX, centerY, outerRadius, outerRadius, angleStart1, angleStop1);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart2, angleStop2);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart3, angleStop3);
    angleStart1 = angleStop1;
    angleStart2 = angleStop1;
    angleStart3 = angleStop2;

  }
  // knock a hole out of the middle
  fill(255);
  ellipse(centerX, centerY, innerRadius, innerRadius);
  
  // draw the legend
  var legendX = 320;
  var y = 250;
  var legendBox = 8;
  noStroke();
  textAlign(LEFT);
  for (var c = 0; c < conditions.length; c++) {
    var dogData = conditions[c];
    fill(dogData.grayscale);
    rect(legendX, y-legendBox, legendBox, legendBox);
    fill(0);
    text(dogData.name, legendX + legendBox + 5, y);
    y += 20;
  }
  
  fill(0);
  textAlign(CENTER);
  text("June 2016", width/2, 225);
  text("Cambridge, Massachusetts", width/2, 355);
}
