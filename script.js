/* ==========================================
TYPING ANIMATION
========================================== */

const texts = [
  "ASP.NET Developer",
  "Web Developer",
  "Problem Solver",
  "C# Programmer"
];

let count = 0;
let index = 0;

function typeText() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  const currentText = texts[count];
  typingElement.textContent = currentText.slice(0, index);
  index++;

  if (index > currentText.length) {
    count = (count + 1) % texts.length;
    index = 0;
    setTimeout(typeText, 1500);
  } else {
    setTimeout(typeText, 100);
  }
}

typeText();

/* ==========================================
SCROLL REVEAL ANIMATION
========================================== */

const cards = document.querySelectorAll(".card, .project-card");

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";
});

function revealCards() {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const revealPoint = window.innerHeight - 100;

    if (cardTop < revealPoint) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealCards);
revealCards();

/* ==========================================
NAVBAR SHADOW
========================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});

/* ==========================================
ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ==========================================
PROFILE IMAGE GLOW
========================================== */

const profile = document.querySelector(".hero-img img");

if (profile) {
  profile.addEventListener("mouseenter", () => {
    profile.style.boxShadow =
      "0 0 30px #38bdf8, 0 0 80px rgba(56,189,248,.6)";
  });

  profile.addEventListener("mouseleave", () => {
    profile.style.boxShadow = "0 0 25px #38bdf8";
  });
}

/* ==========================================
SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.id = "topBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position: fixed;
bottom: 20px;
right: 20px;
width: 45px;
height: 45px;
border: none;
border-radius: 50%;
background: #38bdf8;
color: white;
font-size: 22px;
cursor: pointer;
display: none;
z-index: 1000;
box-shadow: 0 5px 20px rgba(56,189,248,.4);
transition: .3s;`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ==========================================
DARK/LIGHT MODE TOGGLE
========================================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

  // Saved theme load
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "🌙";
  } else {
    themeBtn.innerHTML = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "🌙";
    } else {
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = "☀️";
    }
  });

}
