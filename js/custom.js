var myElement = document.querySelector("header");
var headroom = new Headroom(myElement, {
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
  }
});
headroom.init();
