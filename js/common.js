head.ready(function() {
	// console.log($('body').html());
	$(".main").onepage_scroll({
	  sectionContainer: "section",
	  responsiveFallback: 600,
	  loop: true
	});

	// global var
	var windowheight = $(window).height();
	var page1ContentHeight = $(".page1 .page1__in").height();
	var page2 = $(".js-content2").height();
	var page3 = $(".js-content3").height();
	var page4 = $(".js-content4").height();
	var page5 = $(".js-content5").height();
	var page6 = $(".js-content6").height();
	var page7 = $(".js-content7").height();
	var page8 = $(".js-content8").height();
	var page9 = $(".js-content9").height();

	// heightPage1
	function heightPage1(){
		var page1Margin = ((windowheight - page1ContentHeight - 200) / 2);
		$(".page1 .page1__in").css('margin-top', page1Margin);
		// alert(page1ContentHeight);
	}
	heightPage1();

	// heightPage2
	function heightPage2(){
		var page2Margin = ((windowheight - page2 - 100) / 2);
		$(".page2 .page__content").css('padding-top', page2Margin);
	}
	heightPage2();

	// heightPage3
	function heightPage3(){
		var page2Margin = ((windowheight - page2 - 100) / 2);
		$(".page3 .page__content").css('padding-top', page2Margin);
	}
	heightPage3();

	$(window).resize(function() {
	 heightPage1();
	 heightPage2();
	 heightPage3();
	});
});