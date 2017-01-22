"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ease = {
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2);
  },
  quarticOut: function quarticOut(t) {
    return -Math.pow(t - 1, 4) + 1;
  } };

//TODO: Try InOut (http://gizma.com/easing/)
var mathx = {
  clamp: function clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  },
  scale: function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
  }
};

var GooeyTransition = function () {
  function GooeyTransition(svg) {
    _classCallCheck(this, GooeyTransition);

    this.svg = $(svg);
    this.paths = $(svg).find("path");
    console.log("PATHS", this.paths);
    this.limit = 0;
    this.gap = 0.05;
  }

  GooeyTransition.prototype.getPath = function getPath(t) {
    var easeQuad = mathx.scale(ease.quadraticOut(t), 1, 0, this.limit, $(window).height());
    var easeQuart = mathx.scale(ease.quarticOut(t), 1, 0, this.limit, $(window).height());
    // console.log(ease1.toFixed(3), ease2.toFixed(3));
    return "\n      M 0 0\n      V " + easeQuart + "\n      Q 12.5 " + easeQuart + " 25 " + easeQuad + "\n      T 50 " + easeQuad + "\n      T 75 " + easeQuad + "\n      T 100 " + easeQuart + "\n      V 0\n    ";
  };

  GooeyTransition.prototype.render = function render(t) {
    var easeQuad = mathx.scale(ease.quadraticOut(t), 1, 0, this.limit, $(window).height());
    var easeQuart = mathx.scale(ease.quarticOut(t), 1, 0, this.limit, $(window).height());
    var svgHeight = easeQuad + easeQuad - easeQuart;
    this.svg.css("height", svgHeight);
    this.svg.attr("viewBox", "0 0 100 " + svgHeight);

    for (var i = 0; i < this.paths.length; i++) {
      $(this.paths[i]).attr('d', this.getPath(t + i * this.gap));
    }
  };

  return GooeyTransition;
}();

var landingTransition = new GooeyTransition("#gooey-bg");
// const footerTransition = new GooeyTransition(0.9, [footer1, footer2]);

// Update anytime page is scrolled.
$(window).scroll(function () {
  // console.log($(".active").attr("href"));

  var t = $(window).scrollTop() / $(window).height();

  landingTransition.render(mathx.clamp(t * 2, 0, 1));

  // footerTransition.render(t*2 - 4);

  // Rescale landing
  var landingHeight = mathx.scale(mathx.clamp(t, 0, 0.5), 0.5, 0, 0, $(this).height());
  $("#landing").css("height", landingHeight);

  // Fade in/out nav-header
  if ($("#nav-header").queue().length == 0 && t > 0.49) {
    $("#nav-header").fadeIn(200);
  } else if ($("#nav-header").queue().length == 0 && t < 0.5) {
    $("#nav-header").fadeOut(200);
  }
});

$(window).resize(function () {
  landingTransition.limit = $("#nav-header").height();

  $(this).scroll(); // Trigger a scroll update
}).resize();

$(".nav-link").click(function () {
  var target = $(this).attr("href");
  console.log("target", target);
  $("html,body").stop().animate({
    scrollTop: $(target).offset().top
  }, 400, "easeInOutQuad");
  return false;
});

$("body").scrollspy({ target: "#nav-header" });
