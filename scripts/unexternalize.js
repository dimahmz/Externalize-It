var extention_print = "externalizer-0.0.1";

function execute() {
  var links = document.querySelectorAll("a");

  links.forEach((element) => {
    var is_changed_by_extention = element.getAttribute(extention_print);
    if (is_changed_by_extention) element.removeAttribute("target");
  });
}

execute();
