const UrlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

async function FetchApi() {
	const res = await fetch(UrlApi)
	const data = await res.json()
	
	// console.log(data)

	let DataStrMeal = data.meals[0].strMeal
	console.log(DataStrMeal)
}

FetchApi()


