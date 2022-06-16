// Smooth the scroll action
function smoothScroll() {
	
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
}

// Floating Help Slider
$('.help-button').on('click', function(){
  $('.help-button-wrapper').toggleClass('expanded');
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});



// Update nav selected
function updateNavigation() {
	var lastId,
    topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
}

// Update slide switch highlight
function slideSwitch() {
	$('.switch-slide').on('click', function() {
		
	var activeSpan = $('.switch-toggle-slide .active');

	if (activeSpan.css('left') == '0px') {
		activeSpan.css('left', '50%');
	}
	
	if (activeSpan.css('left') == '125px') {
		activeSpan.css('left', '0');
	}
	
	if ($(this).hasClass('active-switch')) {
		$('.switch-slide').addClass('active-switch')
		$(this).removeClass('active-switch');
	}
	else {
		$('.switch-slide').removeClass('active-switch')
		$(this).addClass('active-switch');
	}
	});
}


//Home - Landing page scroll down
 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

//Home - Section 6 Popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

//Shop - product 
    $(".incr-btn").on("click", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });




// Profile page end

$(document).ready(function() {
     var owl = $("#slider-carousel");
     owl.owlCarousel({
       items: 4,
       itemsDesktop: [1000, 4],
       itemsDesktopSmall: [900, 2],
       itemsTablet: [600, 1],
       itemsMobile: false,
       pagination: false
     });
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })
   });

//Modal Quiz Box
$(document).ready(function(){
   //Dynamic Next
  $(".btn-next").on("click", function(){
    nextStep = $("#" + $(this).parents(".slider-step").data("nextStep"));
    $(this).parents(".slider-step").attr("data-anim","hide-to--left");
    nextStep.attr("data-anim","show-from--right");
  });
  
  //Dynamic Back
  $(".btn-back").on("click", function(){
    backTo = $("#" + $(this).parents(".slider-step").data("backTo"));
    $(this).parents(".slider-step").attr("data-anim","hide-to--right");
    backTo.attr("data-anim","show-from--left");
  });
});


