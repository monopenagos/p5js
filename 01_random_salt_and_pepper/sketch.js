let list;

function setup() {
  createCanvas(400, 400);

  list = generate();
  //console.log(list);

  noLoop();
}

function draw() {
  background(220);
}

function generate() {
  let arrayContainer = []; // this arrays holds the random numbers generated;
  let randomPoints = 10;
  let widthExtent = 50;

  const genNum = Math.floor(Math.random() * widthExtent) + 1;
  arrayContainer.push(genNum);
  //console.time();
  for (let counter = 1; counter < randomPoints; counter++) {
    //the counter is less than five because we already initialise arrayContainer[0] with genNum
    let newGen = Math.floor(Math.random() * widthExtent) + 1;
    while (arrayContainer.lastIndexOf(newGen) !== -1) {
      newGen = Math.floor(Math.random() * widthExtent) + 1;
    }
    arrayContainer.push(newGen);
  }
  //console.timeEnd();
  console.log(arrayContainer);
  arrayContainer.sort((a, b) => a - b);
  console.log(arrayContainer);
  return arrayContainer;
}
