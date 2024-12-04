document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const pages = {
    home: "",

    skill: "",
    contact: "<h1>Contact Us</h1><p>Get in touch through this page.</p>",
  };

  function loadPage(page) {
    app.innerHTML = pages[page];
    history.pushState({ page }, "", `#${page}`);
  }

  document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("home");
  });

  document.getElementById("skill").addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("about");
  });

  document.getElementById("contact-me").addEventListener("click", (e) => {
    e.preventDefault();
    loadPage("contact");
  });

  window.onpopstate = (event) => {
    if (event.state) {
      app.innerHTML = pages[event.state.page];
    } else {
      loadPage("home");
    }
  };

  const initialPage = window.location.hash.replace("#", "") || "home";
  loadPage(initialPage);
});
