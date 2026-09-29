// Assemble email addresses at runtime so they aren't sitting in the HTML for scrapers.
// Each .js-email element holds a readable plain-text fallback and reversed parts in data attributes.
(function () {
  var rev = function (s) { return s.split("").reverse().join(""); };
  var nodes = document.querySelectorAll(".js-email");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var addr = rev(el.getAttribute("data-u")) + "@" + rev(el.getAttribute("data-d"));
    var subject = el.getAttribute("data-subject");
    var a = document.createElement("a");
    a.href = "mailto:" + addr + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    a.textContent = el.hasAttribute("data-label") ? el.getAttribute("data-label") : addr;
    if (el.hasAttribute("data-class")) a.className = el.getAttribute("data-class");
    el.replaceWith(a);
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
