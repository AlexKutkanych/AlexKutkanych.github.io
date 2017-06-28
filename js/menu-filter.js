var closeFoodOnlineBtn = document.querySelector(".hide-food-online-btn"),
    buyFoodOnline = document.querySelector(".buy-food-online"),
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    buyFoodFilter = document.querySelector("#filter-btn-close"),
    foodSoups = document.querySelectorAll(".food-result_soup"),
    notSoups = document.querySelectorAll(".food-wrapper__result > :not(.food-result_soup)"),
    notDesserts = document.querySelectorAll(".food-wrapper__result > :not(.food-result_dessert)"),
    foodDesserts = document.querySelectorAll(".food-result_dessert"),
    inputDesserts = document.querySelector("#soup-appetizer"),
    inputDesserts = document.querySelector("#dessert"),
    inputBeverages = document.querySelector("#beverages");
    allInputCategory = document.querySelectorAll(".food-filter"),
    allRadioBeverages = document.querySelector(".food-filter-radio");

console.log(notSoups);
//open-close block

function closeFoodOnlineBlock(){
    buyFoodOnline.classList.toggle("buy-food-online__hide");
    closeFoodOnlineBtn.classList.toggle("hide-food-online-btn_animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

//filter soups


//filter desserts

inputDesserts.addEventListener("click", function(){
  if (inputDesserts.checked === true) {
    for (var k = 0; k < foodDesserts.length; k++ ){
      foodDesserts[k].style.display = "block";
    }
    for (var j = 0; j < notDesserts.length; j++ ){
      notDesserts[j].style.display = "none";
    }
  } else {
    for (var i = 0; i < foodDesserts.length; i++ ){
      foodDesserts[i].style.display = "none";
    }
  }
});

//disable alco|non-alco
// console.log(inputBeverages);


// for (var i = 0; i < allInputCategory.length; i++) {
//   if(allInputCategory[i].id == "beverages") {
//     for(var j = 0; j < allRadioBeverages.length; j++) {
//       allRadioBeverages[j].setAttribute("disabled", "disabled");
//     }
//   }
// }
