//menu filtering

var closeFoodOnlineBtn = document.querySelector(".hide-food-online-btn"),
    buyFoodOnline = document.querySelector(".buy-food-online"),
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    // buyFoodFilter = document.querySelector("#filter-btn-close"),
    allCards = document.querySelectorAll(".food-result"),
    //soup
    inputSoup = document.querySelector("#soup-appetizer"),fullOnlineMenu
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
    allRadioBeverages = document.querySelector(".food-filter-radio"),
    allFood = [];

//open-close block

function closeFoodOnlineBlock(){
    buyFoodOnline.classList.toggle("buy-food-online__hide");
    closeFoodOnlineBtn.classList.toggle("hide-food-online-btn_animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

//push all cards to array

  for(var i=0; i<allCards.length; i++){
      allFood.push(allCards[i]);
  }
  console.log(allFood);
//filter soups

inputSoup.addEventListener("click", function(){

  if(inputSoup.checked === true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterSoup = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__soup";
    })

  console.log(filterSoup);


  for(var k=0; k<filterSoup.length; k++){
      filterSoup[k].style.display = "block";
  }
    
  } 
});

//filter pasta



//filter desserts

