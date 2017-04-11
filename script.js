$("document").ready(function(){
	$("body").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
  $("nav a").bind("click", function(event){
    event.preventDefault();
    
    var target = $(this).attr("href");
    $("html, body").stop().animate({
      scrollLeft: $(target).offset().left,
      scrollTop: $(target).offset().top}, 1200);
    
  });
});