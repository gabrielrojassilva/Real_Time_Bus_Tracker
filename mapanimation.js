console.log("Hellooooo")

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FiZXgxMjMiLCJhIjoiY2twcml4dDJqMGlyejJwbXVoazhqeWoyNCJ9.Jyks1M0wK2EPrBqfb_0Zlw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom:12
});

var timer = null;
var latlngpos = [];
var marker = new mapboxgl.Marker()
    .setLngLat([-71.104081, 42.365554])
    .addTo(map);

async function run(){
    // get bus data    
    const locations = await getBusLocations();
    console.log(new Date());
    console.log(locations);
    latlngpos = [locations[0].attributes.longitude,locations[0].attributes.latitude] 
    console.log(latlngpos)
    marker.setLngLat(latlngpos);
    // timer
    timer = setTimeout(run, 10000);
}

// Request bus data from MBTA
async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;

}

function stop(){
    console.log("Stop Tracking")
    clearTimeout(timer);
}

