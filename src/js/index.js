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


class GooeyTransition {
  constructor(paths) {
    this.paths = paths;
    this.limit = 0;
    this.gap = 0.05;
  }
  getPath(t) {
    var easeQuad = mathx.scale(ease.quadraticOut(mathx.clamp(t, 0, 1)), 1, 0, this.limit, 1)
    var easeQuart = mathx.scale(ease.quarticOut(mathx.clamp(t, 0, 1)), 1, 0, this.limit, 1)
    // var ease = easeQuad / easeQuart;
    return `
      M 0 0
      V ${easeQuart}
      Q 0.125 ${easeQuart} 0.25 ${easeQuad}
      T 0.5 ${easeQuad}
      T 0.75 ${easeQuad}
      T 1 ${easeQuart}
      V 0
    `;
  }
  render(t) {
    for (var i = 0; i < this.paths.length; i++) {
      this.paths[i].attr('d', this.getPath(t + i * this.gap));
    }
  }
}

var landing1 = $("#gooey-bg #landing1");
var landing2 = $("#gooey-bg #landing2");
// var footer1 = $("#gooey-bg #footer1");
// var footer2 = $("#gooey-bg #footer2");

var landingTransition = new GooeyTransition([landing1, landing2]);
// const footerTransition = new GooeyTransition(0.9, [footer1, footer2]);

// Update anytime page is scrolled.
$(window).scroll(function() {
  console.log($(".active").attr("href"));
  
  var t = $(window).scrollTop() / $(window).height();
  // console.log($(window).height(), t)
  
  landingTransition.render(t*2);
  
  // footerTransition.render(t*2 - 4);
  
  // Rescale landing
  var landingHeight = mathx.scale(mathx.clamp(t, 0, 0.5), 0.5, 0, 0, $(this).height());
  $("#landing").css("height", landingHeight);
  
  if ($("#nav-header").queue().length == 0 && t > 0.49) {
    // console.log("fading in");
    $("#nav-header").fadeIn(200);
  }
  else if ($("#nav-header").queue().length == 0 && t < 0.5) {
    // console.log("fading out");
    $("#nav-header").fadeOut(200);
  }
  
});

$(window).resize(function() {
  landingTransition.limit = $("#nav-header").height() / $(window).height();
  $(this).scroll(); // Trigger a scroll update
}).resize();

function navScrollTo(tag) {
  $("html,body").stop().animate({
    scrollTop: $(tag).offset().top
  }, 400, "easeInOutQuad");
  return false;
}

$("body").scrollspy({target: "#nav-header"})

/* TODO *
 * Fix svg z-indexing
 */