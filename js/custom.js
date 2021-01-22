//
// header animation effect
//

const header = document.querySelector("header");

//
// scroll to top button
//

const scolltop = document.querySelector("#scolltop");
if (scolltop) {
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

const scrolldown = document.querySelector("#scrolldown");
if (scrolldown) {
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
  onPin: () => {},
  // callback when unpinned, `this` is headroom object
  onUnpin: () => {},
  // callback when above offset, `this` is headroom object
  onTop: () => {},
  // callback when below offset, `this` is headroom object
  onNotTop: () => {},
  // callback when at bottom of page, `this` is headroom object
  onBottom: () => {},
  // callback when moving away from bottom of page, `this` is headroom object
  onNotBottom: () => {}
}).init();

//
// Tabs implimentation
//

if (typeof $ !== "undefined" && document.querySelectorAll(".tabs").length) {
  // const queryString = window.location.hash;
  // const activeTab = e.querySelector(queryString ? `a[href='${queryString}']` : "a.tabs-switcher");

  document.querySelectorAll(".tabs").forEach((tabs) => {
    $.fx.off = true;
    const firsttab = tabs.querySelector(".tab_content:first-child").getAttribute("data-tab");
    changetab(firsttab, tabs);
    $.fx.off = false;
  });

  function changetab(href, root) {
    root.setAttribute("active", href);
    root.querySelectorAll(".tabs-switcher").forEach((e) => e.classList.remove("active")); // Hide all content
    root.querySelectorAll(`.tab_content`).forEach((e) => {
      if (e.parentElement.closest(".tabs") === root) $(e).slideUp(400);
    });
    root.querySelectorAll(`[data-tab='${href}']`).forEach((e) => $(e).slideDown(400));
    root.querySelectorAll(`[data-tab='${href}']`).forEach((e) => e.classList.add("active"));
  }

  // On Click Event
  document.querySelectorAll("a.tabs-switcher").forEach((e) => {
    e.onclick = (event) => {
      const switcher = event.target;
      switcher.classList.add("active");
      const href = switcher.getAttribute("href").replace("#", "");
      const parent = switcher.getAttribute("data-parent");
      const root = switcher.closest(parent ?? ".tabs");
      changetab(href, root);
    };
  });
}

const mansory = document.querySelectorAll(".masonry");
if (mansory.length) {
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
// light box
//

const HeroSlider = document.querySelector(".HeroSlider");
if (HeroSlider) {
  $(HeroSlider).slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    vertical: true
  });
}

// cookies section

if ((model = document.getElementById("staticBackdrop"))) {
  var myModal = new bootstrap.Modal(model, { backdrop: "static", keyboard: false, focus: true });
  myModal.show();
}
