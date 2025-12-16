document.addEventListener("DOMContentLoaded", function () {
  const pageWrapper = document.querySelector(".page-wrapper");
  if (pageWrapper) pageWrapper.classList.add("show");

  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Ignore if it's an external link or blank
      if (!link.getAttribute("href") || link.getAttribute("href").startsWith("http")) return;
      e.preventDefault();
      const pageWrapper = document.querySelector(".page-wrapper");
      if (!pageWrapper) {
        window.location = link.href;
        return;
      }
      pageWrapper.classList.remove("show");
      pageWrapper.addEventListener(
        "transitionend",
        function handler() {
          // Remove handler to prevent it firing multiple times
          pageWrapper.removeEventListener("transitionend", handler);
          window.location = link.href;
        }
      );
    });
  });
});
