var $ = $;

$(document).ready(function(){
    
    var overlay = "<div class='overlay'></div>";
    
    
    
    $(".responsive-img").click(function(e){
        $(this).addClass("clicked");
            var source = '<img src="' + $(".clicked").attr('src') + '">';
            var caption = '<p>' + $(".clicked").attr('alt') + '</p>';
        
        
        $("body").append(overlay);
        $(".overlay").append(source);
        $(".overlay").append(caption);
    });
    
    $(window).scroll(function(){
        $(".overlay").remove();
        $(".clicked").removeClass("clicked");
    });
    
    
});