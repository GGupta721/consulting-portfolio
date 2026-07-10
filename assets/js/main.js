/* Minimal, no dependencies. Handles mobile menu, footer year, and
   a lightly obfuscated email reveal to reduce scraping. */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // close after tapping a link
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") menu.classList.remove("open");
    });
  }

  // Footer year(s)
  var y = String(new Date().getFullYear());
  document.querySelectorAll("#year").forEach(function (el) { el.textContent = y; });

  // Email reveal — assembled in JS so it isn't sitting in the HTML for bots.
  var user = "gg301998";
  var domain = "gmail.com";
  var link = document.getElementById("email-link");
  if (link) {
    var addr = user + "@" + domain;
    link.textContent = addr;
    link.setAttribute("href", "mailto:" + addr + "?subject=Consulting%20enquiry");
  }
})();
