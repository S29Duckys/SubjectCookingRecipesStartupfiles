// Url Api 
const UrlApi = "https://www.themealdb.com/api/json/v1/1/search.php"


// Image
const Image = document.querySelector(".illustration");

// Title
const Title = document.querySelector("#Title");

// Vegetarien & Origine 
const Vg = document.querySelector("#Vg");
const Origine = document.querySelector("#Origine")

// Ingredien 


// Instruction 


// Video Ytb
const VideoYtb = document.querySelector("#VideoYtb")






async function FetchApi() {
	const res = await fetch(UrlApi)
	const data = await res.json()
	
	console.log(data)
}

FetchApi()







// window.addEventListener("load", function () {

	
//   const card = document.createElement("div");
//   card.id = "search-card";
//   card.innerHTML = `<form id="form" class="card">
// 				<label for="search">
// 					<h1 class="text-preset-1">What do you want to COOK ?</h1>
// 				</label>
// 				<input
// 					id="search"
// 					class="input text-preset-2"
// 					type="text"
// 					placeholder="Arrabiata penne"
// 				/>
// 				<button class="btn rose-800 rose-50-text" type="submit">
// 					<h2 class="text-preset-2">Rechercher</h2>
// 				</button>
// 			</form>`;
//   document.querySelector("main").appendChild(card);
// });



