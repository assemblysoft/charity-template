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

if (typeof $ !== "undefined") {
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
