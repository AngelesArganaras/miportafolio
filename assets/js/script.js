$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var item = this.hash;

      $("html, body").animate({
        scrollTop: $(item).offset().top
      }, 800, function(){
        window.location.hash = item;
      });
    }
  });
});
