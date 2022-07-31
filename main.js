const arrayImges = [
  "./imges/for-news/Irving-Westbrook-FTR.jpeg",
  "./imges/for-news/DRAY.png",
  "./imges/for-news/DREW.png",
  "./imges/for-news/gobert-murray-split2.jpg",
  "./imges/for-news/KOBE.jpg",
  "./imges/for-news/Melo-Sexton-Schroder-FTR.jpeg",
  "./imges/for-news/SIXERS.jpg",
  "./imges/for-news/trophy.jpg",
  "/imges/for-news/allnba.jpg",
  "/imges/for-news/ayton.jpg",
  "/imges/for-news/blackwhite.jpg",
  "/imges/for-news/booker-williams-paul-game-5.jpg",
  "/imges/for-news/Chetmurray.jpg",
  "/imges/for-news/iluv.jpg",
  "/imges/for-news/jump.jpg",
  "/imges/for-news/kobeee.jpg",
  "/imges/for-news/lavine-booker-iso.jpg",
  "/imges/for-news/montrezl-harrell-iso.jpg",
  "/imges/for-news/nba.jpg",
  "/imges/for-news/pat-connaughton-jumper.jpg",
  "/imges/for-news/bokker.jpg",
  "/imges/for-news/beer.jpg",
  "/imges/for-news/fan.jpg",
  "/imges/for-news/final.jpg",
  "/imges/for-news/giaanis.jpg",
  "/imges/for-news/herro.jpg",
  "/imges/for-news/staples.jpg",
  "/imges/for-news/luke.jpg",
  "/imges/for-news/rose.jpg",
  "/imges/for-news/steth.jpg",
  "/imges/for-news/zion.jpg",
  "/imges/for-news/trea.jpg",
  "/imges/for-news/kwai.jpg",
  "/imges/for-news/ross.jpg",
  "/imges/for-news/stethshoo.jpg",
  "/imges/for-news/mj.jpg",
  "/imges/for-news/whole.jpg",
  "/imges/for-news/win.jpg",
  "/imges/for-news/jayb.jpg",
  "/imges/for-news/ja.jpg",
  "/imges/for-news/fabns.jpg",
  "/imges/for-news/king.jpg",
  "/imges/for-news/kingdunk.jpg",
  "/imges/for-news/kobewins.jpg",
];

let arrayImg = [
  "./imges/goldenState.png",
  "./imges/th.png",
  "./imges/knicks.png",
  "./imges/newOrleans.png",
  "./imges/washington.png",
];
let counterA = 0;
let espn_Div = document.getElementById("espnDiv");
let counter = 0;
const options = {
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
  },
};
async function getNews() {
  try {
    return await fetch(
      "https://nba-latest-news.p.rapidapi.com/news/source/espn",
      options
    ).then((response) => response.json());
  } catch (err) {
    console.error(err);
  }
}
function printNews() {
  getNews().then((response) =>
    response.forEach((element) => {
      espn_Div.innerHTML += `
    <div style="margin-top:5vh;" class="card">
    <img class="img-fluid" src="${arrayImges[counter++]}" class="card-img-top">
    <div class="card-body text-center">
  <h1 class="display-1"">${element["source"]}</h1>
  <h2>${element["title"]}</h2>
  <a target="_blank" href="${
    element["url"]
  }" class="btn btn-dark">Click here fore more Details</a>
</div>
    </div>
    `;
    })
  );
}
printNews();

function getTimeUpdated() {
  let userHour = new Date().getHours();
  let userMints = new Date().getMinutes();
  document.getElementById(
    "timer"
  ).innerHTML = `<p>Last updated in ${userHour}:${userMints}</p>`;
}
getTimeUpdated();

let mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click", () => {
  document.getElementById("div_log_").style = "display:none;";
  document.getElementById("espnDiv").innerHTML = "";
  document.getElementById("espnDiv").innerHTML += `
  <form>
    <div id="hideLogIn" class="card">
    <div class="card-body" style="width:25rem; height:50vh">
    <div class="d-flex flex-column justify-content-center">
    <label for="uname"><b>Username</b></label>
    <input id="input_log"  type="text" placeholder="Enter User name" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input id="password" type="password" placeholder="Enter Password" name="psw" required>
    <input class="btn btn-dark text-white" value="Log" onclick="pushMe()"></input>
    <br>
    <input onclick="openRegisterPage()" type="button" class="btn btn-dark text-white" value="Register" > 
    <label>
      <input type="checkbox" checked="checked"> Remember me
    </label>
    </div>
    </div>
  </div>
  </form>
    `;
});


function pushMe() {
  let myinput = document.getElementById("input_log").value;
  localStorage.setItem("lastname", myinput);
  document.getElementById("hold-login-user").innerHTML =
    localStorage.getItem("lastname");
  document.getElementById(
    "hold-login-icon"
  ).innerHTML = `<img style="width:3vw;" src="/imges/LOGO/user.png" alt="">`;
  setTimeout(() => {
    document.getElementById("hideLogIn").style = "display:none;";
    printNews();
  }, 200);
}

function openRegisterPage() {
  location.href = "./register/register.html";
}


const API_KEY = "123cedf472ea7d740a81046892916adb";
let some ; 
let sun_img= `<img style="width:2vw;" src="./imges/LOGO/sun.png" alt="">`
async function getWeather(){
    try{
        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${31.948563796197174}&lon=${34.891117025383345}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((item) => {
            for (const res in item) {
              some = Math.floor(item[res]["feels_like"] / 10);
              // console.log(`${some}°C`);
              switch (some) {
                case some:
                  document.getElementById("weather").innerHTML += `${some}°C ${sun_img}`;
                  break;
                default:
                  break;
              }
            }
          });
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getWeather();