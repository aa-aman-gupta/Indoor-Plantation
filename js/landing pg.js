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
  var slideIndex = 0;
  showSlides1();
  var slides, dots;

  function showSlides1() {
      var i;
      slides = document.getElementsByClassName("mySlides");
      dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides1, 10000);
  }

  function plusSlides1(position) {
      slideIndex += position;
      if (slideIndex > slides.length) {
          slideIndex = 1
      } else if (slideIndex < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";

          slides[slideIndex - 1].style.display = "block";
      }

      function currentSlide1(index) {
          if (index > slides.length) {
              index = 1
          } else if (index < 1) {
              index = slides.length
          }
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          slides[index - 1].style.display = "block";
      }
  }