//The function is for searching in for the Food Section 
const searchInput = document.querySelector('#searchInput');
const resultsList = document.querySelector('#results');
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchRecipes();
});

searchInput.addEventListener('keypress', (e) => {
    // If the user presses the Enter key, trigger the search button click
    if (e.key === 'Enter') {
      searchButton.click();
    }
    });
async function searchRecipes() {
    const searchValue = searchInput.value.trim();
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    let html = '';
    recipes.forEach((recipe) => {
        html += `
        <li class="recipe-item">
            <div>
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                <h3>${recipe.recipe.label}</h3>
            </div>
            <div class="recipe-link">
                <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
            </div>
        </li>
        `;
    });
    resultsList.innerHTML = html;
}