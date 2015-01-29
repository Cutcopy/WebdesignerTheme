$( document ).ready(function() {

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };
//edit font sizes here
})( jQuery );
$(".title").fitText(1.2, { minFontSize: '25px', maxFontSize: '150px' })

// Page Scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 32
				}, 1000);
				return false;
			}
		}
	});
//Poptrox
	var foo = $('#gallery');
	foo.poptrox();


// Fixed Nav

	$(window).scroll(function(){
		var scrollTop = 800;
		if($(window).scrollTop() >= scrollTop){
			$('.nav').css({
				background : '#323232',
				top : '0'
			});

			$('nav a').css({
				color : 'white'
			});

			$('#nav-logo').css({
				fill : 'white'
			});

			$('.resToggle').css({
				color : 'white'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('.nav').removeAttr('style');
			$('nav a').removeAttr('style');	
			$('#nav-logo').removeAttr('style');	
			$('.resToggle').removeAttr('style');	
		}
	});

//Responsive Navs
$('.resToggle').click(function(){
  $('nav').toggleClass('active');
 });



});