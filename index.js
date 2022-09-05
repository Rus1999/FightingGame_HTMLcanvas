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
  constructor({ position, velocity }) {
    // update position, velocity
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }
  // draw sprite
  draw() {
    // fill color 'red'
    c.fillStyle = "red";
    // fillRect(x, y, width, height)
    c.fillRect(this.position.x, this.position.y, 50, 150);
  }

  // function to draw
  update() {
    this.draw();
    // adding position.y until its hit the ground
    this.position.y += this.velocity.y;

    // if bottom of sprite >= canvas height (576) then stop increasing velocity.y
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    }
  }
}

// create player object with Sprite class
const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 1,
  },
});

// create enemy
const enemy = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 1,
  },
});

// draw player, enemy
enemy.draw();

// log the player position
console.log(player);

// creating a infinite loop
function animate() {
  window.requestAnimationFrame(animate);
  // change fill Style to black(background)
  c.fillStyle = "black";
  // fill the entire screen to delete old rectangle to make player and enemy seem to move
  c.fillRect(0, 0, canvas.width, canvas.height);
  // call player and enemy update
  player.update();
  enemy.update();
}

animate();
