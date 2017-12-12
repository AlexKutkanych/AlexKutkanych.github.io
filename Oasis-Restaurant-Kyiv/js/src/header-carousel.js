//header carousel

"use strict";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}



function showSlides(n){
	var i;
	var slides = document.querySelectorAll(".carousel__slide");
	var slidesLength = slides.length;
	if (n > slidesLength) {
		slideIndex = 1;
	} else if (n < 1) {
		slideIndex = slidesLength;
	}
	for (i = 0; i < slidesLength; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

var prevSlideBtn = document.querySelector(".carousel__pagination_prev");
var nextSlideBtn = document.querySelector(".carousel__pagination_next");

prevSlideBtn.addEventListener("click", function(e){
	e.preventDefault();
	plusSlides(-1);
});

nextSlideBtn.addEventListener("click", function(e){
	e.preventDefault();
	plusSlides(1);
});
