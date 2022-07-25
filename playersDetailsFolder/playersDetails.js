const divB = document.getElementById("myDiv_B")
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
    divB.innerHTML+=`<div class="col-4">
    <p>First Name:${element['first_name']}</p>
    <p>Id:${element['id']}</p>
    <p>Last Name:${element['last_name']}</p>
    <p>Position:${element['position']}
    </div>
    `
  }))
	.catch(err => console.error(err));



