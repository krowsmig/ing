$(document).ready(function(){
	
	// navigation button
	$("nav a").click(function(){
		$("body").toggleClass("open");

		return false;
	});

	
	var getPdBtm = $(".quick_div.pd_btm_160").outerHeight() - $(".quick_div.pd_btm_160").height();
	var getPdBtm_2 = getPdBtm * 2;
	var getHeights = $("#main").outerHeight() - getPdBtm_2;
	
	$(window).resize(function(){ 
		getPdBtm = $(".quick_div.pd_btm_160").outerHeight() - $(".quick_div.pd_btm_160").height();
		getPdBtm_2 = getPdBtm * 2;
		getHeights = $("#main").outerHeight() - getPdBtm_2;
	});

	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > getHeights) {
				
				$(".target_ul").addClass("chart_ani");

				if ($(".target_ul").hasClass("after")) {

				} else {

					setTimeout(function(){

						$(".target_ul").addClass("after");
						
					}, 4000);
				}
			} else if ($(this).scrollTop() < getHeights) {
				
				$(".target_ul").removeClass("after");
				$(".target_ul").removeClass("chart_ani");

				
			} else {
				
				$(".target_ul").removeClass("chart_ani");
				$(".target_ul").removeClass("after");
			}
		});
	});


});
