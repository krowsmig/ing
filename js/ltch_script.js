$(document).ready(function(){

	// add classes to body for animation
	// $("body").addClass("no_y ld_1 ld_4 ld_none");

	// reduce opacity of the whole contents 
	// $("#wrapper").css("opacity","0");

	// handle links with @href started with '#' only
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});


	// hamburger button
	$(".burger a").click(function(){
		$("body").toggleClass("open");

		return false;
	});

	// navigation button
	$("nav").click(function(){
		$("body").removeClass("open");

	});


	// Close menu by pressing the ESC key.
	$(document).keyup(function (e) {
	  if ($('body').hasClass('open') && e.keyCode === 27) { // ESC
	    $('body').removeClass('open');
	  }
	});


	// animation
	var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();

    var top_height = $("#gnb").height() + $("#main").height();
	var top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + $("#content_2").height() + (pd_btm*2);
	var top_height_2_1 = top_height + $("#img_title_1").height();
	var top_height_3 = top_height_2 + $("#content_3").height() + $("#content_4").height() + (pd_btm * 2);
	
	

	$(window).resize(function(){ 
		pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
	
	    top_height = $("#gnb").height() + $("#main").height();
	    top_height_2 = top_height + $("#img_title_1").height() + $("#content_1").height() + $("#content_2").height() + (pd_btm*2);
	    top_height_2_1 = top_height + $("#img_title_1").height();
		top_height_3 = top_height_2 + $("#content_3").height() + $("#content_4").height() + (pd_btm * 2);
		

	});
	

	$(window).scroll(function(){

		// #gnb hide and show
		if ($(window).scrollTop() >= 200) {
		$("#wrapper").addClass("slide");
		$(".top_btn").addClass("add_top");
		$(".move_div").addClass("showup");
		} else {
		$("#wrapper").removeClass("slide");
		$(".top_btn").removeClass("add_top");
		$(".move_div").removeClass("showup");

		}

		if ($(this).scrollTop() > top_height) {
			// alert(pd_btm);
			$("#img_title_1 .img_title_div").addClass("show_now");

		}  else {
			$("#img_title_1 .img_title_div").removeClass("show_now");
		}

		if ($(this).scrollTop() > top_height_2_1) {

			$("#content_1").addClass("show_now");

		} else {
			$("#content_1").removeClass("show_now");

		}

		if ($(this).scrollTop() > top_height_2) {
			// alert("hey");
			$("#content_3").addClass("show_now");

		} else {
			$("#content_3").removeClass("show_now");

		}

		if ($(this).scrollTop() > top_height_3) {
			// alert("hey");
			$("#img_title_2 .img_title_div").addClass("show_now");

		} else {
			$("#img_title_2 .img_title_div").removeClass("show_now");

		}



	});

	// menu ul list mouseover event
	$(".menu_ul li").mouseover(function(){
		var getIndex = $(this).index();


		$(".mob_div").addClass("mob_class_"+getIndex);

	});

	// menu ul list mouseleave event
	$(".menu_ul li").mouseleave(function(){
		getIndex = $(this).index();

		$(".mob_div").removeClass("mob_class_"+getIndex);


	});

	// prevent site from being refreshed
	$(".menu_ul li a").click(function(){
		return false;

	});

		
});




$(window).on("load", function() {

		// // loading animtion
		// $("#wrapper").css("opacity","0");
		// setTimeout(function(){
		// 	$("#wrapper").css("opacity","1");
		// }, 1000);
		// setTimeout(function(){
		// 	$("body").addClass("ld_2");
		// 	$("body").removeClass("no_y");
		// }, 2000);

		// setTimeout(function(){
		// 	$("body").addClass("ld_3");
		// 	$("body").removeClass("ld_4");
		// }, 3000);


		// setTimeout(function(){
		// 	$("body").addClass("adjst");
		// 	$("body").removeClass("no_y");
		// 	$("body").removeClass("ld_none");
		// 	$("body").removeClass("ld_1");
		// 	$("body").removeClass("ld_2");
		// 	$("body").removeClass("ld_3");
		// 	$("body").removeClass("ld_4");
		// }, 4000);

		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");


});
