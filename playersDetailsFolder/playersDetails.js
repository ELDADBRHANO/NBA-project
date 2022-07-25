const players_Div = document.getElementById("playersDiv")
const optionsB = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '565bce9913msh2597330abe48d39p1a3501jsnb7eca1f35e2d',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', optionsB)
	.then(response => response.json())
	.then(response => response.data.forEach(element => {
    players_Div.innerHTML+=`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h1>${element['first_name']}</h1>
    <h3>${element['last_name']}</h3>
    <p>Number: ${element['id']}</p>
    <p>Position: ${element['position']}
    </div>
    </div>
    `
  }))
	.catch(err => console.error(err));




  