const mapboxgl = require('mapbox-gl');
console.log("hello we're getting into marker.js!")


const buildMarker = function(activityType, coordinates) {

    //constant marker info
    console.log(activityType, coordinates)
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "31px";

    //variable marker info
    if (activityType === 'hotels') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

    } else if (activityType === 'restaurants') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

    } else if (activityType === 'activities') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    //actually add the new marker to the map

    if (!Array.isArray(coordinates) || coordinates.length !== 2) {
        return new Error;
    }
    console.log('I made a thing');


   return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);

}




module.exports = buildMarker;
