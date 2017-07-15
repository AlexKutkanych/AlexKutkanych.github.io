
//news block templating


  var allNews = [
    {image: 'img/events/summer-terrasse.jpg', imageAltern: 'summer terrasse', freshNewsIcon: 'img/events/new-icon.svg', heading: 'Summer terrasse is open', desc: 'Luckily the summer is coming, so you can spend time with your friends or family having a meal outside.', postedTimePast: '5 hours ago'},
    {image: 'img/events/children-birthday.jpg', imageAltern: 'birthday cakes', freshNewsIcon: '', heading: 'Make your children happy', desc: 'Now you can organize a wonderfull birtday for your children.', postedTimePast: '10 days ago'},
    {image: 'img/events/wedding.jpg', imageAltern: 'wedding', freshNewsIcon: '', heading: 'Best wedding with us', desc: 'Our restaurant can place up to 60 elite guests inside. Let us make the most important day of your life special.', postedTimePast: '28 days ago'},
    {image: 'img/events/birthday.jpg', imageAltern: 'birthday cakes', freshNewsIcon: '', heading: 'Birthday party can be even better', desc: 'Having boring birthday parties? Nah. We can serve you with the best Italian food and drinks. Candy bar is free.', postedTimePast: 'a month ago'},
  ];

  localStorage.setItem("allNews", JSON.stringify(allNews));
  var allNewsData = localStorage.getItem("allNews");
  var ourNews = JSON.parse(allNewsData);

  //write to html via resig template
  
  var results = document.getElementById("news-content");
  results.innerHTML = tmpl("mypage1", {data: ourNews});


//delete img tag if the news is not new

window.addEventListener("load", function(){
  var docFreshNewsIcon = document.querySelectorAll(".new-icon");
  var ourNewsLen = ourNews.length;
  for (var i = 0; i < ourNewsLen; i++){
    if(ourNews[i].freshNewsIcon === ''){
      docFreshNewsIcon[i].remove();
    }
  }
})

//polyfill for .remove() method for IE9+

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


  