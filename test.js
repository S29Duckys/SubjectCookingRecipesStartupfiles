const UrlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=Apple%20Frangipan%20Tart"

async function fetchTest (){
        const res = await fetch(UrlApi)
        const data = await res.json()

        console.log(data)
}

fetchTest()








