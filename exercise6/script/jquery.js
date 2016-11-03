var $ = $;
var jQuery = jQuery;  
  
$(document).ready(function(){
    locateISS();
        // run the iss locater function
        
    window.setInterval(locateISS, 10000);
        // update location every ten seconds
        
        
function locateISS() {
    
    
 
     jQuery.getJSON('https://api.wheretheiss.at/v1/satellites/25544').then(
        function(res) {
            console.log(res);
            
            
            var coordinates = res.latitude + "," + res.longitude;
            
            console.log(coordinates)
            
            var url = "https://maps.googleapis.com/maps/api/staticmap?center="
            + coordinates + "&zoom=5&size=600x300&maptype=hybrid"
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
}
//end of locateISS function
}) 