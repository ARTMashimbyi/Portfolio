// Loading Screen
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000);
  }, 1500);
});

// Custom Cursor
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";

  setTimeout(() => {
    cursorFollower.style.left = e.clientX - 20 + "px";
    cursorFollower.style.top = e.clientY - 20 + "px";
  }, 100);
});

// Interactive elements cursor effects
document
  .querySelectorAll("a, button, .project-card, .trait-card, .contact-item")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
      cursorFollower.style.transform = "scale(1.2)";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursorFollower.style.transform = "scale(1)";
    });
  });

// Scroll Progress
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Close mobile menu if open
      navLinks.classList.remove("active");

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.fromTo(
    section,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Animate skill bars
function animateSkillBars() {
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    const width = bar.getAttribute("data-width");
    gsap.to(bar, {
      width: width,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 80%",
      },
    });
  });
}

// Initialize skill bar animations
ScrollTrigger.addEventListener("refresh", animateSkillBars);

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Trait cards animation
document.querySelectorAll(".trait-card").forEach((card) => {
  card.addEventListener("click", () => {
    gsap.to(card, {
      rotationY: 360,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });
});

// Hero content animation
gsap
  .timeline({ delay: 2.5 })
  .fromTo(
    ".hero-title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    ".hero-description",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.5"
  )
  .fromTo(
    ".cta-container",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.3"
  )
  .fromTo(
    ".hero-stats",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.2"
  );

// Floating Particles
function createFloatingParticles() {
  const particlesContainer = document.getElementById("particles");

  setInterval(() => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 2 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";

    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 6000);
  }, 500);
}

createFloatingParticles();

// Course cards animation
document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Experience items animation
document.querySelectorAll(".experience-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      x: 10,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Contact items animation
document.querySelectorAll(".contact-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      y: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Initialize animations after page load
window.addEventListener("load", () => {
  // Refresh ScrollTrigger to ensure all elements are properly detected
  ScrollTrigger.refresh();

  // Animate skill bars
  setTimeout(animateSkillBars, 500);
});

// Console welcome message
console.log(
  `
  %c
  ╔══════════════════════════════════════════════════════════╗
  ║                                                          ║
  ║    Welcome to Vutshila Mashimbyi's Portfolio!           ║
  ║                                                          ║
  ║    🚀 Computer Science Graduate from Wits University     ║
  ║    💻 Full-Stack Developer & Data Science Enthusiast    ║
  ║    🔒 Cybersecurity Student & AI/ML Explorer           ║
  ║    👨‍💼 Experienced Scrum Master & Team Leader           ║
  ║                                                          ║
  ║    Built with: HTML5, CSS3, JavaScript, Three.js,       ║
  ║    GSAP, Typed.js, and lots of ☕                      ║
  ║                                                          ║
  ╚══════════════════════════════════════════════════════════╝
  `,
  "color: #00ff87; font-family: monospace; font-size: 12px;"
);

// Easter egg: Konami code
let konamiCode = [];
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.keyCode);
  if (konamiCode.length > correctCode.length) {
    konamiCode.shift();
  }

  if (konamiCode.toString() === correctCode.toString()) {
    // Secret animation
    gsap.to("body", {
      filter: "hue-rotate(360deg)",
      duration: 2,
      repeat: 3,
      yoyo: true,
    });

    // Show secret message
    const secretMsg = document.createElement("div");
    secretMsg.innerHTML =
      "🎉 You found the secret! Extra creativity points! 🎉";
    secretMsg.style.cssText = `
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: linear-gradient(45deg, #00ff87, #ff6b6b);
              color: black;
              padding: 20px;
              border-radius: 10px;
              font-weight: bold;
              z-index: 10000;
              animation: bounce 1s infinite;
          `;

    document.body.appendChild(secretMsg);

    setTimeout(() => {
      secretMsg.remove();
    }, 5000);

    konamiCode = [];
  }
});

// Matrix rain effect (optional easter egg)
function createMatrixRain() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          opacity: 0.1;
      `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  const lettersArray = letters.split("");

  const fontSize = 10;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff87";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text =
        lettersArray[Math.floor(Math.random() * lettersArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 35);
}

// Uncomment to enable matrix rain effect
// createMatrixRain();

// Project card navigation
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    // Don't navigate if clicking on links inside the card
    if (e.target.tagName === "A") {
      return;
    }

    const projectId = card.getAttribute("data-project");
    navigateToProject(projectId);
  });

  // Make the entire card clickable with cursor pointer
  card.style.cursor = "pointer";
});

// Function to navigate to project detail page
function navigateToProject(projectId) {
  // Add a smooth transition effect before navigation
  gsap.to(".project-card", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.1,
    onComplete: () => {
      // Navigate to the project detail page
      window.location.href = `project-${projectId}.html`;
    },
  });
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.tagName === "A") return;

    // Create ripple effect
    const ripple = document.createElement("div");
    ripple.className = "project-ripple";
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(0, 255, 135, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;

    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    card.style.position = "relative";
    card.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add this to your existing JavaScript file

// Academic Foundation toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleAcademic");
  const hiddenCards = document.querySelectorAll(".academic-hidden");
  let isExpanded = false;

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      isExpanded = !isExpanded;

      hiddenCards.forEach((card) => {
        if (isExpanded) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });

      // Update button text
      toggleButton.textContent = isExpanded
        ? "Collapse Academic Foundation"
        : "View All Academic Foundation";

      // Smooth scroll to button if collapsing
      if (!isExpanded) {
        toggleButton.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // Enhanced project card hover functionality
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    // Add tooltip on hover
    card.addEventListener("mouseenter", function () {
      // Create tooltip if it doesn't exist
      if (!this.querySelector(".project-tooltip")) {
        const tooltip = document.createElement("div");
        tooltip.className = "project-tooltip";
        tooltip.textContent = "Click to view details";
        tooltip.style.cssText = `
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
          white-space: nowrap;
          z-index: 10;
          pointer-events: none;
        `;
        this.style.position = "relative";
        this.appendChild(tooltip);
      }
    });

    card.addEventListener("mouseleave", function () {
      const tooltip = this.querySelector(".project-tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    });

    // Enhanced click functionality
    card.addEventListener("click", function (e) {
      if (e.target.tagName === "A") return;

      const projectId = this.getAttribute("data-project");
    });
  });
});

// Academic Foundation Toggle with Enhanced UX
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleAcademic");
  const academicWrapper = document.querySelector(".academic-grid-wrapper");
  const hiddenCards = document.querySelectorAll(".academic-hidden");
  let isExpanded = false;

  if (toggleButton && academicWrapper) {
    // Count hidden items for the button text
    const hiddenCount = hiddenCards.length;

    // Update button text with count
    toggleButton.textContent = `View All Academic Courses (${hiddenCount} more)`;

    toggleButton.addEventListener("click", function () {
      isExpanded = !isExpanded;

      // Toggle expanded class
      academicWrapper.classList.toggle("expanded", isExpanded);

      // Show/hide hidden cards with animation
      hiddenCards.forEach((card, index) => {
        if (isExpanded) {
          setTimeout(() => {
            card.style.display = "block";
          }, index * 100); // Stagger animation
        } else {
          card.style.display = "none";
        }
      });

      // Update button text
      toggleButton.textContent = isExpanded
        ? "Show Less Courses"
        : `View All Academic Courses (${hiddenCount} more)`;

      // Update hint text
      const hint = document.querySelector(".academic-hint span:last-child");
      if (hint) {
        hint.textContent = isExpanded
          ? "All courses are now visible"
          : "Click to explore all 12 courses";
      }

      // Scroll to maintain context
      if (!isExpanded) {
        setTimeout(() => {
          academicWrapper.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    });

    // Add intersection observer to show hint only when needed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isExpanded) {
            // Hint is already visible in this design
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(academicWrapper);
  }
});
