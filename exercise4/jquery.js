 var $ = $;
  
  $(document).ready(function(){
 -    $('.announcement').append('<button>X</button>');
 +    $('.announcement').append('<button class="hide">X</button>');
 +    $('.announcement').append('<button class="show">show announcements</button>');
 +        // Create two buttons
 +        
 +    $(".show").hide();
 +        // hide the show button
 +    
 +    $('.hide').click(function(){
 +        
 +        $(".announcement p").fadeOut('slow', function(){
 +        });
 +        
 +        $('.show').show();
 +        $('.hide').hide();
 +    });
 +        // hide button click
 +    
 +    $('.show').click(function(){
 +        $(".announcement p").fadeIn('slow', function(){
 +            $('.show').hide();
 +            $('.hide').show();
 +            
 +        });
 +    })
 +    
 +    
 +    
  }) 