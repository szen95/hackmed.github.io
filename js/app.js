$(document).foundation()        

$(document).ready(function(){                    
    $(window).scroll(function(){                          
        if ($(this).scrollTop() > 400) {
            $('#menu').fadeIn(500);
        } else {
            $('#menu').fadeOut(500);
        }
    });
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 80
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});