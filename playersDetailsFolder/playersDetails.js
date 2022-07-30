let counter = 0;
const array_of_players = [
  "../imges/playersImages/ike.png",
  "../imges/playersImages/ron.png",
  "../imges/playersImages/jabari.png",
  "../imges/playersImages/marshon.png",
  "../imges/playersImages/lorenzo.png",
  "../imges/playersImages/casspi.png",
  "../imges/playersImages/alex.png",
  "../imges/playersImages/tyler.png",
  "../imges/playersImages/kennnan.png",
  "../imges/playersImages/marcin.png",
  "../imges/playersImages/bogout.png",
  "../imges/playersImages/anir.png",
  "../imges/playersImages/malachi.png",
  "../imges/playersImages/billy.png",
  "../imges/playersImages/jd.png",
  "../imges/playersImages/kosta.png",
  "../imges/playersImages/morton.png",
  "../imges/playersImages/randolph.png",
  "../imges/playersImages/smith.png",
  "../imges/playersImages/milos.png",
  "../imges/playersImages/trent.png",
  "../imges/playersImages/zahu.png",
  "../imges/playersImages/boban.png",
  "../imges/playersImages/booker.png",
  "../imges/playersImages/some.png",
];
const players_Div = document.getElementById("playersDiv");
const optionsB = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};

async function getApiPlayers() {
  try {
    players_Div.innerHTML = `
    <h1 class="display-1">Loading...</h1>
    <img src="../imges/playersImages/wallpaperr.png" alt="">
    `;
    return await fetch(
      "https://free-nba.p.rapidapi.com/players?page=0&per_page=25",
      optionsB
    ).then((response) => response.json());
  } catch (err) {
    console.error(err);
  } finally {
    players_Div.innerHTML = ` `;
  }
}

function printPlayersDet() {
  getApiPlayers().then((response) =>
    response.data.forEach((element) => {
      players_Div.innerHTML += `<div class="card" style="width: 15rem;">
    <div class="card-body">
    <img class="img-fluid" src="${
      array_of_players[counter++]
    }" class="card-img-top">
    <h1>${element["first_name"]}</h1>
    <h3>${element["last_name"]}</h3>
    <p>Number: ${element["id"]}</p>
    <p>Position: ${element["position"]}
    </div>
    </div>
    `;
    })
  );
}
printPlayersDet();

function popPodcast() {
  document.getElementById("podcast").innerHTML = `<div>
  <form action="https://www.listennotes.com/search/" style="display: flex;flex-direction: row;padding: 25px;">
  <!-- Limit search results for NBA BASKETBALL LIVE COMMENTARY's show -->
  <input type="hidden" name="ocid" value="5f79a5c5a4c045a6a7feff4fcc6720bb" />
  <input type="text" name="q" required placeholder="Search past episodes" style="flex: 1;padding: 5px 10px 5px 10px;border: 1px solid #DEDEDE;border-radius: 0;" />
  <input type="submit" value="Search" style="background-color: #B82F00;color: #ffffff;border: 1px solid #B82F00;cursor: pointer;border-radius: 0;padding: 8px;" />
</form>
  <div>`;
}

