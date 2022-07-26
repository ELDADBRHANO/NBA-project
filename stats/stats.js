let id_dynamic=0
const divStats=document.getElementById("tbody")
const optionsD = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};



async function getStats(){
  try {
    return await fetch('https://free-nba.p.rapidapi.com/stats?page=0&per_page=25', optionsD)
    .then(response => response.json())
  } catch (error) {
    console.error(error)
  }
}
function printStats(){
  getStats()
  .then(response => response.data.forEach(element => {
    divStats.innerHTML+=`
    <tr class="player" id="player_stats_${id_dynamic++}">
    <td class="feild_api">${element.team['full_name']}    </td>
    <td class="feild_api">${element.player['first_name']}</td>
    <td class="feild_api">${element.player['last_name']}</td>
    <td class="feild_api">${['ast']}</td>
    <td class="feild_api">${element['blk']}</td>
    <td class="feild_api">${element['fga']}</td>
    <td class="feild_api">${element['fgm']}</td>
    <td class="feild_api">${element['pts']}</td>
    <td class="feild_api">${element['reb']}</td>
    <td class="feild_api">${element['stl']}</td>
    <td class="feild_api">${element['min']}</td>
    </tr>
    `
  }))
}
printStats()





async function getLiveStats(){
  try {
    return await fetch('https://basketball-data.p.rapidapi.com/match/list?date=29%2F01%2F2021', optionsA)
    .then(response => response.json())
  } 
  catch (error) {
     console.error(err);
  }
}
let rapid_Stats=document.getElementById("rapidStats")
const optionsA = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
    'X-RapidAPI-Host': 'basketball-data.p.rapidapi.com'
  }
};
let myBtn= document.getElementById("fetchLive")
function printLiveStats(){
getLiveStats()
.then(response => response.forEach(element=>{
  rapid_Stats.innerHTML+=`<div class="card text-center">
  <div class="card-body">
 <h5> ${element['date']}</h5>
  <h2>${element.awayTeam['mediumName']}</h2>
  <h2>${element.homeTeam['shortName']}</h2>
  </div>
  </div>`
}))
myBtn.disabled = true
}




// function replaceImg(){
// let over_seapic=document.getElementById("overseapic")
// setTimeout(()=>{
//   over_seapic.innerHTML+=`
// <h1>Register now and get 20% DISCOUNT!</h1>
// `
// },3000)
// }
// replaceImg()


// 0:
// awayTeam:
// id: 125
// mediumName: "Trailblazers"
// name: "Portland Trail Blazers"
// score:
// current: 101
// halfTime: 50
// quarter1: 32
// quarter2: 18
// quarter3: 27
// quarter4: 24
// regular: 101
// [[Prototype]]: Object
// shortName: "PTB"
// [[Prototype]]: Object
// date: "29/01/2021 00:30:00"
// homeTeam:
// id: 110
// mediumName: "Rockets"
// name: "Houston Rockets"
// score: {quarter1: 17, quarter2: 36, halfTime: 53, quarter3: 33, quarter4: 18, …}
// shortName: "HOU "

























// pts: 7
// reb: 2
// stl: 0

//   ast: 0
// blk: 1
// dreb: 2
// fg3_pct: 0.2
// fg3a: 5
// fg3m: 1
// fg_pct: 0.333
// fga: 9
// fgm: 3
// ft_pct: 0
// fta: 0
// ftm: 0
// game:
// date: "2019-01-17T00:00:00.000Z"
// home_team_id: 4
// home_team_score: 114
// id: 45237
// period: 4
// postseason: false
// season: 2018
// status: "Final"
// time: " "
// visitor_team_id: 26
// visitor_team_score: 95
// [[Prototype]]: Object
// id: 1069008
// min: "20:08"
// oreb: 0
// pf: 0
// player:
// first_name: "Iman"
// height_feet: 6
// height_inches: 5
// id: 415
// last_name: "Shumpert"
// position: "G"
// team_id: 3
// weight_pounds: 215
// [[Prototype]]: Object
// pts: 7
// reb: 2
// stl: 0
// team:
// abbreviation: "SAC"
// city: "Sacramento"
// conference: "West"
// division: "Pacific"
// full_name: "Sacramento Kings"
// id: 26
// name: "Kings"