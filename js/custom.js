//
// header animation effect
//

const header = document.querySelector("header");

//
// scroll to top button
//

if ((scolltop = document.querySelector("#scolltop"))) {
  scolltop.onclick = () => window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  new Headroom(scolltop, {
    offset: document.body.scrollHeight / 2 - document.body.clientHeight / 4,
    tolerance: 5,
    classes: {
      top: "headroom--top",
      notTop: "headroom--not-top"
    }
  }).init();
}

//
// scroll to top button
//

if ((scrolldown = document.querySelector("#scrolldown"))) {
  const next = scrolldown.parentElement.nextElementSibling;
  scrolldown.onclick = () => window.scrollTo({ top: next.offsetTop + header.clientHeight - 67, behavior: "smooth" });
}

//
// impliment headroom to add scroll events
//

new Headroom(document.body, {
  offset: 80,
  tolerance: 5,
  classes: {
    initial: "headroom",
    pinned: "headroom--pinned",
    unpinned: "headroom--unpinned",
    top: "headroom--top",
    notTop: "headroom--not-top",
    bottom: "headroom--bottom",
    notBottom: "headroom--not-bottom",
    frozen: "headroom--frozen",
    pinned: "headroom--pinned"
  },
  // callback when pinned, `this` is headroom objectF
  onPin: () => {
    header.style.top = "0";
  },
  // callback when unpinned, `this` is headroom object
  onUnpin: () => {
    header.style.top = -1 * header.children[0].clientHeight.toString() + "px";
  },
  // callback when above offset, `this` is headroom object
  onTop: () => {},
  // callback when below offset, `this` is headroom object
  onNotTop: () => {},
  // callback when at bottom of page, `this` is headroom object
  onBottom: () => {},
  // callback when moving away from bottom of page, `this` is headroom object
  onNotBottom: () => {}
}).init();

if ((mansory = document.querySelectorAll(".masonry"))) {
  mansory.forEach((e) => new Macy({ container: e, waitForImages: true, margin: 16, columns: 3, breakAt: { 1200: 5, 940: 3, 520: 2, 400: 1 } }));
}

//
// light box
//

if (typeof $ !== "undefined" && document.querySelector('[data-fancybox="gallery"]')) {
  const option = {
    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: ["zoom", "share", "slideShow", "fullScreen", "close"],

    image: { preload: true },

    // Open/close animation type
    //
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "zoom-in-out"
  };

  $('[data-fancybox="gallery"]').fancybox(option);
}

//
// Slider
//

if ((HeroSlider = document.querySelector(".HeroSlider"))) {
  const slider = new Splide(".HeroSlider", {
    direction: "ttb",
    height: HeroSlider.querySelector(".splide__slide").clientHeight + "px",
    type: "loop",
    autoHeight: true
  }).mount();

  slider.on("moved", function (next, old, direction) {
    const nextslide = slider.Components.Elements.getSlide(next).slide;
    slider.options = { height: nextslide.clientHeight };
  });
}

if ((footerSlider = document.querySelector(".footerSlider"))) {
  const slider = new Splide(".footerSlider", {
    type: "loop",
    perPage: 3,
    arrows: false,
    autoplay: true,
    gap: "1em",
    pagination: false,
    pauseOnHover: true,
    interval: 3000,
    breakpoints: { 576: { perPage: 1 }, 992: { perPage: 2 } }
  }).mount();
}

// cookies section

// if ((model = document.getElementById("staticBackdrop"))) {
//   var myModal = new bootstrap.Modal(model, { backdrop: "static", keyboard: false, focus: true });
//   myModal.show();
// }
