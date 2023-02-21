
// let sound1 = new Tone.Player("sounds/whopper.mp3");

let sounds = new Tone.Players({

  "Charizard": "sounds/charizard.mp3",
  "Mew": "sounds/mew.mp3",
  "Mewtwo": "sounds/mewtwo.mp3",
  "Squirtle": "sounds/squirtle.mp3",

})

const vol = new Tone.Volume(0).toDestination();

let vSlider;

let soundNames = ["Charizard", "Mew", "Mewtwo", "Squirtle"];
let buttons = [];

function setup() {
  createCanvas(600, 400);
  sounds.connect(vol);
  vol.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index+250, 50+index*50);
    buttons[index].mousePressed(() => buttonSound(word));
  })

  vSlider = createSlider(-10, 15, 0, 1);
  vSlider.mouseReleased( () => {
    vol.volume.value = vSlider.value();
  })
  
}

function draw() {
  background(220, 0, 0);
  fill('white')
  textSize(20)
  text("Select the Pokemon sound you want to play", 110, 15)
  text("Control the volume using the slider", 5, 390)

  
}

function buttonSound(whichSound) {
  sounds.player(whichSound).start();
}