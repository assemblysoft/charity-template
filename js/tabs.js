/**
 * Fluid v0.20.2
 * Copyright (c) 2019-2027 Fluid Framework
 * Copyright (c) 2019-2027 Ashfahan
 * Licensed under MIT (https://github.com/fluid-framework/Fluid/blob/master/LICENSE)
 */

// Todo: Remove Jquery Dependency
// Todo: Prevent reselect of the selected tab using Js

if ((tabsArray = document.querySelectorAll(".tabs"))) {
  const jquery = typeof $ !== "undefined";
  if (!jquery) throw `Require Jquery To Work`;

  var jqueryFxState = $.fx.off;

  $.fx.off = true;

  tabsArray.forEach((tabs) => {
    const firstTab = tabs.querySelector(".tab-content");
    const firstTabHref = firstTab.getAttribute("data-tab");

    if (!firstTabHref) throw `Missing href on anchor tab \n\n\`${firstTab.outerHTML}\` \n\n inside tabs \n\n\`${tabs.outerHTML}\``;

    ChangeTab(firstTabHref, tabs);
  });

  // On Click Event
  document.querySelectorAll("a.tab-switch").forEach((e) => {
    e.addEventListener("click", (event) => {
      const switcher = event.target.closest("a");
      const href = switcher.getAttribute("href").replace("#", "");
      const parent = switcher.getAttribute("data-parent");
      const root = switcher.closest(parent ?? ".tabs");
      const switcherArray = root.querySelectorAll(`[href='#${href}']`);

      ChangeTab(href, root);

      switcherArray.forEach((siwtcher) => siwtcher.classList.add("active"));
    });
  });

  $.fx.off = jqueryFxState;
}

function ChangeTab(href, root) {
  const switcherArray = root.querySelectorAll(`[href='#${href}']`);
  const tabSwitchArray = root.querySelectorAll(".tab-switch");
  const tabContentArray = root.querySelectorAll(`.tab-content`);
  const tab = root.querySelectorAll(`[data-tab='${href}']`);

  root.setAttribute("active", href);
  tabSwitchArray.forEach((e) => e.classList.remove("active")); // Hide all content
  tabContentArray.forEach((e) => {
    if (e.parentElement.closest(".tabs") === root) $(e).slideUp(400);
  });
  tab.forEach((e) => $(e).slideDown(400));
  tab.forEach((e) => e.classList.add("active"));
  switcherArray.forEach((siwtcher) => siwtcher.classList.add("active"));
}
