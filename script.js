// Scroll spy for sidebar highlight
// window.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".sidebar a");

//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 100;
//     if (pageYOffset >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });


window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
