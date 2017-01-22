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
  function GooeyTransition(paths) {
    _classCallCheck(this, GooeyTransition);

    this.paths = paths;
    this.limit = 0;
    this.gap = 0.05;
  }

  GooeyTransition.prototype.getPath = function getPath(t) {
    var easeQuad = mathx.scale(ease.quadraticOut(mathx.clamp(t, 0, 1)), 1, 0, this.limit, 1);
    var easeQuart = mathx.scale(ease.quarticOut(mathx.clamp(t, 0, 1)), 1, 0, this.limit, 1);
    // var ease = easeQuad / easeQuart;
    return "\n      M 0 0\n      V " + easeQuart + "\n      Q 0.125 " + easeQuart + " 0.25 " + easeQuad + "\n      T 0.5 " + easeQuad + "\n      T 0.75 " + easeQuad + "\n      T 1 " + easeQuart + "\n      V 0\n    ";
  };

  GooeyTransition.prototype.render = function render(t) {
    for (var i = 0; i < this.paths.length; i++) {
      this.paths[i].attr('d', this.getPath(t + i * this.gap));
    }
  };

  return GooeyTransition;
}();

var landing1 = $("#gooey-bg #landing1");
var landing2 = $("#gooey-bg #landing2");
// var footer1 = $("#gooey-bg #footer1");
// var footer2 = $("#gooey-bg #footer2");

var landingTransition = new GooeyTransition([landing1, landing2]);
// const footerTransition = new GooeyTransition(0.9, [footer1, footer2]);

// Update anytime page is scrolled.
$(window).scroll(function () {
  console.log($(".active").attr("href"));

  var t = $(window).scrollTop() / $(window).height();
  // console.log($(window).height(), t)

  landingTransition.render(t * 2);

  // footerTransition.render(t*2 - 4);

  // Rescale landing
  var landingHeight = mathx.scale(mathx.clamp(t, 0, 0.5), 0.5, 0, 0, $(this).height());
  $("#landing").css("height", landingHeight);

  if ($("#nav-header").queue().length == 0 && t > 0.49) {
    // console.log("fading in");
    $("#nav-header").fadeIn(200);
  } else if ($("#nav-header").queue().length == 0 && t < 0.5) {
    // console.log("fading out");
    $("#nav-header").fadeOut(200);
  }
});

$(window).resize(function () {
  landingTransition.limit = $("#nav-header").height() / $(window).height();
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

/* TODO *
 * Fix svg z-indexing
 */