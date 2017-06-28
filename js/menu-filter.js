var closeFoodOnlineBtn = document.querySelector(".hide-food-online-btn"),
    buyFoodOnline = document.querySelector(".buy-food-online"),
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    buyFoodFilter = document.querySelector("#filter-btn-close"),
    allFood = document.querySelectorAll(".food-result"),
    //soup
    inputSoup = document.querySelector("#soup-appetizer"),
    foodSoups = document.querySelectorAll(".food-result__soup"),
    //pasta
    inputPasta = document.querySelector("#pasta"),
    foodPasta = document.querySelectorAll(".food-result__pasta"),
    //desserts
    foodDesserts = document.querySelectorAll(".food-result__dessert"),
    inputDesserts = document.querySelector("#dessert"),
    //beverages
    inputBeverages = document.querySelector("#beverages");
    beverages = document.querySelectorAll(".food-result__drinks"),
    //pizza
    inputPizza = document.querySelector("#pizza"),
    foodPizza = document.querySelectorAll(".food-result__pizza"),
    allInputCategory = document.querySelectorAll(".food-filter"),
    allRadioBeverages = document.querySelector(".food-filter-radio");

console.log(inputSoup);
//open-close block

function closeFoodOnlineBlock(){
    buyFoodOnline.classList.toggle("buy-food-online__hide");
    closeFoodOnlineBtn.classList.toggle("hide-food-online-btn_animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

//filter soups

inputSoup.addEventListener("click", function(){
  if(inputSoup.checked === true){
    // for(var i = 0; i < foodPasta.length; i++) {
      foodPasta[0].classList.add("hide");
      foodSoups[0].classList.remove("hide");
    // }
  } else {
    // for(var k = 0; k < foodPasta.length; i++) {
      foodPasta[0].classList.remove("hide");
    // }
  }
});

//filter pasta

inputPasta.addEventListener("click", function(){
  if(inputPasta.checked === true){
    
    for(var i = 0; i < foodSoups.length; i++) {
      foodSoups[0].classList.add("hide");
    }

  } else {
    for(var k = 0; k < foodSoups.length; k++) {
      foodSoups[0].classList.remove("hide");
    }
  }
});


//filter desserts



//disable alco|non-alco
// console.log(inputBeverages);


// for (var i = 0; i < allInputCategory.length; i++) {
//   if(allInputCategory[i].id == "beverages") {
//     for(var j = 0; j < allRadioBeverages.length; j++) {
//       allRadioBeverages[j].setAttribute("disabled", "disabled");
//     }
//   }
// }
