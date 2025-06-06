// Text Animation /////////////////////////////////////////

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// Circle skill /////////////////////////////////////////

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// Mix it up portfolio section
var mixer = mixitup(".portfolio-gallery");

// Active Menu /////////////////////////////////////////

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar /////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// toggle icon navbar /////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navList");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");
};

// Parallax /////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

// JavaScript to handle form submission ///////////////////

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting automatically

  const formData = new FormData(this);

  // Sending the form data to Formspree using fetch
  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("There was an error sending the message.");
      }
    })
    .catch((error) => {
      alert("There was an error sending the message.");
    });
});

// Testing scrolling issue to solve

// document.addEventListener("DOMContentLoaded", () => {
//   const navbar = document.querySelector(".navList");
//   const menuIcon = document.getElementById("menu-icon");

//   // Function to calculate and apply padding-top
//   function adjustBodyPadding() {
//     const navbarHeight = navbar.getBoundingClientRect().height; // Get the visible height of the navbar
//     document.body.style.paddingTop = `${navbarHeight}px`; // Set padding-top dynamically
//   }

//   // Initial adjustment
//   adjustBodyPadding();

//   // Optional: Recalculate on window resize
//   window.addEventListener("resize", adjustBodyPadding);

//   // Handle menu icon click (if needed for responsive design)
//   menuIcon.addEventListener("click", () => {
//     navbar.classList.toggle("active"); // Add or remove a class for toggling menu visibility
//     adjustBodyPadding(); // Recalculate padding if the navbar height changes
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const header = document.querySelector("header");

//   function adjustBodyPadding() {
//     const headerHeight = header.getBoundingClientRect().height; // Get the visible height of the header
//     document.body.style.paddingTop = `${headerHeight}px`; // Set padding-top dynamically
//   }

//   adjustBodyPadding();

//   window.addEventListener("resize", adjustBodyPadding);
// });
