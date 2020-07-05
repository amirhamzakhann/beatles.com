$(function(){

    // Sticky header jquery code start
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.header-two').addClass('header-three')
        }else {
            $('.header-two').removeClass('header-three')
        }
    });
    // Sticky header jquery code end

    // Typed Js start here
    $(".typed").typed({
		strings: ["Designers", "Developers"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1300,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 500000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // Typed Js end here

    // Veno Box Start Here
    $('.venobox').venobox(); 
    // Veno Box end Here

    // Back To Top Button Start Here
    $('.btt').click(function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });
    // Back To Top Button End Here

    // Preloader Jquery Code Start
    $(window).on('load',function(){
        $('.preloader').delay(2500).fadeOut(500);
    });
    // Preloader Jquery Code End

});