const divStats=document.getElementById("myD")
const optionsD = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/stats?page=0&per_page=25', optionsD)
	.then(response => response.json())
	.then(response => response.data.forEach(element => {
    divStats.innerHTML+=`
    <div>
    <p>first name: ${element.player['first_name']}</P>
    <p>last name: ${element.player['last_name']}</P>
    <p>Team name: ${element.team['full_name']}</P>
    <p>AST:${element['ast']}</P>
    <p>BLK:${element['blk']}</P>
    `
  }))
	.catch(err => console.error(err));





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