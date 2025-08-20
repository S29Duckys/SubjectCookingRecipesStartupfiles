// Card main
const CardMain = document.getElementById("CardMain");

// Illustration
const Illustration = document.getElementById("illustration");

// Title
const TitleMeal = document.getElementById("TitleMeal");

// Vegetarien
const Vege = document.getElementById("Vege-no");

// Region
const Region = document.getElementById("Region");

// Video Youtube
const Video = document.querySelector(".link");

// Load page input
window.addEventListener("DOMContentLoaded", function () {
  CardMain.style.display = "none";

  const card = document.createElement("div");
  card.id = "CardMainInput";

  const form = document.createElement("form");
  form.id = "form";
  form.className = "card";

  card.appendChild(form);

  // Label
  const label = document.createElement("label");
  label.setAttribute("for", "search");

  const h1 = document.createElement("h1");
  h1.className = "text-preset-1";
  h1.textContent = "What do you want to COOK ?";
  label.appendChild(h1);

  // Input
  const input = document.createElement("input");
  input.id = "search";
  input.className = "input text-preset-2";
  input.type = "text";
  input.placeholder = "Arrabiata penne";

  // Button
  const button = document.createElement("button");
  button.id = "BtnSubmit";
  button.className = "btn rose-800 rose-50-text";
  button.type = "submit";

  const h2 = document.createElement("h2");
  h2.className = "text-preset-2";
  h2.textContent = "Rechercher";
  button.appendChild(h2);

  // Ajout des enfants au formulaire
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  document.querySelector("main").prepend(card);
  // Input
  const search = document.getElementById("search");

  const cardMainInput = document.getElementById("CardMainInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click");
    MealReception();
    CardMain.style.display = "block";
    cardMainInput.style.display = "none";
  });
});

// Fetch
async function MealReception() {
  const InputVal = search.value;
  console.log(InputVal);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=` + InputVal
  );
  const data = await res.json();

  console.log(res);

  // Ingridients
  const ingredients = data.meals[0].strIngredient1;
  console.log(ingredients);

  const tbody = document.querySelector(".CardIngredientsList");

  tbody.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    const ingredient = data.meals[0][`strMeasure${i}`];
    const measure = data.meals[0][`strIngredient${i}`];
    console.log(ingredient, measure);

    if (ingredient) {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      const td = document.createElement("td");
      th.scope = "row";
      th.className = "stone-600-text";
      const span = document.createElement("span");
      span.textContent = ingredient;
      const spanMeasure = document.createElement("span");
      spanMeasure.textContent = measure;
      span.className = "brown-800-text bold";

      th.appendChild(span);
      td.appendChild(spanMeasure);
      tr.appendChild(td);
      tr.appendChild(th);
      tbody.appendChild(tr);
    }
  }

  console.log(data);
  if (!data.meals) {
    TitleMeal.textContent = "Aucun plat trouvé ";
    Vege.textContent = "";
    Region.textContent = "";
    Video.textContent = "";
    Video.removeAttribute("href");
    return;
  }

  // Instructions
  let newTab = data.meals[0].strInstructions.split("\r\n");
  console.log(newTab);

  const ListeInstruction = document.querySelector("#ListeInstruction");
  ListeInstruction.innerHTML = ""

  for (let i = 0; i < newTab.length; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "stone-600-text text-preset-body";
    span.textContent = newTab[i];
    li.appendChild(span);
    ListeInstruction.appendChild(li);
  }

  let DataStrMeal = data.meals[0].strMeal;
  let DataStrCategory = data.meals[0].strCategory;
  let DataStrRegion = data.meals[0].strArea;
  let DataStrThumb = data.meals[0].strMealThumb;
  let DataStrYoutube = data.meals[0].strYoutube;

  TitleMeal.textContent = DataStrMeal;
  Vege.textContent = DataStrCategory;
  Region.textContent = DataStrRegion;
  Illustration.style.backgroundImage = `url(${DataStrThumb})`;
  Illustration.style.height = "50vh";
  Video.textContent = DataStrYoutube;
  Video.textContent = "Voir la vidéo";
  Video.href = DataStrYoutube;
  console.log(DataStrYoutube);
}
