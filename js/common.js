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


	// heightPage1
	function heightPage1(){
		var page1Margin = ((windowheight - page1ContentHeight - 200) / 2);
		$(".page1 .page1__in").css('margin-top', page1Margin);
		// alert(page1ContentHeight);
	}
	heightPage1();

	$(window).resize(function() {
	 heightPage1();
	});
});