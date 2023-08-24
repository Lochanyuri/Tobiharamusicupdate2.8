let obitobox1 = document.querySelector(".obitobox1");
let obitointro = document.querySelector(".obitointro");
// console.log(obitointro);
let obitobox = document.querySelector(".obitobox");
let obitoimg = document.querySelector("#obitoimg");
let topIndro = document.querySelector("#topIndro")
let blurbox = document.querySelector(".blurbox");
let popupmessagebox = document.querySelector(".popupmessagebox");
let cancel = document.querySelector("#cancel");
let visitorsName = document.querySelector("#visitorsName");
let accept = document.querySelector("#accept");

let namelistbox = [];
let loadIndex = 0;
let popupbox1index = 0;
let textAnimation1 = [
  "T",
  "T",
  "o",
  "b",
  "i",
  "h",
  "a",
  "r",
  "a",
  "_",
  "U",
  "c",
  "h",
  "i",
  "h",
  "a",
];
let textAnimation2 = ["M", "M", "u", "s", "i", "c", "s"];

let uchihaText2 = [
  "WE",
  "  ",
  "INVENTED",
  "  ",
  "MANY",
  "   ",
  "FEATURES",
  "   ",
  "IN",
  "  ",
  "THIS",
  "  ",
  "WEBSITE",
  "  ",
  "INCLUDES",
  ",",
  "  ",
  "SLIDING",
  "   ",
  "IMAGES",
  "  ",
  "TO",
  "   ",
  "FORWARD AND BACKWARD",
  "  ",
  "AND",
  "  ",
  "MUSICS",
  "  ",
  "MENU",
  ".",
];
let topIndroIndex = 0;
let topIndroIndex1 = 0;
let topIndroIndex2 = 0;
fristAnime();
function fristAnime() {
  setInterval(function () {
    topIndroIndex++;
    if (15 >= topIndroIndex) {
      topIndro.innerHTML += textAnimation1[topIndroIndex];
    }
    if (topIndroIndex == 100) {
      topIndro.innerHTML = "";
      secondAnime();
    }
  }, 200);
}

function secondAnime() {
  setInterval(function () {
    topIndroIndex1++;
    if (5 >= topIndroIndex1) {
      topIndro.innerHTML += textAnimation2[topIndroIndex1];
    }
    if (topIndroIndex1 == 100) {
      topIndro.innerHTML = "";
      thirdanime();
    }
  }, 200);
}

function thirdanime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  topIndro.innerHTML = `<span id="spanbox">${hour}:${minutes}:${second}</span>`;
  setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    topIndro.innerHTML = `<span id="spanbox">${hour}:${
      minutes == 0 ? "00" : minutes
    }:${second < 10 ? "0" + second : second}</span>`;
  }, 1000);
}

let data = JSON.parse(localStorage.getItem("name"));
//popupbox enter your name
if (!data) {
  localStorage.setItem("index1", `1`);
  popupbox1();
} else {
  localStorage.setItem("index2", `1`);
  itchitnto();
}

function popupbox1() {
  popupmessagebox.style.top = "30%";
  blurbox.style.display = "flex";
  let inxed999 = 0;
  accept.addEventListener("click", () => {
  if(visitorsName.value === ""){
    alert("Sorry Please Enter Your Name")
  }
  if(visitorsName.value !== ""){

    popupmessagebox.style.top = "-70%";
    blurbox.style.display = "none";
    localStorage.setItem("name", JSON.stringify(visitorsName.value));
    itchitnto();
  }
    
  });
}

//Itachi introduction
let uhichaTextindex = 0;

function itchitnto() {
  let index2 = localStorage.getItem("index2");
  let index1 = localStorage.getItem("index1");
  if (index1 == 1 && index2 == undefined) {
    setTimeout(function () {
      blurbox.style.display = "flex";
      obitointro.style.left = "45%";
      obitobox.style.top = "85%";
    }, 1000);

    setInterval(function () {
      // console.log(uhichaText.length)
      uhichaTextindex++;
      let name = JSON.parse(localStorage.getItem("name"));
      if (uhichaTextindex == 1) {
        if (name == "") {
          obitobox1.innerHTML = `YOU HAVEN'T FILL YOUR NAME. ANYWAY I FORGIVE YOU. `;
        } else {
          obitobox1.innerHTML = `HELLO  ${name.toUpperCase()}, I THINK YOU ARE NEW VISITOR.`;
        }
      }
      setTimeout(() => {
        let textindex = 0;
        let clickedIndex = 0;
        obitobox1.addEventListener("click", () => {
          obitobox1.innerHTML = "";
          obitointro.style.left = "60%";
          setTimeout(function () {
            obitobox1.innerHTML = `HEY ${name.toUpperCase()}, ENJOY FEATURES SUCH AS SILDING IMAGE TO NEXT OR BACK THE SONGS AND WE HAVE MUSIC MENU.`;
          }, 10);

          clickedIndex++;
          setTimeout(function () {
            if (clickedIndex == 2) {
              obitobox.style.top = "100%";
              blurbox.style.display = "none";
              obitointro.style.left = `100%`;
            }
          }, 10);
        });
      }, 5000);
    }, 100);
  }

  if (index2 == 1) {
    obitoimg.src = "Polish_20230824_081201427.png";
    setTimeout(function () {
      blurbox.style.display = "flex";
      obitointro.style.left = "45%";
      obitobox.style.top = "85%";
    }, 1000);

    setInterval(function () {
      // console.log(uhichaText.length)
      uhichaTextindex++;
      let name = JSON.parse(localStorage.getItem("name"));
      if (uhichaTextindex == 1) {
        if (name == "") {
          obitobox1.innerHTML = `YOU HAVEN'T FILL YOUR NAME. ANYWAY I FORGIVE YOU. `;
        } else {
          obitobox1.innerHTML = `WELCOME AGAIN ${name.toUpperCase()}, LET VIBE MUSIC TOGETHER.`;
        }
      }
      setTimeout(() => {
        let clickedIndex1 = 0;
        obitobox1.addEventListener("click", () => {
          obitobox1.innerHTML = "";
          obitoimg.src = "Polish_20230824_081201427.png";
          obitointro.style.left = "60%";

          setTimeout(function () {
            obitobox1.innerHTML = `CAN YOU THINK ${name.toUpperCase()}, WHAT TYPES OF MUSIC DO YOU ACTUALLY LIKE.`;
          }, 10);

          clickedIndex1++;
          setTimeout(function () {
            if (clickedIndex1 == 2) {
              obitobox.style.top = "100%";
              blurbox.style.display = "none";
              obitointro.style.left = `100%`;
            }
          }, 10);
        });
      }, 5000);
    }, 100);
  }
}
