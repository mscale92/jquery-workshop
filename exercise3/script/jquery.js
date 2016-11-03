var $ = $;

$(document).ready(function(){
    
  $(window).scroll(function(e){
      
       $("#sticker").sticky({topSpacing:0});
       $("#sticker").css({"min-width": "300px"})
  })
    
    
});