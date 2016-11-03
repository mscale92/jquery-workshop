var $ = $;
var jQuery = jQuery;  
  
$(document).ready(function(){
 jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=iss').then(
    function(res) {
        console.log(res.results[0].geometry.location);
        var lonLat = res.results[0].geometry.location;
        
        var url = "https://maps.googleapis.com/maps/api/staticmap?center="
        + lonLat.lat + "," + lonLat.lng + "&zoom=13&size=600x300&maptype=hybrid"
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