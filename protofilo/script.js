// Dark Mode Toggle
// Dark Mode Toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    document.body.style.background = "#e1aeaeff";
    document.body.style.color = "#eee";
    toggle.textContent = "☀️";
  } else {
    document.body.style.background = "#f5f7fa";
    document.body.style.color = "#e6dcdcff";
    toggle.textContent = "🌙";
  }
});


// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
