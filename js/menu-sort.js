// var c = document.querySelectorAll(".food-result");
// var arrNew = [];

// function sortList(){

// 	for (var i = 0; i < prices.length; i++){
// 		// arrNew.push(prices[i].innerHTML.substring(1));

// 	}

// 	arrNew.sort(function(a, b){return a-b});

// 	console.log(arrNew);
// }

function sortByPriceAscending() {
	var container = document.querySelector(".food-wrapper__result");
	var contents = document.querySelectorAll(".food-result__price");
	var food = document.getElementsByClassName("food-result");


	var list = [];

	for(var i=0; i<contents.length; i++){
	    list.push(contents[i]);
	}

	list.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	list.reverse();

	for(var k=0; k<list.length; k++){
	    // console.log(list[i].innerHTML);
		container.insertBefore(list[k].parentNode, container.firstChild);
	}
}


function sortByPriceDescending() {
	var container = document.querySelector(".food-wrapper__result");
	var contents = document.querySelectorAll(".food-result__price");
	var food = document.getElementsByClassName("food-result");


	var list = [];

	for(var i=0; i<contents.length; i++){
	    list.push(contents[i]);
	}

	list.sort(function(a, b){
		var aa = parseInt(a.innerHTML.substring(1));
		var bb = parseInt(b.innerHTML.substring(1));
		return aa < bb ? -1 : (aa > bb ? 1 : 0);
	});

	for(var k=0; k<list.length; k++){
	    // console.log(list[i].innerHTML);
		container.insertBefore(list[k].parentNode, container.firstChild);
	}
}