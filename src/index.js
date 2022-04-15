import { Howl, Howler } from "howler";

const container = document.querySelector(".container");

const music = new Howl({
  src: [
    "sounds/acdc.mp3"
  ],
  loop: true,
  volume: 0.1,
  sprite: {
    begin: [0],
    last: [54000, 54020]
  }
});

const music2 = new Howl({
  src: [
    "sounds/acdc.mp3"
  ],
  loop: true,
  volume: 0.1,

});

const sound = new Howl({
  src: [
    "sounds/scorp.mp3"
  ],
  volume: 0.1,
  onend: () => {
    music.play("last");
  },
});

const sound2 = new Howl({
  src: [
    "sounds/scorp.mp3"
  ],
  volume: 0.1
});

sound2.on("end", () => {
  music2.play();
});


// const button = document.createElement("button");
// button.textContent = "Play";
// button.addEventListener("click", () => {
//   music2.play();
// });
// container.appendChild(button);


// Play y Pausa

function createButton(text, action) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", action);
  container.appendChild(button);
};

createButton("Play", () => music2.play());
createButton("Pause", () => music2.pause());

// button 2

const button2 = document.createElement("button");
button2.textContent = "Sprite";
button2.addEventListener("click", () => {
  sound.play();
});
container.appendChild(button2);

// button 3

const button3 = document.createElement("button");
button3.textContent = "on('end')";
button3.addEventListener("click", () => {
  sound2.play();
});
container.appendChild(button3);

// button 4

const button4 = document.createElement("button");
button4.textContent = "Stop!";
button4.addEventListener("click", () => {
  music.stop(), music2.stop();
});
container.appendChild(button4);


