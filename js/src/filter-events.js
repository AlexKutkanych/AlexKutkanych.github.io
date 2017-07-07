//events block - filtering

var ourEvents = document.querySelector("#our-events"),
    filterAll = ourEvents.querySelector(".filter-all"),
    filterMenu = ourEvents.querySelector(".filter-menu"),
    filterMusic = ourEvents.querySelector(".filter-music"),
    events = ourEvents.querySelectorAll(".event-content__block"),
    menuEvents = ourEvents.querySelectorAll(".event-block__menu"),
    musicEvents = ourEvents.querySelectorAll(".event-block__music"),
    otherEvents = ourEvents.querySelectorAll(".event-block__other"),
    filterLink = ourEvents.querySelectorAll(".event-filter__link"),
    //events length
    menuEventsLen = menuEvents.length,
    musicEventsLen = musicEvents.length,
    otherEventsLen = otherEvents.length,
    allEventsLen = events.length;

function showMenuEvents(e){
  e.preventDefault();
  for (var i = 0; i < musicEventsLen; i++) {
    musicEvents[i].style.display = "none";
  }
  for (var j = 0; j < otherEventsLen; j++) {
    otherEvents[j].style.display = "none";
  }
  for (var k = 0; k < menuEventsLen; k++) {
    menuEvents[k].style.display = "block";
  }
  filterMenu.classList.add("event-filter__link_active");
  filterAll.classList.remove("event-filter__link_active");
  filterMusic.classList.remove("event-filter__link_active");
}

function showMusicEvents(e){
  e.preventDefault();
  for (var i = 0; i < menuEventsLen; i++) {
    menuEvents[i].style.display = "none";
  }
  for (var j = 0; j < otherEventsLen; j++) {
    otherEvents[j].style.display = "none";
  }
  for (var k = 0; k < musicEventsLen; k++) {
    musicEvents[k].style.display = "block";
  }
  filterMenu.classList.remove("event-filter__link_active");
  filterAll.classList.remove("event-filter__link_active");
  filterMusic.classList.add("event-filter__link_active");
}

function showAllEvents(e){
  e.preventDefault();
  for (var i = 0; i < allEventsLen; i++) {
    events[i].style.display = "block";
  }
  filterMenu.classList.remove("event-filter__link_active");
  filterAll.classList.add("event-filter__link_active");
  filterMusic.classList.remove("event-filter__link_active");
}

filterMenu.addEventListener("click", showMenuEvents);

filterMusic.addEventListener("click", showMusicEvents);

filterAll.addEventListener("click", showAllEvents);
