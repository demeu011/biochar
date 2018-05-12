$(document).ready(function() {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1100, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });
    $("#menu").click(function() { // mouseover effect to make the links appear

  		if ($('#link_box').css('display') == 'none') {  // this just checks to see if the text links are hidden before revealing them

  			$("#link_box").fadeIn(800); // makes the text links appear

  			$(".blue").addClass("blue_on"); // these just swap out the "off" animation for the "on" ones for each circle
  			$(".blue").removeClass("blue_off");

  			$(".green").addClass("green_on");
  			$(".green").removeClass("green_off");

  			$(".white").addClass("white_on");
  			$(".white").removeClass("white_off");

  			$(".orange").addClass("orange_on");
  			$(".orange").removeClass("orange_off");

          }

  	});

  	$(".orange").click(function() {
  		$("#link_box").fadeOut(600); // removing the text links

  		$(".blue").addClass("blue_off"); // these just swap out the "on" animation for the "off" ones for each circle
  		$(".blue").removeClass("blue_on");

  		$(".green").addClass("green_off");
  		$(".green").removeClass("green_on");

  		$(".white").addClass("white_off");
  		$(".white").removeClass("white_on");

  		$(".orange").addClass("orange_off");
  		$(".orange").removeClass("orange_on");
  	});
    $("#menu").click(function() { // mouseover effect to make the links appear

      if ($('#link_box').css('display') == 'none') {  // this just checks to see if the text links are hidden before revealing them

        $("#link_box").fadeIn(800); // makes the text links appear

        $(".blue").addClass("blue_on"); // these just swap out the "off" animation for the "on" ones for each circle
        $(".blue").removeClass("blue_off");

        $(".green").addClass("green_on");
        $(".green").removeClass("green_off");

        $(".white").addClass("white_on");
        $(".white").removeClass("white_off");

        $(".orange").addClass("orange_on");
        $(".orange").removeClass("orange_off");

          }

    });

    $(".orange").click(function() {
      $("#link_box").fadeOut(600); // removing the text links

      $(".blue").addClass("blue_off"); // these just swap out the "on" animation for the "off" ones for each circle
      $(".blue").removeClass("blue_on");

      $(".green").addClass("green_off");
      $(".green").removeClass("green_on");

      $(".white").addClass("white_off");
      $(".white").removeClass("white_on");

      $(".orange").addClass("orange_off");
      $(".orange").removeClass("orange_on");
    });
    $("#menu").click(function() { // mouseover effect to make the links appear

      if ($('#link_box').css('display') == 'none') {  // this just checks to see if the text links are hidden before revealing them

        $("#link_box").fadeIn(800); // makes the text links appear

        $(".blue").addClass("blue_on"); // these just swap out the "off" animation for the "on" ones for each circle
        $(".blue").removeClass("blue_off");

        $(".green").addClass("green_on");
        $(".green").removeClass("green_off");

        $(".white").addClass("white_on");
        $(".white").removeClass("white_off");

        $(".orange").addClass("orange_on");
        $(".orange").removeClass("orange_off");

          }

    });

    $(".orange").click(function() {
      $("#link_box").fadeOut(600); // removing the text links

      $(".blue").addClass("blue_off"); // these just swap out the "on" animation for the "off" ones for each circle
      $(".blue").removeClass("blue_on");

      $(".green").addClass("green_off");
      $(".green").removeClass("green_on");

      $(".white").addClass("white_off");
      $(".white").removeClass("white_on");

      $(".orange").addClass("orange_off");
      $(".orange").removeClass("orange_on");
    });

});
