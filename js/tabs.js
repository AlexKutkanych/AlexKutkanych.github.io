var tab1 = document.getElementsByClassName("tab1__heading")[0];
var tab2 = document.getElementsByClassName("tab2__heading")[0];


var text1 = document.getElementsByClassName("news-content")[0];
var text2 = document.getElementsByClassName("event-content")[0];

tab1.addEventListener("click", function(e){
  e.preventDefault();
  text1.classList.add("show-content");
  text2.classList.remove("show-content");
  this.classList.add("tab-active");
  tab2.classList.remove("tab-active");
});

tab2.addEventListener("click", function(e){
  e.preventDefault();
  text2.classList.add("show-content");
  text1.classList.remove("show-content");
  this.classList.add("tab-active");
  tab1.classList.remove("tab-active");
});
