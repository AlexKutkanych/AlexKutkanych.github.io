//menu search food

var searchFoodInput = document.querySelector("#search-block__search-field");


function searchFood() {
    var filter = searchFoodInput.value.toUpperCase();
    var foodCard = document.querySelectorAll(".food-result");
    var foodCardLgth = foodCard.length;
    for (i = 0; i < foodCardLgth; i++) {
    	//search by name
        var foodName = foodCard[i].querySelector(".food-result__name");
        var foodDesc = foodCard[i].querySelector(".food-result__desc");
        var foodPrice = foodCard[i].querySelector(".food-result__price");
        if (foodName.innerHTML.toUpperCase().indexOf(filter) > -1 || foodPrice.innerHTML.toUpperCase().indexOf(filter) > -1) {
            foodCard[i].style.display = "";
        } else {
            foodCard[i].style.display = "none";
        }
        //search by desc
        
        
    }
}

searchFoodInput.addEventListener("keyup", searchFood);