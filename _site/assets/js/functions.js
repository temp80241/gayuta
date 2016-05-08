function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function designBGStuff() {
  $('.design-img-link').hover(function(){
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function(){
    // off > revert the color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });


}

function startMentoring() {

  var wScroll = $(window).scrollTop();

  if($('section.mentoring').offset().top - $(window).height()/2 < wScroll) {
    if($(window).width() > 640) {
    $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open')){
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400);
      }
    } else {
      mentoringNarrowStart();
    }
  }

}

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)').addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
}


$(window).resize(function() {
  if($(window).width() > 640){
    //mentoringWideStart();
  } else {
    //mentoringNarrowStart();
  }

});
