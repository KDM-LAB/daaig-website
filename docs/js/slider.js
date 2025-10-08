document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img");
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => img.classList.toggle("active", i === index));
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 4000);
  }
});
