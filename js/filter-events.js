"use strict";

var filterAll = document.getElementsByClassName("filter-all")[0];
var filterMenu = document.getElementsByClassName("filter-menu")[0];
var filterMusic = document.getElementsByClassName("filter-music")[0];
var events = document.getElementsByClassName("event-content__block");
var menuEvents = document.getElementsByClassName("event-content__block_menu");
var musicEvents = document.getElementsByClassName("event-content__block_music");
var otherEvents = document.getElementsByClassName("event-content__block_other");

filterMenu.addEventListener("click", function(e){
  e.preventDefault();
  for (var i = 0; i < musicEvents.length; i++) {
    musicEvents[i].style.display = "none";
  }
  for (var i = 0; i < otherEvents.length; i++) {
    otherEvents[i].style.display = "none";
  }
  for (var i = 0; i < menuEvents.length; i++) {
    menuEvents[i].style.display = "block";
  }
});

filterMusic.addEventListener("click", function(e){
  e.preventDefault();
  for (var i = 0; i < menuEvents.length; i++) {
    menuEvents[i].style.display = "none";
  }
  for (var i = 0; i < otherEvents.length; i++) {
    otherEvents[i].style.display = "none";
  }
  for (var i = 0; i < musicEvents.length; i++) {
    musicEvents[i].style.display = "block";
  }
});

filterAll.addEventListener("click", function(e){
  e.preventDefault();
  for (var i = 0; i < events.length; i++) {
    events[i].style.display = "block";
  }
});
