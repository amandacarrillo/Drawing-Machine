let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);
}

function draw() {
  colorMode(HSB);
  if (mouseIsPressed) {
    //noStroke();
    stroke(mouseX/ 10, mouseY/10, 100);
    //fill((5 * frameCount) % 360, 100, 100);
    console.log(windowWidth);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  colorMode(RGB);
}

function keyTyped() {
  if (key === 'c') {
    //clear drawing
    clear();
    background(0);
  } else if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  }

  return false;

}
//
