const searchBox =document.querySelector('.searchBox');
const searchBtn =document.querySelector('.searchBtn');
const recipeContainer =document.querySelector('.recipe-container');
const fetchRecipe=async (query)=>{
    const data= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response=await data.json();
    response.meals.forEach(meal => {
        // const recipeDiv=document.createElement('div');
        // recipeDiv.classList.add('recipe');
        // recipeDiv.innerHTML= '
        // <img src="${meal.strMealThumb}">
        // <h3>${meal.strMeal}</h3>
        // <p>${meal.strArea}</p>
        // <p>${meal.strCategory}</p>'
        // recipeContainer.appendChild(recipeDiv);0
        console.log(meal);
    });
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim();
    fetchRecipe(searchInput);
  //console.log("Button Clicker");
});

