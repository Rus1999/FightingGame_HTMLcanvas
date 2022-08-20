// select the canvas from html that has element name ('canvas')
const canvas = document.querySelector("canvas");

// select canvas context '2d' or '3d'
const c = canvas.getContext("2d");

// resize canvas 16:9
canvas.width = 1024;
canvas.height = 576;

// fill entire canvas
c.fillRect(0, 0, canvas.width, canvas.height);

// class
class Sprite {
  //   when object is instaniated will receive position to set the sprite position when object is created
  constructor(position) {
    this.position = position;
  }
  // draw sprite
  draw() {
    c.fillRect();
  }
}

// create player object with Sprite class
const player = new Sprite({
  x: 0,
  y: 0,
});

console.log(player);
