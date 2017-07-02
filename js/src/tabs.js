"use strict";

//creating tabs

var newsTab = document.getElementsByClassName("tab-news__heading")[0],
    eventsTab = document.getElementsByClassName("tab-events__heading")[0],
    text1 = document.getElementsByClassName("news-content")[0],
    text2 = document.getElementsByClassName("event-content")[0];

newsTab.addEventListener("click", function(e){
  e.preventDefault();
  text1.classList.add("show-content");
  text2.classList.remove("show-content");
  this.classList.add("tab-active");
  eventsTab.classList.remove("tab-active");
});

eventsTab.addEventListener("click", function(e){
  e.preventDefault();
  text2.classList.add("show-content");
  text1.classList.remove("show-content");
  this.classList.add("tab-active");
  newsTab.classList.remove("tab-active");
});
