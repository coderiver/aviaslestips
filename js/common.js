head.ready(function() {

	$('.js-send-form').on('click', function() {
	 $(".js-form").addClass("is-active");

	 // var windowheight = $(window).height();

	 // var butttonoOffset = $(this).offset().top;
	 // var butttonHeight = (butttonoOffset +75);

	 // var top = (butttonHeight - windowheight);

	 // $(".js-form").css("top", top);
	 
	 // alert(butttonoOffset);
	 return false;
	});

	$('.js-toggle-form').on('click', function() {
		$(".js-form").toggleClass("is-active");
		$('.footer__link span').toggle();
		return false;
	});

	function scrollnav() {
	   $(".js-slide").each(function(){
	      var pos = $(this).offset().top;
	      var id = $(this).attr('id');
	      if ($(window).scrollTop() >= pos) {
	        $(".js-nav li").removeClass("is-active");
	        //$("."+id).parent().addClass("current");
	        $('[href = #'+id+']').parent().addClass('is-active');

	      }
	   });
	}

	$(".js-nav a").click(function (){
	  var page = $(this).attr("href");
	  $('html, body').animate({
	   scrollTop: $(page).offset().top
	  }, 500);
	  return false;
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

	$(window).scroll(function(){
		scrollnav();
	});

	function height(){
		$('.js-slide').height(windowheight);
		$('.js-form').height(windowheight);
	}
	height();

});