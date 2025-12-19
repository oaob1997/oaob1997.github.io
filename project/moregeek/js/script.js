$(function () {

  $(".gotop").click(function () {
    $('html,body').animate({ scrollTop: $('body').offset().top }, 500);
  });

  var $window = $(window);		//Window object
	var scrollTime = 1.2;			//Scroll time
	var scrollDistance = 180;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	// $window.on("mousewheel DOMMouseScroll", function(event){
		
	// 	event.preventDefault();	
										
	// 	var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
	// 	var scrollTop = $window.scrollTop();
	// 	var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
	// 	TweenMax.to($window, scrollTime, {
	// 		scrollTo : { y: finalScroll, autoKill:true },
	// 			ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
	// 			autoKill: true,
	// 			overwrite: 5							
	// 		});
					
	// });
  

  $(window).scroll(function () {

    // var h  = $(".idxClients").offset().top;//id為div的元素距離網頁頂部的距離
    // var h1 = $(".idxClients").height();
    // var h2 = $(".navbar-brand").height();
    // var c  = $(document).scrollTop();//滾動條距離網頁頂部的高度
    // var wh = $(window).height(); //頁面視覺化區域高度

    // if ($(this).scrollTop() > 100) {
    //   $('.gotop').fadeIn();
    // } else {
    //   $('.gotop').fadeOut();
    // }

    // Sticky
    if ($(this).scrollTop() > 50) {
      $('.header').addClass("sticky");
    } else {
      $('.header').removeClass("sticky");
    }

    // Scroll
    // if (Math.ceil(c)>=h-h2 && Math.ceil(h+h1)>=c){
    //   $('.menu-rten').addClass("changeColor");
    // } 
    // else {
    //   $('.menu-rten').removeClass("changeColor");
    // }
  });
  

});
