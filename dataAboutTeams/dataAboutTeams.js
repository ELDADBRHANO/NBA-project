let div_games = document.getElementById("myDiv_C");
let counter = 0;
const arrayLogos = [
  "../imges/teamsLogo/hawks.png",
  "../imges/teamsLogo/celtics.png",
  "../imges/teamsLogo/nets.png",
  "../imges/teamsLogo/horents.png",
  "../imges/teamsLogo/bulls.png",
  "../imges/teamsLogo/clevlend.png",
  "../imges/teamsLogo/mavricks.png",
  "../imges/teamsLogo/nuggets.png",
  "../imges/teamsLogo/pistons.png",
  "../imges/teamsLogo/golden.png",
  "../imges/teamsLogo/rockets.png",
  "../imges/teamsLogo/pacers.png",
  "../imges/teamsLogo/clippers.png" ,
  "../imges/teamsLogo/lakers.png",
  "../imges/teamsLogo/grizllies.png",
  "../imges/teamsLogo/heat.png",
  "../imges/teamsLogo/bucks.png",
  "../imges/teamsLogo/minesotta.png",
  "../imges/teamsLogo/new-orleans.png",
  "../imges/teamsLogo/knicks.png",
  "../imges/teamsLogo/thunder.png",
  "../imges/teamsLogo/magic.png",
  "../imges/teamsLogo/sixers.png",
  "../imges/teamsLogo/suns.png" ,
  "../imges/teamsLogo/portland.png",
  "../imges/teamsLogo/kings.png",
  "../imges/teamsLogo/spurs.png",
  "../imges/teamsLogo/toronto.png",
  "../imges/teamsLogo/jazz.png" ,
  "../imges/teamsLogo/wizards.png"

];



let id_dynamic_ =0;
const optionsA = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
};

async function getTeams(){
  try {
    return await fetch("https://free-nba.p.rapidapi.com/teams", optionsA)
    .then((response) => response.json())
    
  } catch (err) {
    console.log(err)
  }
}


let myInput = document.getElementById("searchBar");
myInput.addEventListener('input', e => {
const valu= e.target.value
console.log(valu);
})


function printTeams(){
  getTeams()
  .then((response) => {
   response.data.forEach((obj) => {
      div_games.innerHTML += `
      <div id="team_${id_dynamic_++}" class="card " style="width:25rem">
      <img style="width:5vw;" src="${
        arrayLogos[counter++]
      }"class="card-img-top img-fluid">
      <div class="card-body">
      <h2 class="card-subtitle mb-2 text-muted">Team: ${obj["full_name"]}</h2>
      <p>Division: ${obj["division"]}</p>
      <p>Conference: ${obj["conference"]}</p>
      </div>
      <div></div>
      </div>`;
    });
  })
}
printTeams()




// statsApi
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
// 		'X-RapidAPI-Host': 'basketball-data.p.rapidapi.com'
// 	}
// };

// fetch('https://basketball-data.p.rapidapi.com/match/playbyplay?matchId=350275', options)
// 	.then(response => response.json())
// 	.then(response => {for (const key in response) {
//     document.getElementById("me").innerHTML= `
//     <div>
//     <table>
//     <thead>
//     <tr>
//     <td>Name: </td>
//     <td>Date: </td>
//     <td></td>
//     <td></td>
//     </tr>
//     </thead>
    
//     <tbody>
//    <ol> 
//   ${response.awayTeam['mediumName']}
//    <li>${response['date']}</li>
//    <li></li>
//    <li></li>
//    <li></li>
//    </ol>
//    </tbody>
//    </table>
//    </div>
//     `
//   }

//   })
// 	.catch(err => console.error(err));

//   awayTeam:
// id: 110
// mediumName: "Rockets"
// name: "Houston Rockets"
// shortName: "HOU "
// [[Prototype]]: Object
// date: "11/04/2021 02:00:00"
// homeTeam:
// id: 109
// mediumName: "Warriors"
// name: "Golden State Warriors"
// shortName: "GSW"
// [[Prototype]]: Object
// id: 350275
// playByPlay:
// quarter1: Array(9)
// 0:
// id: 8919805
// isStatus: true
// minute: 12
// orderNo: 1
// period: 1
// second: "00"
// -------->

