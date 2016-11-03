var $ = $;


function WidthChange(mq) {
  if (mq.matches) {
      $("#sticker").css({"background": "pink"});
   
          $("#sticker").sticky();
        

  } else {
    // window width is less than 641px
      $("#sticker").css({"background": "green"})
      
          $("#sticker").unstick();
  

  }

}



  var mq = window.matchMedia("(min-width: 641px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
      
        

