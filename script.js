// Efek sederhana saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
  alert("Selamat datang di portofolio saya!");
});
// Animasi progress bar
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    let value = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = value;
    }, 300);
  });
});

// Navbar active link saat scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".nav-link");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 80;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("a[href*=" + id + "]").classList.add("active");
      });
    }
  });
});
