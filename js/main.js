document.addEventListener("DOMContentLoaded", () => {
	// gsap.registerPlugin(CustomEase);
	// CustomEase.create(
	// 	"hop",
	// 	"M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 00.484,0.355 0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1"
	// );

	// function splitTextIntoSpans(selector) {
	// 	let elements = document.querySelectorAll(selector);
	// 	elements.forEach((element) => {
	// 		let text = element.innerText;
	// 		let splitText = innerText
	// 			.split("")
	// 			.map(function (char) {
	// 				return '<span>$(char === " " ? "&nbsp;&nbsp;" : char}</span>';

	// 			})
	// 			.join("");
	// 			element.innerHTML = splitText;
	// 	});
	// }

	// splitTextIntoSpans(".header h1");

	function animateCounter() { 
		const counterElement = document.querySelector(".counter p");
		let currentValue = 0;
		const updateInterval = 300;
		const maxDuration = 2000;
		const endValue = 100;
		const startTime = Date.now();

		function upadteCounter() {
			const elapsedTime = Date.now() - startTime;
			if ( elapsedTime < maxDuration ) {
				currentValue = Math.min(
					currentValue + Math.floor(Math.random() * 30) + 5, 
					endValue
				);
				counterElement.textContent = currentValue;
				setTimeout(upadteCounter, updateInterval);
			} else {
				counterElement.textContent = currentValue;
				setTimeout(() => {
					gsap.to(counterElement, {
						// y: -60,
						opacity:0,
						duration: .5,
						ease: "power3.inOut",
						onStart: () => {
							revealLandingPage();
						},
					});
				}, -100);
			}
		}

		upadteCounter();
	}

	gsap.to(".counter p", {
		y: 0,
		duration: .5,
		ease: "power3.out",
		delay: .1,
		onComplete: animateCounter,
	});

	function revealLandingPage() { 
		gsap.to(".ld", {
			clipPath: "polygon(0% 200%, 200% 200%, 200% 0%, 0% 0%)",
			duration: 1,
			ease: "hop",
			onStart: () => {
				gsap.to(".opa", {
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 1,
				});
				gsap.to(".opa_2", {
					// y: -200,
					opacity: 1,
					duration: 1,
					delay: 2.1,
				});
				gsap.to(".ld", {
					// transform: "translate(-50%, -50%) scale(1)",
					duration: 2,
					ease: "power3.inOut",
					delay: 0,
				});
				gsap.to(".overlay", {
					clipPath: "polygon(0% 0%, 200% 0%, 200% 0%, 0% 0%)",
					duration: 2,
					delay: 0.5,
					ease: "hop",
				});
				gsap.to("body", {
					overflowY: "auto",
					stagger: 0.1,
					duration: 0.4,
					ease: "power4.inOut",
					delay: 0.75,
				});
			},
		});
	}

});


gsap.registerPlugin(ScrollTrigger);



var tl = gsap.timeline();
			tl.to("#main h1", { y:-100, opacity: 0, duration: 3, skewY: "20deg"});
			tl.to("body", {backgroundColor: "#CFCDCB", duration: 2, delay: 1});
			tl.to("#projects .li_0 .rnd", { width: "100%", duration: 2,  delay: 0});
			tl.to("#projects .li_0 .rnd a", { opacity: 1, duration: 2,  delay: 0});


		ScrollTrigger.create({
			trigger: "#main",
			animation: tl,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});
		
		var tl_1 = gsap.timeline();
			tl_1.to("body", {backgroundColor: "#787878", duration: 2, delay: 1});
			tl_1.to("#projects .li_1 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_1.to("#projects .li_1 .rnd a", { opacity: 1, duration: 2, delay: 0});

		ScrollTrigger.create({
			trigger: "#projects .li_0",
			animation: tl_1,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});


		var tl_2 = gsap.timeline();
			tl_2.to("body", {backgroundColor: "#B8B8B8", duration: 2, delay: 1});
			tl_2.to("#projects .li_2 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_2.to("#projects .li_2 .rnd a", { opacity: 1, duration: 2, delay: 0});
			
		ScrollTrigger.create({
			trigger: "#projects .li_1",
			animation: tl_2,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,
		});


		var tl_3 = gsap.timeline();
			tl_3.to("body", {backgroundColor: "#66696D", duration: 2, delay: 1});
			tl_3.to("#projects .li_3 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_3.to("#projects .li_3 .rnd a", { opacity: 1, duration: 2, delay: 0});


		ScrollTrigger.create({
			trigger: "#projects .li_2",
			animation: tl_3,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});


		var tl_4 = gsap.timeline();
			tl_4.to("body", {backgroundColor: "#c3c1c5", duration: 1, delay: 1});
			tl_4.to("#projects .li_4 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_4.to("#projects .li_4 .rnd a", { opacity: 1, duration: 2});



		ScrollTrigger.create({
			trigger: "#projects .li_3",
			animation: tl_4,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});

		var tl_5 = gsap.timeline();
			tl_5.to("body", {backgroundColor: "#cdd0d0", duration: 2, delay: 1});
			tl_5.to("#projects .li_5 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_5.to("#projects .li_5 .rnd a", { opacity: 1, duration: 2, delay: 0});


		ScrollTrigger.create({
			trigger: "#projects .li_4",
			animation: tl_5,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});


		var tl_6 = gsap.timeline();
			tl_6.to("body", {backgroundColor: "#b5b8ba", duration: 2, delay: 1});
			tl_6.to("#projects .li_6 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_6.to("#projects .li_6 .rnd a", { opacity: 1, duration: 2, delay: 0});


		ScrollTrigger.create({
			trigger: "#projects .li_5",
			animation: tl_6,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});

		var tl_7 = gsap.timeline();
			tl_7.to("body", {backgroundColor: "#abaeaf", duration: 2, delay: 1});
			tl_7.to("#projects .li_7 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_7.to("#projects .li_7 .rnd a", { opacity: 1, duration: 2, delay: 0});


		ScrollTrigger.create({
			trigger: "#projects .li_6",
			animation: tl_7,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});

		var tl_8 = gsap.timeline();
			tl_8.to("body", {backgroundColor: "#c3beb0", duration: 2, delay: 1});
			tl_8.to("#projects .li_8 .rnd", { width: "100%", duration: 2, delay: 0});
			tl_8.to("#projects .li_8 .rnd a", { opacity: 1, duration: 2, delay: 0});


		ScrollTrigger.create({
			trigger: "#projects .li_7",
			animation: tl_8,
			start: "top top",
			ease: "power3.inOut",
			// duration: 2,
			snap: true,
			scrub: true,
			overwrite: true,

		});




// ScrollTrigger.create({
// 	trigger: "#projects",
// 	start: "top top",
// 	duration: 2,
// 	snap: true,
// 	pin: true,
// 	scrub: 1,


// });


$(document).ready(function(){



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

	$('nav a:eq(0)').click(function(){
		$("body").addClass("contact");

		return false;
	});

	$('.close_btn').click(function(){
		$("body").removeClass("contact");

		return false;
	});

	$("#contact .about_ul a").click(function(){
		$(this).parent().parent().addClass("on");
		$(this).parent().parent().siblings().removeClass("on");
		return false;
	});

	// Close menu by pressing the ESC key.
    $(document).keyup(function (e) {
      if ($('body').hasClass('contact') && e.keyCode === 27) { // ESC
        $('body').removeClass('contact');
      } else if ($('#forfun').hasClass('on') && e.keyCode === 27) { // ESC
	    $('#forfun').removeClass('on');
	    $("body").css("overflow","auto");
	  }
    });


    $("#projects li.li_0 a").click(function(){
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


});