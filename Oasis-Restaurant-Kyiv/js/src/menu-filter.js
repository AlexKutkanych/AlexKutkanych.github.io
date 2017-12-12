"use strict";

//menu filtering

var closeFoodOnlineBtn = document.querySelector(".hide-online-menu-btn"),
    buyFoodOnline = document.querySelector(".our-online-menu"),
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    allCards = document.querySelectorAll(".food-result"),
    allCardsLen = allCards.length;
    allInputs = document.querySelectorAll(".food-filter"),
    allInputsLen = allInputs.length;
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
    buyFoodOnline.classList.toggle("our-online-menu__hide");
    closeFoodOnlineBtn.classList.toggle("hide-online-menu-btn__animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

//push all cards to array

for(var i = 0; i < allCardsLen; i++){
    allFood.push(allCards[i]);
}


//clear all filters

function clearAllFilters(){

  for(var i = 0; i < allCardsLen; i++){
    allCards[i].style.display = "block";
  }

  for (var j = 0; j < allInputsLen; j++){
    allInputs[j].checked = false;
  }
  inputBeveragesAlco.disabled = false;
  inputBeveragesNonAlco.disabled = false;
  searchFoodInput.value = '';
}

//filter soups

function showAllSoups(){

  var filterSoup; 

  if(inputSoup.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterSoup = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__soup";
    })

    var filterSoupLen = filterSoup.length;

    for(var k = 0; k < filterSoupLen; k++){
        filterSoup[k].style.display = "block";
    }
  }
}


//filter pasta

function showAllPasta(){

  var filterPasta;

  if(inputPasta.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterPasta = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__pasta";
    })

    var filterPastaLen = filterPasta.length;

    for(var k = 0; k < filterPastaLen; k++){
        filterPasta[k].style.display = "block";
    }
    
  }
}

//filter pizza

 function showAllPizza(){

  var filterPizza;

  if(inputPizza.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterPizza = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__pizza";
    })

    var filterPizzaLen = filterPizza.length;

    for(var k = 0; k < filterPizzaLen; k++){
        filterPizza[k].style.display = "block";
    }
  }
}

//filter desserts

 function showAllDesserts(){

  var filterDesserts;

  if(inputDesserts.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterDesserts = allFood.filter(function(food){
        return food.className.substring(12) === "food-result__dessert";
    })

    var filterDessertsLen = filterDesserts.length;

    for(var k = 0; k < filterDessertsLen; k++){
        filterDesserts[k].style.display = "block";
    }
    
  }
}

//filter beverages

 function showAllBeverages(){

  var filterBeverages;
  
  if(inputBeverages.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterBeverages = allFood.filter(function(food){
        return food.className.substring(12, 34) === "food-result__beverages";
    })

    var filterBeveragesLen = filterBeverages.length;

    for(var k = 0; k < filterBeveragesLen; k++){
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

  var filterNonAlcoBeverages;

  if(inputBeveragesNonAlco.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterNonAlcoBeverages = allFood.filter(function(food){
        return food.className.substring(35, 67) === "food-result__beverages-non-alco";
    })

    var filterNonAlcoBeveragesLen = filterNonAlcoBeverages.length;

    for(var k = 0; k < filterNonAlcoBeveragesLen; k++){
        filterNonAlcoBeverages[k].style.display = "block";
    }
  }
}

//filter alco beverages

function showAlcoBeverages(){

  var filterAlcoBeverages;

  if(inputBeveragesAlco.checked = true){
    
    //hide all cards

    for(var i = 0; i < allCardsLen; i++){
      allCards[i].style.display = "none";
    }

    //get array of all soups cards

    filterAlcoBeverages = allFood.filter(function(food){
        return food.className.substring(35, 62) === "food-result__beverages-alco";
    })

    var filterAlcoBeveragesLen = filterAlcoBeverages.length;

    for(var k = 0; k < filterAlcoBeveragesLen; k++){
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



