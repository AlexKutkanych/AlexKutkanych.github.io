
//news block templating


  var allNews = [
    {image: 'img/events/summer-terrasse.jpg', imageAltern: 'summer terrasse', heading: 'Summer terrasse is open', desc: 'Luckily the summer is coming, so you can spend time with your friends or family having a meal outside.', postedTimePast: '5 hours ago'},
    {image: 'img/events/children-birthday.jpg', imageAltern: 'birthday cakes', heading: 'Make your children happy', desc: 'Now you can organize a wonderfull birtday for your children.', postedTimePast: '10 days ago'},
    {image: 'img/events/wedding.jpg', imageAltern: 'wedding', heading: 'Best wedding with us', desc: 'Our restaurant can place up to 60 elite guests inside. Let us make the most important day of your life special.', postedTimePast: '28 days ago'},
    {image: 'img/events/birthday.jpg', imageAltern: 'birthday cakes', heading: 'Birthday party can be even better', desc: 'Having boring birthday parties? Nah. We can serve you with the best Italian food and drinks. Candy bar is free.', postedTimePast: 'a month ago'},
  ];

  localStorage.setItem("allNews", JSON.stringify(allNews));
  var allNewsData = localStorage.getItem("allNews");
  var ourNews = JSON.parse(allNewsData);

  //write to html via resig template
  
  var results = document.getElementById("news-content");
  results.innerHTML = tmpl("mypage1", {data: ourNews});
  
  