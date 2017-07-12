//menu sort

var sortBlock = document.querySelector("#sort-block__sorting"),
	container = document.querySelector(".food-wrapper__result"),
	contents = document.querySelectorAll(".food-result__price"),
	rating = document.querySelectorAll(".food-result__rating"),
	food = document.querySelector(".food-result"),
	listAscending = [],
	listDescending = [],
	listRating = [],
	listRandom = [];


function sortByPriceAscending() {

	for(var i=0; i<contents.length; i++){
	    listAscending.push(contents[i]);
	}

	listAscending.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	listAscending.reverse();

	for(var k=0; k<listAscending.length; k++){
	    console.log(listAscending[0]);
		container.insertBefore(listAscending[k].parentNode, container.firstChild);
	}
}


function sortByPriceDescending() {

	for(var i=0; i<contents.length; i++){
	    listDescending.push(contents[i]);
	}

	listDescending.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	for(var k=0; k<listDescending.length; k++){
	    // console.log(list[i].innerHTML);
		container.insertBefore(listDescending[k].parentNode, container.firstChild);
	}
}

//sort by rating

function sortByRatingDescending() {

	for(var i=0; i<rating.length; i++){
	    listRating.push(rating[i]);
	}


	listRating.sort(function(a, b){
		var aa = parseInt(a.innerHTML);
		// console.log(aa);
		var bb = parseInt(b.innerHTML);
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	for(var k=0; k<listRating.length; k++){
	    // console.log(list[k].innerHTML);
		container.insertBefore(listRating[k].parentNode.parentNode.parentNode, container.firstChild);
	}
}

//sort randomly

function sortRandomly(){
	for(var i=0; i<contents.length; i++){
	    listRandom.push(contents[i]);
	}

	listRandom.sort(function(){
	 	return 0.5 - Math.random();
	});

	for(var k=0; k<listRandom.length; k++){
	    
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
