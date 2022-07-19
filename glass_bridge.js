let random_1 = Math.floor(Math.random() * 2);
let random_2 = Math.floor(Math.random() * 2);
let player = document.getElementById("player");
let array = [];
let move_array = ["a"];
let count = 0;
// How to Play Pop Up
document.getElementById("how_to_play_popup").style.visibility = "visible";
document.getElementById("start1").addEventListener("click", () => {
  document.getElementById("how_to_play_popup").style.visibility = "hidden";
});
// Glass none;
let glasspic1_none = (number) => {
  document.getElementsByClassName("glasspic1")[number].style.transform =
    "scaleY(0)";
  document.getElementsByClassName("glasspic1")[number].style.transition = ".5s";
  document.getElementById("crash").play();
};
let glasspic2_none = (number) => {
  document.getElementsByClassName("glasspic2")[number].style.transform =
    "scaleY(0)";
  document.getElementsByClassName("glasspic2")[number].style.transition = ".5s";
  document.getElementById("crash").play();
};
// Movement
window.addEventListener(
  "keypress",
  (move = (event) => {
    move_array.push(event.key);
    document.getElementById("glassmove").play();
    //Movement
    if (event.key == "a") {
      if (array == "a") player.style.transform += "translateY(-100px)";
      else if (array == "s")
        player.style.transform += "translate(-100px,-100px)";
      else player.style.transform = "translate(-50px,-60px)";
      array = event.key;
    } else if (event.key == "s") {
      if (array == "a") player.style.transform += "translate(100px,-100px)";
      else if (array == "s") player.style.transform += "translateY(-100px)";
      else player.style.transform = "translate(50px,-60px)";
      array = event.key;
    }
    // Win Stage
    if (move_array.length == 7) {
      document.getElementById("winning_stage").style.background = "#249F9C";
      document.getElementById("winning_stage_text").src = "./image/You_Win.png";
      setTimeout(() => {
        document.getElementById("popup1").style.visibility = "visible";
        document.getElementById("GameOver").style.right = "35%";
        document.getElementById("caption").src = "./image/You_Win_Pink.png";
        document.getElementById("winner").play();
      }, 1300);
    }
    //random1 for Broken Glass
    switch (random_1) {
      case 0:
        switch (move_array.length) {
          case 2:
            if (event.key == "a") {
              glasspic1_none(4);
              clear_data();
            }
            break;
          case 5:
            if (event.key == "a") {
              glasspic1_none(1);
              clear_data();
            }
            break;
        }
        break;
      case 1:
        switch (move_array.length) {
          case 2:
            if (event.key == "s") {
              glasspic2_none(4);
              clear_data();
            }
            break;
          case 5:
            if (event.key == "s") {
              glasspic2_none(1);
              clear_data();
            }
            break;
        }
        break;
    }
    //random2 for Broken Glass
    switch (random_2) {
      case 0:
        switch (move_array.length) {
          case 3:
            if (event.key == "a") {
              glasspic1_none(3);
              clear_data();
            }
            break;
          case 4:
            if (event.key == "a") {
              glasspic1_none(2);
              clear_data();
            }
            break;
          case 6:
            if (event.key == "a") {
              glasspic1_none(0);
              clear_data();
            }
            break;
        }
        break;
      case 1:
        switch (move_array.length) {
          case 3:
            if (event.key == "s") {
              glasspic2_none(3);
              clear_data();
            }
            break;
          case 4:
            if (event.key == "s") {
              glasspic2_none(2);
              clear_data();
            }
            break;
          case 6:
            if (event.key == "s") {
              glasspic2_none(0);
              clear_data();
            }
            break;
        }
        break;
    }
  })
);
//To Move Start Point
function clear_data() {
  setTimeout(() => {
    player.style.transform = "";
    move_array = ["a"];
    array = [];
    count++;
    switch (count) {
      case 1:
        document.getElementById("life_girl_3").style.visibility = "hidden";
        break;
      case 2:
        document.getElementById("life_girl_2").style.visibility = "hidden";
        break;
      case 3:
        document.getElementById("life_girl_1").style.visibility = "hidden";
        break;
    }
    // GameOver Condition
    if (count == 3) {
      setTimeout(() => {
        document.getElementById("popup1").style.visibility = "visible";
        document.getElementById("gameover").play();
      }, 500);
    }
  }, 500);
}
// To Restart
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});
document.getElementById("restart_blue").addEventListener("click", () => {
  location.reload();
});
