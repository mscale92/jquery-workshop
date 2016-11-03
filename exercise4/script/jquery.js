 var $ = $;
  
  
  $(document).ready(function(){
   $('#signup-form').on('submit', function(event) {
     event.preventDefault()
     
     var pass1 = $("#first").val()
     var pass2 = $("#second").val()
     
     
     
     if(pass1.length >= 10){
       if(pass1 === pass2){
        alert("Success!");
         $(this).off('submit').submit();
          //if all goes well, submit the form!
       }
       else{
        alert("Passwords must match!");
       }
     }
     else{
      alert("Password must be at least 10 characters");
     }
     
     
   });
   
   
  }) 