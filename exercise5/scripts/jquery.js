var $ = $;
var jQuery = jQuery;

$(document).ready(function(){

 jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
    function(res) {
        console.log(res.results[0].geometry.location);
        var lonLat = res.results[0].geometry.location;
        
        $("h2").after("<p> ISS has a latitude of " + lonLat.lat + " and a longitude of " + lonLat.lng + "</p>");
    }
)
.catch(function(err){
 alert("oh dear, something went wrong. Try again later");
 console.log("there was an error ", err);
})
 
}) 