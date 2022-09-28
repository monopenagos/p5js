let list;
let colorFrgnH = 0;
let colorFrgnS = 0;
let colorFrgnL = 0;

function setup() {
  createCanvas(600, 600);
  colorMode(HSL);
  // noLoop();
}

function draw() {
  let colorBackground = color(0, 0, 15);
  background(colorBackground);
  for (let counter = 0; counter < width; counter++) {
    list = generate(counter, width);
    for (let paintPoints = 0; paintPoints < height; paintPoints++) {
      strokeWeight(random(1, 2));
      colorFrgnH = random(190, 250); //(170, 250);
      colorFrgnS = random(50, 100); //(50, 100);
      colorFrgnL = random(20, 80); //(20, 80);
      stroke(colorFrgnH, colorFrgnS, colorFrgnL, random());
      point(list[paintPoints], counter);
    }
  }
}

function generate(randomPoints, widthExtent) {
  let arrayContainer = []; // this arrays holds the random numbers generated;
  const genNum = Math.floor(Math.random() * widthExtent) + 1;
  arrayContainer.push(genNum);
  for (let counter = 1; counter < randomPoints; counter++) {
    let newGen = Math.floor(Math.random() * widthExtent) + 1;
    while (arrayContainer.lastIndexOf(newGen) !== -1) {
      newGen = Math.floor(Math.random() * widthExtent) + 1;
    }
    arrayContainer.push(newGen);
  }
  arrayContainer.sort((a, b) => a - b);
  return arrayContainer;
}
