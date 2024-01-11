const links = document.querySelectorAll("a");
links.forEach((element) => {
  if (!element.hasAttribute("target")) {
    element.setAttribute("target", "_blank");
  }
});
