var closeFoodOnlineBtn = document.getElementsByClassName("hide-food-online-btn")[0],
    buyFoodOnline = document.getElementsByClassName("buy-food-online")[0],
    buyFoodSidebar = document.querySelector(".buy-food-online__sidebar"),
    buyFoodFilter = document.querySelector("#filter-btn-close"),
    foodDesserts = document.querySelectorAll(".food-result_dessert"),
    inputDesserts = document.querySelector("#dessert"),
    inputBeverages = document.querySelector("#beverages");
    allInputCategory = document.querySelectorAll(".food-filter"),
    allRadioBeverages = document.querySelector(".food-filter-radio");

//open-close block

function closeFoodOnlineBlock(){
    buyFoodOnline.classList.toggle("buy-food-online__hide");
    closeFoodOnlineBtn.classList.toggle("hide-food-online-btn_animate");
}

closeFoodOnlineBtn.addEventListener("click", closeFoodOnlineBlock);

//open-close food sidebar

function closeFoodOnlineSidebar(){
  buyFoodSidebar.style.width = "10px";
}

buyFoodFilter.addEventListener("click", closeFoodOnlineSidebar);



//filter desserts

inputDesserts.addEventListener("click", function(){
  if (inputDesserts.checked === true) {
    for (var i = 0; i < foodDesserts.length; i++ ){
      foodDesserts[i].style.display = "none";
    }
  } else {
    for (var i = 0; i < foodDesserts.length; i++ ){
      foodDesserts[i].style.display = "block";
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
