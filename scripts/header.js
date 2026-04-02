fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
    initHeaderElements();

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  });
