//---------------------getting API
var containerRecipes = document.getElementById('api-json');

// Function to dynamically display recipes
function displayRecipes() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .then(data => {

            // Loop through each recipe and create a card
            (data.recipes || []).forEach((item, index) => {

                

                var card = `
                    <div class="col-lg-3 col-md-4 col-sm-6 mt-3">
                        <div class="card text-center" style="width: 18rem;">
                            <img src="${item.image}" class="card-img card-img-top img-fluid" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description || 'Delicious recipe for you!'}</p>
                                <a href=""}" class="btn btn-warning" target="_blank">Watch Recipe</a>
                            </div>
                        </div>
                    </div>`;
                
                // Append each card to the container
                containerRecipes.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

displayRecipes();

