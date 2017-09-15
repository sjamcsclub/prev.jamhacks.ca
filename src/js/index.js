const ease = {
  quadraticOut: (t) => {
    return -t * (t - 2);
  },
  quarticOut: (t) => {
    return -Math.pow(t - 1, 4) + 1;
  }, //TODO: Try InOut (http://gizma.com/easing/)
}

const mathx = {
  clamp: function(x, min, max) {
    return Math.min(Math.max(x, min), max);
  },
  scale: function(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
  }
}

// Test if we're on mobile
const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

class GooeyTransition {
  constructor(svg) {
    this.svg = $(svg);
    this.paths = $(svg).find("path");
    this.limit = 0;
    this.gap = 0.05;
  }
  getPath(easeQuad, easeQuart) {
    return `
      M 0 0
      V ${easeQuart}
      Q 12.5 ${easeQuart} 25 ${easeQuad}
      T 50 ${easeQuad}
      T 75 ${easeQuad}
      T 100 ${easeQuart}
      V 0
    `;
  }
  render(t) {
    var easeQuad = mathx.scale(ease.quadraticOut(t), 1, 0, this.limit, $(window).height());
    var easeQuart = mathx.scale(ease.quarticOut(t), 1, 0, this.limit, $(window).height());
    var easeQuad2 = mathx.scale(ease.quadraticOut(t + this.gap), 1, 0, this.limit, $(window).height());
    var easeQuart2 = mathx.scale(ease.quarticOut(t + this.gap), 1, 0, this.limit, $(window).height());
    
    var svgHeight = easeQuad + easeQuad - easeQuart;
    if (isMobile) {
      this.svg.css("height", svgHeight*1.1);
    } else {
      this.svg.css("height", svgHeight);
    }

    this.svg.attr("viewBox", `0 0 100 ${svgHeight}`);
    
    $(this.paths[0]).attr("d", this.getPath(easeQuad, easeQuart));
    $(this.paths[1]).attr("d", this.getPath(easeQuad2, easeQuart2));
  }
}

const landingTransitionScale = 1.5;
const landingScrollScale = 0.4;
const landingTransition = new GooeyTransition("#gooey-bg");

// const footerTransition = new GooeyTransition(0.9, [footer1, footer2]);

// Update anytime page is scrolled.
$(window).scroll(function() {
  // console.log($(".active").attr("href"));
  
  var t = $(window).scrollTop() / screen.height;
  
  landingTransition.render(mathx.clamp(t*landingTransitionScale, 0, 1));
  
  // footerTransition.render(t*2 - 4);
  
  // Rescale landing
  var landingHeight = mathx.scale(mathx.clamp(t, 0, landingScrollScale), landingScrollScale, 0, 0, $(this).height());
  $("#landing").css("height", landingHeight);
  
  // Fade in/out nav-header
  if ($("#nav-header").queue().length === 0) {
    if (t > 0.49) {
      $("#nav-header").fadeIn(200);
    }
    else if (t < 0.5) {
      $("#nav-header").fadeOut(200);
    }
  }
  if (isMobile) {
    if ($("#gooey-bg").queue().length === 0) {
      if (t > 0.5) {
        $("#gooey-bg").fadeOut(300);
      }
      else if (t < 0.49) {
        $("#gooey-bg").fadeIn(200);
      }
    }
  }
});

$(window).resize(function() {
  landingTransition.limit = $("#nav-header").height();
  if (isMobile) {
    landingTransition.limit += $(window).height()/11.6;
  }

  var scrollSpyOffset = $("#nav-header").height() + parseInt($("section").css("margin-bottom")) / 2;
  $("body").attr("data-offset", scrollSpyOffset);

  $(this).scroll(); // Trigger a scroll update
}).resize();

$(".nav-link").click(function() {
  var target = $(this).attr("href");
  var offset = ($("#nav-header").height() + parseInt($("section").css("margin-bottom"))) / 2;
  console.log("target", target);
  $("html,body").stop().animate({
    scrollTop: $(target).offset().top - offset
  }, 400, "easeInOutQuad");
  return false;
});

$(function() {
  if (isMobile) {
    $("#gooey-bg").css("top", "-10%");
  }
});

// On DOM ready
// $(function(){

//   var $w = $(window),
//       $background = $("#gooey-bg");

//   // Fix background image jump on mobile
//   if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
//     $background.css({"top": "auto", "bottom": 0});

//     $w.resize(sizeBackground);
//     sizeBackground();
//   }

//   function sizeBackground() {
//      $background.height(screen.height);
//   }
// });