//menu sort

"use strict";

var sortBlock = document.querySelector("#sort-block__sorting"),
	container = document.querySelector(".food-wrapper__result"),
	contents = document.querySelectorAll(".food-result__price"),
	contentsLen = contents.length;
	rating = document.querySelectorAll(".food-result__rating"),
	ratingLen = rating.length,
	food = document.querySelector(".food-result"),
	listAscending = [],
	listDescending = [],
	listRating = [],
	listRandom = [];
	


function sortByPriceAscending() {

	for(var i = 0; i < contentsLen; i++){
	    listAscending.push(contents[i]);
	}

	listAscending.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	listAscending.reverse();

	var listAscendingLen = listAscending.length;

	for(var k = 0; k < listAscendingLen; k++){
		container.insertBefore(listAscending[k].parentNode, container.firstChild);
	}
}


function sortByPriceDescending() {

	for(var i = 0; i < contentsLen; i++){
	    listDescending.push(contents[i]);
	}

	listDescending.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	var listDescendingLen = listDescending.length;

	for(var k = 0; k < listDescendingLen; k++){
		container.insertBefore(listDescending[k].parentNode, container.firstChild);
	}
}

//sort by rating

function sortByRatingDescending() {

	for(var i = 0; i < ratingLen; i++){
	    listRating.push(rating[i]);
	}

	listRating.sort(function(a, b){
		var aa = parseInt(a.innerHTML);
		var bb = parseInt(b.innerHTML);
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	var listRatingLen = listRating.length;

	for(var k = 0; k < listRatingLen; k++){
		container.insertBefore(listRating[k].parentNode.parentNode.parentNode, container.firstChild);
	}
}

//sort randomly

function sortRandomly(){
	for(var i = 0; i < contentsLen; i++){
	    listRandom.push(contents[i]);
	}

	listRandom.sort(function(){
	 	return 0.5 - Math.random();
	});

	var listRandomLen = listRandom.length;

	for(var k = 0; k < listRandomLen; k++){
		container.insertBefore(listRandom[k].parentNode, container.firstChild);
	}
}

sortBlock.addEventListener("change", function(){
	if (sortBlock.value === "sort-descending"){
		sortByPriceDescending();
	} else if (sortBlock.value === "sort-ascending") {
		sortByPriceAscending();

	} else if (sortBlock.value === "sort-by-rating") {
		sortByRatingDescending();
	} else if (sortBlock.value === "Select sorting") {
		sortRandomly();
	}
});
