var extention_print = "externalizer-0.0.1";

function execute() {
  var links = document.querySelectorAll("a");

  links.forEach((element) => {
    // get only the links that has no target blank attribute
    if (!element.getAttribute("target")) {
      // check if the link is under the same origin
      var link = element.getAttribute("href");
      if (link.startsWith("/")) return;

      // add the extention's print the link
      element.setAttribute(extention_print, true);
      element.setAttribute("target", "_blank");
    }
  });
}

execute();
