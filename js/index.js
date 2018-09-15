function ativaScrollSuave(selector) {
    
    $(selector).click(function (event) { 
        event.preventDefault();
        
         var target = $(this).attr('href');        
         
         $('html, body').animate({
            scrollTop: $(target).offset().top
         },1000);
     });//end of function

}//end of function ativaScoollSuave()

ativaScrollSuave("a[href*=panel-about]");
ativaScrollSuave("a[href*=panel-speakers]");
ativaScrollSuave("a[href*=panel-data]");