var $ = $;
var jQuery = jQuery;  
  
$(document).ready(function(){
 jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=iss').then(
    function(res) {
        console.log(res.results[0].geometry.location);
        var lonLat = res.results[0].geometry.location;
        
        var coordinates = lonLat.lat + "," + lonLat.lng;
        
        console.log(coordinates)
        
        var url = "https://maps.googleapis.com/maps/api/staticmap?center="
        + coordinates + "&zoom=13&size=600x300&maptype=hybrid"
        + "&markers=color:blue%7Clabel:S%7C" + coordinates
        + "&key=AIzaSyD9Fness26-tcuA4khBN6molgSPoFfWzN4";
            // make the url for ISS
        
        $("#iss-position").attr('src', url);
    }
)
.catch(function(err){
    console.log("There was an error: ", err);
    alert("Oh dear, there seems to be an error. Please try again later.")
})
 
}) 