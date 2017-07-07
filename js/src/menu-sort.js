//menu sort

var sortBlock = document.querySelector("#sort-block__sorting"),
	container = document.querySelector(".food-wrapper__result"),
	contents = document.querySelectorAll(".food-result__price"),
	food = document.querySelector(".food-result"),
	list = [];

	console.log(contents.length);


function sortByPriceAscending() {

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

sortBlock.addEventListener("change", function(){
	if (sortBlock.value === "sort-descending"){
		sortByPriceDescending();
	} else if (sortBlock.value === "sort-ascending") {
		sortByPriceAscending();

	} else {

	}
});
