function initMap() {
  var uluru = {lat: 50.44004, lng: 30.5105};
  var map = new google.maps.Map(document.getElementById('contacts-block__google-map'), {
    zoom: 15,
    scrollwheel: false,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
