const oppy = document.getElementById("oppy");
const thought = document.getElementById("thought-bubble");
const sound = document.getElementById("sound");

const actions = {
  jump: {
    oppositeImage: "images/sit.gif",
    thought: "Nah, I’d rather sit. 😎",
    sound: "sounds/sit.mp3"
  },
  smile: {
    oppositeImage: "images/frown.gif",
    thought: "Smiling is overrated. 😒",
    sound: "sounds/grump.mp3"
  },
  sit: {
    oppositeImage: "images/jump.gif",
    thought: "I wanna jump around! 🕺",
    sound: "sounds/boing.mp3"
  },
  wave: {
    oppositeImage: "images/cross arm.gif",
    thought: "Waving? No thanks. 😤",
    sound: "sounds/nope.mp3"
  },
  sleep: {
    oppositeImage: "images/dance.gif",
    thought: "Sleep? It’s party time! 💃",
    sound: "sounds/party.mp3"
  },
  dance: {
    oppositeImage: "images/sleep.gif",
    thought: "Too lazy to dance... 💤",
    sound: "sounds/snore.mp3"
  },
  "say hello": {
    oppositeImage: "images/back.gif",
    thought: "I'm ignoring you 😏",
    sound: "sounds/ignore.mp3"
  },
  walk: {
    oppositeImage: "images/walk.gif",
    thought: "I’ll run... very... fast... 🐌",
    sound: "sounds/fast.mp3"
  }
};

function sendCommand(command) {
  const action = actions[command];
  if (!action) return;

  // Change Oppy's image
  oppy.src = action.oppositeImage;

  // Show thought bubble
  thought.innerText = action.thought;
  thought.style.display = "block";
  setTimeout(() => {
    thought.style.display = "none";
  }, 2500);

  // Play sound
  sound.src = action.sound;
  sound.play();
}
