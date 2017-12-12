//search block

"use strict";

var searchFoodInput = document.querySelector("#search-block__search-field");


function searchFood() {
    var filter = searchFoodInput.value.toUpperCase();
    var foodResultPage = document.querySelectorAll("#food-wrapper__result");
    var foodCard = document.querySelectorAll(".food-result");
    var foodCardLen = foodCard.length;

    for (i = 0; i < foodCardLen; i++) {
        //search by name
        var foodName = foodCard[i].querySelector(".food-result__name");
        var foodDesc = foodCard[i].querySelector(".food-result__desc");
        var foodPrice = foodCard[i].querySelector(".food-result__price");
        if (foodName.innerHTML.toUpperCase().indexOf(filter) > -1 || foodPrice.innerHTML.toUpperCase().indexOf(filter) > -1
            || foodDesc.innerHTML.toUpperCase().indexOf(filter) > -1) {
            foodCard[i].style.display = "";
            foodResultPage[0].appendChild(foodCard[i]); 
        } else {
            foodCard[i].style.display = "none";
        }
    }

}

searchFoodInput.addEventListener("keyup", searchFood);
