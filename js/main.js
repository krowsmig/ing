gsap.registerPlugin(ScrollTrigger);


$(document).ready(function(){

				
	// change bg_clr 
	$(".pro_ul > li").click(function() {
		
		var getIndex = $(this).index();
		$(".pro_ul > li").eq(getIndex).addClass("flip");

		
		if ( getIndex == 0 ) {
			$(".bg_clr").css({"background-color":"#b7b2ac"});
		} else if ( getIndex == 1 ) {
			$(".bg_clr").css({"background-color":"#a0a0a0"});
			// $(".fnt_clr").css({"color":"#c1c1c1"});
		} else if ( getIndex == 2 ) {
			$(".bg_clr").css({"background-color":"#a7a7a7"});
		} else if ( getIndex == 3 ) {
			$(".bg_clr").css({"background-color":"#a2a4a6"});
		} else if ( getIndex == 4 ) {
			$(".bg_clr").css({"background-color":"#c3c1c5"});
		} else if ( getIndex == 5 ) {
			$(".bg_clr").css({"background-color":"#cdd0d0"});
		} else if ( getIndex == 6 ) {
			$(".bg_clr").css({"background-color":"#b5b8ba"});
		} else if ( getIndex == 7 ) {
			$(".bg_clr").css({"background-color":"#abaeaf"});
		} else if ( getIndex == 8 ) {
			$(".bg_clr").css({"background-color":"#c3beb0"});
		} else {

		}




	});

	// remove bg_clr and flip 
	$(".pro_ul > li").mouseleave(function() {
	
			$(this).delay(3000).removeClass("flip");
			$(".bg_clr").css({"background-color":"#d4d0ca"});

			$(".fnt_clr").css({"color":"#000"});

	});

	// nav a click event
	$("nav a.tab_0").click(function(){
		
		$("nav a").eq(0).removeClass("on");
		$("nav a").eq(1).addClass("on");

		$("body").removeClass("on_1");
		$("body").removeClass("on");

		return false;
	});

	$("nav a.tab_1").click(function(){
		
		$("nav a").eq(1).removeClass("on");
		$("nav a").eq(0).addClass("on");

		$("body").removeClass("on_2");
		$("body").removeClass("on_3");

		$("body").addClass("on").delay(100).queue(function(){

			$(this).addClass("on_1").dequeue();

		});
 
		return false;
	});





	// email link animation
	var timer;
	$(".email_link_li").mouseenter(function(){
		$(".logo_div").addClass("on");
		timer = setTimeout(function() {
			$(".logo_div").addClass("on_1");
			// alert("hey");
		}, 200);

	});

	$(".email_link_li").mouseleave(function(){

		$(".logo_div").removeClass("on");
		$(".logo_div").removeClass("on_1");

		timer = setTimeout(function() {
			$(".logo_div").removeClass("on_1");
		}, 200);


	});



	// open extra list popup
	$(".fl_9 a").click(function(){
		$("body").css("overflow","hidden");
		$("#forfun").addClass("on");

		
		$(this).siblings(".fun_div").animate({
			scrollTop: '0'
		}, 0);

		return false;
	});


	$("#forfun a.close").click(function(){
		$("body").css("overflow","auto");
		$("#forfun").removeClass("on");
		return false;
	});

	// Close extra list by pressing the ESC key.
	$(document).keyup(function (e) {
	  if ($('#forfun').hasClass('on') && e.keyCode === 27) { // ESC
	    $('#forfun').removeClass('on');
	    $("body").css("overflow","auto");
	  }
	});


});



// $(function(){
// 	loopIt();

// });

// function loopIt() {
// 	$(".short_ul > li").each(function (i){
// 		var t = $(this).eq(i);
// 		var i = $(this).index() * 1;
// 		setTimeout(function(){
// 			t.addClass('move');
// 				setTimeout(function() {
// 					t.removeClass("move");
// 					if (i == $(".short_ul > li").length - 1) loopIt();;
// 				}, 3000);
// 		}, 3100 * 1);
// 	});
// };

// animateLists();
// function animateLists() {
// 	var $lists = $(".short_ul > li");
// 	var li_lengh = $lists.length = 1;
// 	var last_index;

// 	addListClass(0);
// }

// function addListClass(index) {
// 	var $currentList = $lists.eq(index);
// 	var lastIndex = (index == 0) ? li_lengh - 1 : index - 1;
// 	$lists.removeClass("move");
// 	$currentList.addListClass("move");

// 	setTimeout(function (){
// 		index = (index + 1) % li_lengh;
// 		addListClass(index);
// 	}, 1000);
// }
