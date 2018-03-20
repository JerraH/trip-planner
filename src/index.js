const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')

console.log(buildMarker);

mapboxgl.accessToken = "pk.eyJ1IjoiamVycmFoIiwiYSI6ImNqZXp0ZjFyZzBmeG8yeW85OTJpM2V3dGoifQ.zdeFxBM_1Rm1f7zATIX5qA";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});


const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "31px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

buildMarker('hotels', [-74.006, 42.702]).addTo(map);


