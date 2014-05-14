head.ready(function() {
	// console.log($('body').html());
	$(".main").onepage_scroll({
	  sectionContainer: "section",
	  responsiveFallback: 600,
	  loop: true
	});

	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
	 });
	};
	select();

	$(document).click(function() {
		$('.js-select').removeClass('is-open');
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
		var page3Margin = ((windowheight - page3 - 100) / 2);
		$(".page3 .page__content").css('padding-top', page3Margin);
	}
	heightPage3();

	function heightPage4(){
		var page4Margin = ((windowheight - page4 - 100) / 2);
		$(".page4 .page__content").css('padding-top', page4Margin);
	}
	heightPage4();

	function heightPage5(){
		var page5Margin = ((windowheight - page5 - 100) / 2);
		$(".page5 .page__content").css('padding-top', page5Margin);
	}
	heightPage5();

	function heightPage6(){
		var page6Margin = ((windowheight - page6 - 100) / 2);
		$(".page6 .page__content").css('padding-top', page6Margin);
	}
	heightPage6();

	function heightPage7(){
		var page7Margin = ((windowheight - page7 - 100) / 2);
		$(".page7 .page__content").css('padding-top', page7Margin);
	}
	heightPage7();

	function heightPage8(){
		var page8Margin = ((windowheight - page8 - 100) / 2);
		$(".page8 .page__content").css('padding-top', page8Margin);
	}
	heightPage8();

	function heightPage9(){
		var page9Margin = ((windowheight - page9 - 100) / 2);
		$(".page9 .page__content").css('padding-top', page9Margin);
	}
	heightPage9();

	$(window).resize(function() {
	 heightPage1();
	 heightPage2();
	 heightPage3();
	 heightPage4();
	 heightPage5();
	 heightPage6();
	 heightPage7();
	 heightPage8();
	 heightPage9();
	});


});