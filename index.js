/* mapboxgl.accessToken = 'pk.eyJ1IjoidHJleDMwMDBuaWNvIiwiYSI6ImNsMTZzYmM0bjA2eGQzYnBlOHB4aXVyb3IifQ.bYaRTigea-AwQk8oQVtwnw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14,
  center: [-75.7043800, 4.5330700 ]
  });


var directions = new mapboxgDirections({
    accessToken: mal
})
mapboxgl.accessToken


const nav = new mapboxgl.NavigationControl();
mapp.addControl(nav);

 */
mapboxgl.accessToken = 'pk.eyJ1IjoidHJleDMwMDBuaWNvIiwiYSI6ImNsMTZzYmM0bjA2eGQzYnBlOHB4aXVyb3IifQ.bYaRTigea-AwQk8oQVtwnw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-75.7043800, 4.5330700 ],
        zoom: 13.5
    });

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

/*   var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options); */ 
  
/* close code to know my location */

  /* 
navigator.geolocation.getCurrentPosition(successLocation,errorLocation, { 
    enableHighAccuracy: true
})

function successLocation(){
console.log(position)
/* 
setupMap([position.coords.longitude, position.coords.latitude]) */



/* function errorLocation(){
    setupMap(-2.24, 53.48)
}

function setupMap(center){

   
}
 */
/* this code is for work with the web api to
know what is my locations */
