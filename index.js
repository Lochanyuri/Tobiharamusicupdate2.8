const h4 = document.querySelector(".box3 h4");
const audio = document.getElementById("audioframe");
const currentTim = document.getElementById("currentTim");
const changeaudio = document.getElementById("changeaudio");
const durationTim = document.getElementById("durationTim");
const inmgsrc = document.querySelector(".box2  img");
let playbox = document.querySelector("#playbox");
let musicplacebox = document.getElementById("musicplacebox");
let menubox = document.querySelector(".menubox");
let contentImg = document.querySelector("#contentImg");
let body = document.querySelector("body");
let box2999 = document.querySelector(".box2999");

let play = "8374917.png";
let audioIndex = 0;
let playing = false; // Track the playing state

// Function to format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

//slide next prev tools
let offset, firstTouch, presentTouch;
contentImg.addEventListener("touchstart", (e) => {
  firstTouch = e.touches[0].clientX;
});
contentImg.addEventListener("touchmove", (e) => {
  presentTouch = e.touches[0].clientX;
  offset = presentTouch - firstTouch;
  // console.log(offset);
});
contentImg.addEventListener("touchend", () => {
  if (offset > 60) {
    prevBtn();
  }
  if (offset < -60) {
    nextBtn();
  }
});

// Function to update cursor-col-resize

// Play button function
function playBtn(box) {
  playing = !playing;
  if (playing) {
    // console.log(changeaudio.value);
    box.src = "8374917.png";
    playbox.name = "8374917.png";
    h4.innerHTML = `${musicbox[audioIndex].songName}`;
    audio.src = `${musicbox[audioIndex].audio}`;
    audio.play();
  
  } else {
    box.src = "10860787.png";
    playbox.name = "10860787.png";
    audio.pause();
  }
}

// Next button function
function nextBtn(box) {
  changeaudio.value = 0;
  audioIndex = (audioIndex + 1) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`;
  audio.src = `${musicbox[audioIndex].audio}`;
  inmgsrc.src = `${musicbox[audioIndex].photo}`;
  body.style.backgroundImage = `url(${musicbox[audioIndex].photo})`;

  // console.log(changeaudio);

  if (playbox.name == "8374917.png") {
    audio.play();
    
  }
}

// Previous button function
function prevBtn(box) {
  changeaudio.value = 0;
  audioIndex = (audioIndex - 1 + musicbox.length) % musicbox.length;
  h4.innerHTML = `${musicbox[audioIndex].songName}`;
  audio.src = `${musicbox[audioIndex].audio}`;
  inmgsrc.src = `${musicbox[audioIndex].photo}`;
  body.style.backgroundImage = `url(${musicbox[audioIndex].photo})`;

  if (playbox.name == "8374917.png") {
    audio.play();
  }
}

function changeDuration(value) {
  const newPosition = (value / 100) * audio.duration;
  audio.currentTime = newPosition;
  
}

audio.addEventListener("timeupdate", function () {
  // const newPosition = (audio.currentTime / audio.duration) * 100;
  let currenttime1 = Math.floor(audio.currentTime);
  if (currenttime1 > 0) {
    let currenttime = Math.floor(audio.currentTime);

    let duration1 = (currenttime / Math.floor(audio.duration)) * 100;

    changeaudio.value = duration1;
  }
});

audio.addEventListener("timeupdate", function () {
  // const newPosition = (audio.currentTime / audio.duration) * 100;
  let currentTime = Math.floor(audio.currentTime);

  if (currentTime <= 59) {
    currentTim.innerHTML =
      currentTime < 10 ? `00:0${currentTime}` : "00:" + currentTime;
  }
  if (currentTime <= 119 && currentTime > 59) {
    currentTim.innerHTML =
      currentTime < 70
        ? `01:0${currentTime % 60}`
        : "01:" + `${currentTime % 60}`;
  }
  if (currentTime <= 179 && currentTime > 119) {
    currentTim.innerHTML =
      currentTime < 130
        ? `02:0${currentTime % 60}`
        : "02:" + `${currentTime % 60}`;
  }
  if (currentTime <= 239 && currentTime > 179) {
    currentTim.innerHTML =
      currentTime < 190
        ? `3:0${currentTime % 60}`
        : "03:" + `${currentTime % 60}`;
  }
  if (currentTime <= 299 && currentTime > 239) {
    currentTim.innerHTML =
      currentTime < 250
        ? `4:0${currentTime % 60}`
        : "04:" + `${currentTime % 60}`;
  }
  if (currentTime <= 359 && currentTime > 299) {
    currentTim.innerHTML =
      currentTime < 310
        ? `5:0${currentTime % 60}`
        : "05:" + `${currentTime % 60}`;
  }
});

audio.addEventListener("loadedmetadata", () => {
  let second = Math.round(audio.duration % 60);
  let minute = Math.floor(audio.duration / 60);
  durationTim.innerHTML = `${minute}:${second}`;

  //     durationTim.textContent = formatTime(audio.duration);
});

// Update UI when audio time updates

//Handle progress bar click

// Additional buttons
function closeBtn() {
  window.location.href = "previous_page.html";
}
let menuindex = 0;
let musiccheckindex = 0;
function menuBtn(index) {
  menubox.style.display = "flex";
  menuindex++;
  if (menuindex == 2) {
    menubox.style.display = "none";
    menuindex = 0;
  }
  index.src = "Polish_20230823_145657371.png";
  musiccheckindex++;
  if (musiccheckindex == 2) {
    index.src =
      "332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png";
    musiccheckindex = 0;
  }
}

let index = 0;
musicplacebox.innerHTML = musicbox
  .map((a, b) => {
    return `<div class="musicbox">
    <img height="100%" width="15%" src="${a.photo}">
    <b id="name">${a.songName}</b></div>`;
  })
  .join("");

if (menubox.innerHTML !== "") {
  let songs = document.querySelectorAll(".musicbox");
  songs.forEach((data) => {
    data.addEventListener("click", () => {
      let song = data.innerHTML;
      musicbox.map((music, i) => {
        if (song.includes(music.songName)) {
          h4.innerHTML = `${musicbox[i].songName}`;
          audio.src = `${musicbox[i].audio}`;
          inmgsrc.src = `${musicbox[i].photo}`;
          body.style.backgroundImage = `url(${musicbox[i].photo})`;
          audioIndex = `${i}`;
          audio.play();
          playbox.src = "8374917.png";
        }
      });
    });
  });
}
