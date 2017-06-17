"use strict";

var filterAll = document.getElementsByClassName("filter-all")[0];
var filterMenu = document.getElementsByClassName("filter-menu")[0];
var filterMusic = document.getElementsByClassName("filter-music")[0];
var events = document.getElementsByClassName("event-block");
var menuEvents = document.getElementsByClassName("event-block__menu");
var musicEvents = document.getElementsByClassName("event-block__music");
var otherEvents = document.getElementsByClassName("event-block__other"),
    filterLink = document.querySelectorAll(".event-filter__link");

function showMenuEvents(e){
  e.preventDefault();
  for (var i = 0; i < musicEvents.length; i++) {
    musicEvents[i].style.display = "none";
  }
  for (var j = 0; j < otherEvents.length; j++) {
    otherEvents[j].style.display = "none";
  }
  for (var k = 0; k < menuEvents.length; k++) {
    menuEvents[k].style.display = "block";
  }
  filterMenu.style.borderBottom = "1px solid red";
  filterAll.style.borderBottom = "none";
  filterMusic.style.borderBottom = "none";
}

function showMusicEvents(e){
  e.preventDefault();
  for (var i = 0; i < menuEvents.length; i++) {
    menuEvents[i].style.display = "none";
  }
  for (var j = 0; j < otherEvents.length; j++) {
    otherEvents[j].style.display = "none";
  }
  for (var k = 0; k < musicEvents.length; k++) {
    musicEvents[k].style.display = "block";
  }
  filterMusic.style.borderBottom = "1px solid red";
  filterMenu.style.borderBottom = "none";
  filterAll.style.borderBottom = "none";
}

function showAllEvents(e){
  e.preventDefault();
  for (var i = 0; i < events.length; i++) {
    events[i].style.display = "block";
  }
  filterAll.style.borderBottom = "1px solid red";
  filterMenu.style.borderBottom = "none";
  filterMusic.style.borderBottom = "none";
}

filterMenu.addEventListener("click", showMenuEvents);

filterMusic.addEventListener("click", showMusicEvents);

filterAll.addEventListener("click", showAllEvents);
