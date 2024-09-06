let endingDAte = "10 september 2024 7:00 PM";
let timerValue = document.querySelectorAll(".timerValue");
function Timer() {
  let ending = new Date(endingDAte);
  let now = new Date();
  let difference = (ending - now) / 1000;
  timerValue[0].innerHTML = Math.floor(difference / 3600 / 24);
  timerValue[1].innerHTML = Math.floor(difference / 3600) % 24;
  timerValue[2].innerHTML = Math.floor(difference / 60) % 60;
  timerValue[3].innerHTML = Math.floor(difference) % 60;
}
Timer();
setInterval(() => {
  Timer();
}, 1000);

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entries) => {
//       if (entries.isIntersecting) {
//           entries.target.classList.add("show")
//       } else {
//           entries.target.classList.remove("show")
//       }
//   })
// })

// const hiddenElements = document.querySelectorAll(".carousel-caption")
// hiddenElements.forEach((el) =>
//   observer.observe(el)
// )
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

  //  // Get the toggle button and add an event listener
  //  const toggleButton = document.getElementById('dark-mode-toggle');
  //  let b=document.querySelector("body")
  //  toggleButton.addEventListener('click', () => {
  //    // Toggle the dark mode class on the body element
  //    b.style.background = "red";
  //  });