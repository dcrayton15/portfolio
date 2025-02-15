// Smooth Scroll for the Timeline
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transition = "transform 0.3s ease-in-out";
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});

const carousel = document.querySelector(".carousel");

// Pause animation on hover
carousel.addEventListener("mouseenter", () => {
  carousel.style.animationPlayState = "paused";
});

// Resume animation when mouse leaves
carousel.addEventListener("mouseleave", () => {
  carousel.style.animationPlayState = "running";
});
