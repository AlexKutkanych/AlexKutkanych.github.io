//google map init

function initMap() {
  var mySpot = {lat: 50.44004, lng: 30.5105};
  var map = new google.maps.Map(document.getElementById('contacts-block__google-map'), {
    zoom: 15,
    scrollwheel: false,
    center: mySpot
  });
  var marker = new google.maps.Marker({
    position: mySpot,
    map: map
  });
}
