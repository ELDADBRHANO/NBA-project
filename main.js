const arrayImges = [

  "/imges/for-news/DRAY.png",
  "/imges/for-news/DREW.png",
  "/imges/for-news/gobert-murray-split2.jpg",
  "/imges/for-news/Irving-Westbrook-FTR.jpeg",
  "/imges/for-news/KOBE.jpg",
  "/imges/for-news/Melo-Sexton-Schroder-FTR.jpeg",
  "/imges/for-news/SIXERS.jpg",
  "/imges/for-news/trophy.jpg",
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
  "/imges/for-news/kobewins.jpg"
];
let espn_Div = document.getElementById("espnDiv");
let counter = 0;
let arrayImg=["./imges/goldenState.png","./imges/th.png","./imges/knicks.png","./imges/newOrleans.png","./imges/washington.png"]
let counterA = 0;



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
    <div class="card" style="width: 18rem;" >
    <img class="img-fluid" src="${
      arrayImges[counter++]
    }" class="card-img-top">
    <div class="card-body">
  <h1">${element["source"]}</h1>
  <h3>${element["title"]}</h3>
  <a target="_blank" href="${
    element["url"]
  }" class="btn btn-primary">Click here fore more Details</a>
</div>
    </div>
    `;
    })
  );
}
printNews();



function dropdown(trigger){
  trigger.nextElementSibling.classList.toggle('hidden');
}














































// let news_Articles = document.getElementById("newsArticles");
// const optionsE = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
//     "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
//   },
// };

// async function getNewsFromSite() {
//   try {
//     return await fetch(
//       "https://nba-latest-news.p.rapidapi.com/news",
//       optionsE
//     ).then((response) => response.json());
//   } catch (err) {
//     console.error(err);
//   }
// }

// function printNewsFromSite() {
//   getNewsFromSite().then((response) =>
//     response.forEach((element) => {
//       espn_Div.innerHTML += `
//     <div class="card" style="width: 18rem;">
//     <img class="img-fluid" src="${
//       arrayImges[counter++]
//     }" class="card-img-top">
//     <div class="card-body">
//   <h1>${element["source"]}</h1>
//   <h3>${element["title"]}</h3>
//   <a target="_blank" href="${element["url"]}" class="btn btn-primary">Click here fore more Details</a>
// </div>
//     </div>
//     `;
//     })
//   );
// }
// printNewsFromSite();
//  <div class="card" style="width: 18rem;">
// <img class="card-img-top" src="..." alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
