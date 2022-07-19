let image = [
  "http://127.0.0.1:5500/1)Squid_Game/image/pink_soldier.png",
  "http://127.0.0.1:5500/1)Squid_Game/image/umbrella.jpg",
  "http://127.0.0.1:5500/1)Squid_Game/image/mask.png",
  "http://127.0.0.1:5500/1)Squid_Game/image/green.png",
  "http://127.0.0.1:5500/1)Squid_Game/image/doll_girl.png",
];
let human = document.getElementById("human");
let block = document.getElementsByClassName("block");
var myAudio = new Audio("./image/the-squid-game-theme-_-bgm-ringtone.mp3");
// Background Music 
document.getElementById("bgmusic_play").style.visibility = "hidden";
myAudio.play();
  document.getElementById("bgmusic_play").addEventListener("click", () => {
    document.getElementById("pause").style.visibility = "visible";
    document.getElementById("bgmusic_play").style.visibility = "hidden";
    if (typeof myAudio.loop == "boolean") {
      myAudio.loop = true;
    } else {
      myAudio.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
    myAudio.play();
  });
  // Background Music Pause
  document.getElementById("pause").addEventListener("click", () => {
    document.getElementById("bgmusic_play").style.visibility = "visible";
    document.getElementById("pause").style.visibility = "hidden";
    myAudio.pause();
  });
human_random();
for (let index = 0; index < image.length; index++) {
  var random = Math.floor(Math.random() * image.length);
  block[index].src = image[random];
}
function human_random() {
  var random = Math.floor(Math.random() * image.length);
  human.src = image[random];
}
console.log(human.src);
block[0].addEventListener("click", () => {
  changeImage(0);
  block_0();
});
block[1].addEventListener("click", () => {
  changeImage(1);
  block_1();
});
block[2].addEventListener("click", () => {
  changeImage(2);
  block_2();
});
block[3].addEventListener("click", () => {
  changeImage(3);
  block_3();
});
block[4].addEventListener("click", () => {
  changeImage(4);
  block_4();
});

function changeImage(value) {
  switch (block[value].src) {
    case image[0]:
      block[value].src = image[1];
      break;
    case image[1]:
      block[value].src = image[2];
      break;
    case image[2]:
      block[value].src = image[3];
      break;
    case image[3]:
      block[value].src = image[4];
      break;
    case image[4]:
      block[value].src = image[0];
      break;
  }
}
human.style.animation = "movement1 2s linear 1";
human.style.transform = "translate(150px,0)";
function block_0() {
  if (block[0].src == human.src) {
    human.style.animation = "movement2 2s linear 1";
    human.style.transform = "translate(350px,0)";
    human_random();
  }
}
function block_1() {
  if (block[1].src == human.src) {
    human.style.animation = "movement3 2s linear 1";
    human.style.transform = "translate(560px,0)";
    human_random();
  }
}
function block_2() {
  if (block[2].src == human.src) {
    human.style.animation = "movement4 2s linear 1";
    human.style.transform = "translate(760px,0)";
    human_random();
  }
}
function block_3() {
  if (block[3].src == human.src) {
    human.style.animation = "movement5 2s linear 1";
    human.style.transform = "translate(960px,0)";
    human_random();
  }
}
function block_4() {
  if (block[4].src == human.src) {
    human.style.animation = "movement6 2s linear 1";
    human.style.transform = "translate(1200px,50px)";
  }
  setTimeout(() => {
    document.getElementById("popup1").style.visibility = "visible";
  }, 3000);
}
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});
document.getElementById("restart_btn").addEventListener("click", () => {
  location.reload();
});
