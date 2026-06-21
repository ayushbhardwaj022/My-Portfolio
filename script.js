/* ==========================================
   1. TYPING ANIMATION EFFECT
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

// Initialize Typing on Load
typeText();


/* ==========================================
   2. SCROLL REVEAL ANIMATION (CARDS)
========================================== */
const cards = document.querySelectorAll(".card, .project-card");

// Set Initial States
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
   3. DYNAMIC NAVBAR SHADOW
========================================== */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (!nav) return;

  if (window.scrollY > 50) {
    // Dynamic shadow adjustment based on Active Theme Mode
    if (document.body.classList.contains("light-mode")) {
      nav.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.06)";
    } else {
      nav.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    }
  } else {
    nav.style.boxShadow = "none";
  }
});


/* ==========================================
   4. ACTIVE NAVBAR LINK HIGHLIGHTER
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
   5. PROFILE IMAGE INTERACTIVE GLOW
========================================== */
const profile = document.querySelector(".hero-img img");

if (profile) {
  profile.addEventListener("mouseenter", () => {
    if (document.body.classList.contains("light-mode")) {
      profile.style.boxShadow = "0 10px 30px rgba(2, 132, 199, 0.25)";
    } else {
      profile.style.boxShadow = "0 0 30px #38bdf8, 0 0 80px rgba(56, 189, 248, 0.6)";
    }
  });

  profile.addEventListener("mouseleave", () => {
    if (document.body.classList.contains("light-mode")) {
      profile.style.boxShadow = "0 10px 25px rgba(2, 132, 199, 0.15)";
    } else {
      profile.style.boxShadow = "0 0 25px #38bdf8";
    }
  });
}


/* ==========================================
   6. SCROLL TO TOP UTILITY BUTTON
========================================== */
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.id = "topBtn";

document.body.appendChild(scrollBtn);

// Dynamic injected button style
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
  box-shadow: 0 5px 20px rgba(56, 189, 248, 0.4);
  transition: .3s;
`;

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
   7. DARK/LIGHT MODE TOGGLE & VANTA OPTIMIZATION
========================================== */
const themeBtn = document.getElementById("theme-toggle");

// Manage Vanta Canvas Visibility depending on theme requirements
function handleVantaVisibility() {
  const vantaCanvas = document.querySelector(".vanta-canvas");
  if (vantaCanvas) {
    if (document.body.classList.contains("light-mode")) {
      vantaCanvas.style.opacity = "0";
      vantaCanvas.style.visibility = "hidden";
    } else {
      vantaCanvas.style.opacity = "1";
      vantaCanvas.style.visibility = "visible";
    }
  }
}

if (themeBtn) {
  // LocalStorage Preference Validation
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "🌙";
  } else {
    themeBtn.innerHTML = "☀️";
  }

  // Handle Canvas state on clean system load
  setTimeout(handleVantaVisibility, 100);

  // Core Toggle Click Mechanism
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "🌙";
    } else {
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = "☀️";
    }

    // Trigger UI Refresh for Background Canvas
    handleVantaVisibility();
  });
}


/* ==========================================
   8. VANTA GLOBE ENGINE INITIALIZATION
========================================== */
VANTA.GLOBE({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200,
  minWidth: 200,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x38bdf8,
  color2: 0x0ea5e9,
  backgroundColor: 0x020617,
  size: 1.1
});
