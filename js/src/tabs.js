//creating tabs

var newsTab = ourEvents.querySelector(".tab-news__heading"),
    eventsTab = ourEvents.querySelector(".tab-events__heading"),
    newsBlock = ourEvents.querySelector("#news-content"),
    eventsBlock = ourEvents.querySelector("#event-content");

newsTab.addEventListener("click", function(e){
  e.preventDefault();
  newsBlock.classList.add("show-content");
  eventsBlock.classList.remove("show-content");
  this.classList.add("tab-active");
  eventsTab.classList.remove("tab-active");
});

eventsTab.addEventListener("click", function(e){
  e.preventDefault();
  eventsBlock.classList.add("show-content");
  newsBlock.classList.remove("show-content");
  this.classList.add("tab-active");
  newsTab.classList.remove("tab-active");
});
