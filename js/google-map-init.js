function initMap() {
  var uluru = {lat: 50.463, lng: 30.344};
  var map = new google.maps.Map(document.getElementById('contacts-block__google-map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
