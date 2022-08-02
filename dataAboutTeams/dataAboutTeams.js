class Team{
  static idGen =0;
  constructor(full_name,division,link_pic,conference){
    this.full_name = full_name;
    this.division = division;
    this.link_pic = link_pic;
    this.conference = conference;
    this.id= Team.idGen++;
  }
}



let div_games = document.getElementById("myDiv_C");
let counter = 0;
let teamsArray = []

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
function switchToClassTeam(arr){
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
  let index = 0;
  arr.forEach(team=>{
    teamsArray.push(new Team(team["full_name"],team["division"],arrayLogos[index++],team["conference"]))
  })
}
function searchTeam(){
  let myInput = document.getElementById("searchBar");
  printcardTeams(getSortedTeamArrBySearch(myInput.value))
}
function getSortedTeamArrBySearch(input){
  return teamsArray.filter(team=> checkinputByTeamName(input,team["full_name"]));
}
function checkinputByTeamName(input,name){
  if(name.includes(input.toLowerCase())) return true
  if(name.includes(firstLetterToUpperCase(input))) return true;
  return false;
}
function firstLetterToUpperCase(str){
  return str[0].toUpperCase()+str.substr(1).toLowerCase();
}


function printTeams(){
  getTeams()
  .then((response) => {
    switchToClassTeam(response.data);
    printcardTeams(teamsArray);
  })
}
function printcardTeams(arr){
  div_games.innerHTML="";
  arr.forEach((obj) => {
    div_games.innerHTML += `
    <div id="team_${obj.id}" class="card " style="width:25rem">
    <img style="width:5vw;" src="${obj.link_pic}"class="card-img-top img-fluid">
    <div class="card-body">
    <h2 class="card-subtitle mb-2 text-muted">Team: ${obj.full_name}</h2>
    <p>Division: ${obj.division}</p>
    <p>Conference: ${obj.conference}</p>
    </div>
    <div></div>
    </div>`;
  });
}
printTeams()

