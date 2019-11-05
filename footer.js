function backtoTop() {
  switch (document.title) {
    case "Home":
      window.location = "index.html#top";
      break;
    case "Projects":
      window.location = "/projects/index.html#top";
      break;
    case "Contact":
      window.location = "/contact/index.html#top";
      break;
    case "About Me":
      window.location = "/aboutme/index.html#top";
      break;
  }
}
