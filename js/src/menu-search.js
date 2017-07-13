//menu search food

//when pagination on

// var searchFoodInput = document.querySelector("#search-block__search-field");


// function searchFood() {
//     var filter = searchFoodInput.value.toUpperCase();
//     var foodResultPage = document.querySelectorAll(".food-result__page");
//     var foodCard = document.querySelectorAll(".food-result");
//     console.log(foodCard.length);
//     var foodCardLen = foodCard.length;
//     var test = 6;
//     for (i = 0; i < foodCardLen; i++) {
//     	//search by name
//         var foodName = foodCard[i].querySelector(".food-result__name");
//         var foodDesc = foodCard[i].querySelector(".food-result__desc");
//         var foodPrice = foodCard[i].querySelector(".food-result__price");
//         if (foodName.innerHTML.toUpperCase().indexOf(filter) > -1 || foodPrice.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             foodCard[i].style.display = "";
//             foodResultPage[0].appendChild(foodCard[i]); 
//             if(foodCard.length > test) {
//                foodResultPage[1].appendChild(foodCard[test++]); 
//             } else {
//             }
//         } else {
//             foodCard[i].style.display = "none";
//             // foodCard[i].style.display = "none";
//         }
//         //search by desc
//     }

// }

// searchFoodInput.addEventListener("keyup", searchFood);

/*when pagination off*/

var searchFoodInput = document.querySelector("#search-block__search-field");


function searchFood() {
    var filter = searchFoodInput.value.toUpperCase();
    var foodResultPage = document.querySelectorAll("#food-wrapper__result");
    var foodCard = document.querySelectorAll(".food-result");
    console.log(foodCard.length);
    var foodCardLen = foodCard.length;
    // var test = 6;
    for (i = 0; i < foodCardLen; i++) {
        //search by name
        var foodName = foodCard[i].querySelector(".food-result__name");
        var foodDesc = foodCard[i].querySelector(".food-result__desc");
        var foodPrice = foodCard[i].querySelector(".food-result__price");
        if (foodName.innerHTML.toUpperCase().indexOf(filter) > -1 || foodPrice.innerHTML.toUpperCase().indexOf(filter) > -1
            || foodDesc.innerHTML.toUpperCase().indexOf(filter) > -1) {
            foodCard[i].style.display = "";
            foodResultPage[0].appendChild(foodCard[i]); 
            // if(foodCard.length > test) {
            //    foodResultPage[1].appendChild(foodCard[test++]); 
            // } else {
            // }
        } else {
            foodCard[i].style.display = "none";
            // foodCard[i].style.display = "none";
        }
        //search by desc
    }

}

searchFoodInput.addEventListener("keyup", searchFood);