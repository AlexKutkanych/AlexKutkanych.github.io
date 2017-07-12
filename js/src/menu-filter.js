"use strict";
//menu filtering

var closeFoodOnlineBtn = document.querySelector(".hide-food-online-btn"),
    buyFoodOnline = document.querySelector(".buy-food-online"),
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    allCards = document.querySelectorAll(".food-result"),
    allInputs = document.querySelectorAll(".food-filter"),
    filterForm = document.querySelector(".buy-food-online__form"),
    inputSoup = document.querySelector("#soup-appetizer"),
    inputPasta = document.querySelector("#pasta"),
    inputDesserts = document.querySelector("#dessert"),
    inputPizza = document.querySelector("#pizza"),
    inputBeverages = document.querySelector("#beverages");
    inputBeveragesAlco = document.querySelector("#alco"),
    inputBeveragesNonAlco = document.querySelector("#non-alco"),
    allInputCategory = document.querySelectorAll(".food-filter"),
    allRadioBeverages = document.querySelector(".food-filter-radio"),
    allFood = [],
    clearAllFiltersBtn = document.querySelector("#clear-filter-btn");

//open-close block

function closeFoodOnlineBlock(){
    buyFoodOnline.classList.toggle("buy-food-online__hide");
    closeFoodOnlineBtn.classList.toggle("hide-food-online-btn_animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

console.log(inputBeveragesAlco);

//push all cards to array

  for(var i=0; i<allCards.length; i++){
      allFood.push(allCards[i]);
  }
  console.log(allInputs);


//clear all filters

function clearAllFilters(){
  for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "block";
    }

  for (var j = 0; j <allInputs.length; j++){
    allInputs[j].checked = false;
  }
  inputBeveragesAlco.disabled = false;
  inputBeveragesNonAlco.disabled = false;

}

//filter soups

function showAllSoups(){

  if(inputSoup.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterSoup = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__soup";
    })

    for(var k=0; k<filterSoup.length; k++){
        filterSoup[k].style.display = "block";
    }
  }
}


//filter pasta

function showAllPasta(){

  if(inputPasta.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterPasta = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__pasta";
    })

    for(var k=0; k<filterPasta.length; k++){
        filterPasta[k].style.display = "block";
    }
    
  }
}

//filter pizza

 function showAllPizza(){

  if(inputPizza.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterPizza = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__pizza";
    })

    for(var k=0; k<filterPizza.length; k++){
        filterPizza[k].style.display = "block";
    }
    
  }
}

//filter desserts

 function showAllDesserts(){

  if(inputDesserts.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterDesserts = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__dessert";
    })

    for(var k=0; k<filterDesserts.length; k++){
        filterDesserts[k].style.display = "block";
    }
    
  }
}

//filter beverages

 function showAllBeverages(){

  if(inputBeverages.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterBeverages = allFood.filter(function(food){
        return food.className.substring(12, 34) === "food-result__beverages";
    })

    for(var k=0; k<filterBeverages.length; k++){
        filterBeverages[k].style.display = "block";
    }
    
  }
}

//filter by beverage type

//disable if some other categories selected

function disableBeveragesInputs(){
  if(inputDesserts.checked == true || inputSoup.checked == true || inputPizza.checked == true || inputPasta.checked == true){
    inputBeveragesAlco.disabled = true;
    inputBeveragesNonAlco.disabled = true;
  } else if (inputBeverages.checked == true){
    inputBeveragesAlco.disabled = false;
    inputBeveragesNonAlco.disabled = false;
  }
}

//filter non-alco beverages

 function showNonAlcoBeverages(){

  if(inputBeveragesNonAlco.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterNonAlcoBeverages = allFood.filter(function(food){
        return food.className.substring(35, 67) === "food-result__beverages-non-alco";
    })

    for(var k=0; k<filterNonAlcoBeverages.length; k++){
        filterNonAlcoBeverages[k].style.display = "block";
    }
  }
}

//filter alco beverages

  function showAlcoBeverages(){

  if(inputBeveragesAlco.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCards.length; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    var filterAlcoBeverages = allFood.filter(function(food){
        return food.className.substring(35, 62) === "food-result__beverages-alco";
    })

    for(var k=0; k<filterAlcoBeverages.length; k++){
        filterAlcoBeverages[k].style.display = "block";
    }
  }
}

inputSoup.addEventListener("click", showAllSoups);
inputPasta.addEventListener("click", showAllPasta);
inputPizza.addEventListener("click", showAllPizza);
inputDesserts.addEventListener("click", showAllDesserts);
inputBeverages.addEventListener("click", showAllBeverages);
inputBeveragesNonAlco.addEventListener("click", showNonAlcoBeverages);
inputBeveragesAlco.addEventListener("click", showAlcoBeverages);

filterForm.addEventListener("change", disableBeveragesInputs);
//clear all filters

clearAllFiltersBtn.addEventListener("click", clearAllFilters);



