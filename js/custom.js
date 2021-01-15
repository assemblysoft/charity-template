//
// header animation effect
//

const header = document.querySelector("header");

//
// scroll to top button
//

const scolltop = document.querySelector("#scolltop");
if (scolltop) scolltop.onclick = () => window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

//
// scroll to top button
//

const scrolldown = document.querySelector("#scrolldown");
if (scrolldown) {
  const next = scrolldown.parentElement.nextElementSibling;
  scrolldown.onclick = () => window.scrollTo({ top: next.offsetTop - header.clientHeight + 86, behavior: "smooth" });
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

if (typeof $ !== "undefined" && document.querySelectorAll(".tab_content").length && document.querySelectorAll(".tabs").length) {
  document.querySelectorAll(".tab_content").forEach((e) => $(e).hide()); // Hide all content
  document.querySelectorAll(".tab_button a.active").forEach((e) => e.classList.remove("active")); // Hide all content
  const queryString = window.location.hash;

  document.querySelectorAll(".tabs").forEach((e) => {
    const activeTab = e.querySelector(queryString ? `a[href='${queryString}']` : "a:first-child");
    const activeTabhref = activeTab.getAttribute("href").replace("#", "");
    activeTab.classList.add("active");
    e.setAttribute("active", activeTabhref);
    e.querySelectorAll(`[data-tab='${activeTabhref}']`).forEach((e) => {
      $(e).show();
    });
  });

  // On Click Event
  document.querySelectorAll(".tabs .tab_button a").forEach((e) => {
    e.onclick = (event) => {
      document.querySelectorAll(".tab_content").forEach((e) => $(e).hide()); // Hide all content
      document.querySelectorAll(".tab_button a.active").forEach((e) => e.classList.remove("active")); // Hide all content
      let activeTab = event.target;
      let tabs = activeTab.closest(".tabs");
      var activeTabhref = activeTab.getAttribute("href").replace("#", ""); // Find the rel attribute value to identify the active tab + content

      activeTab.classList.add("active");
      tabs.setAttribute("active", activeTabhref);
      document.querySelectorAll(`[data-tab='${activeTabhref}']`).forEach(
        (e) => $(e).fadeIn() // Fade in the active content
      );
    };
  });
}

const mansory = document.querySelectorAll(".masonry");
if (mansory.length) {
  mansory.forEach((e) => {
    new Macy({ container: e, waitForImages: true, margin: 16, columns: 3, breakAt: { 1200: 5, 940: 3, 520: 2, 400: 1 } });
  });
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
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    vertical: true
  });
}
