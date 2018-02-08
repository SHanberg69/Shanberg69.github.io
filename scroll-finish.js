$(document).ready(function(){

  $("a").on('click', function(event) {
		
		event.preventDefault();
			var hash = this.hash;
			
			$('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
			
			
			
			$('html, body').animate({
			
			scrollTop: anchor.offset().top
		
		}, '1000' function(){
		
			});
		
		});
	});
}
	
		 