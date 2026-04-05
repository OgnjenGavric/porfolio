/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function (resumeTabClick) {
   resumeTabContents.forEach((resumeTabContent) => {
      resumeTabContent.style.display = "none";
      resumeTabContent.classList.remove("active");
   });

   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
      resumePortfolioTabBtn.classList.remove("active");
   });

   resumeTabContents[resumeTabClick].style.display = "flex";

   setTimeout(() => {
      resumeTabContents[resumeTabClick].classList.add("active");
   }, 100);

   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
};

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
   resumePortfolioTabBtn.addEventListener("click", () => {
      resumeTabNav(i);
   });
});

/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
   const serviceCard = serviceCardWithModal.querySelector(".service-card");
   const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
   const serviceModal = serviceCardWithModal.querySelector(".service-modal");
   const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

   serviceCard.addEventListener("click", () => {
      serviceBackDrop.style.display = "flex";

      setTimeout(() => {
         serviceBackDrop.classList.add("active");
      }, 100);

      setTimeout(() => {
         serviceModal.classList.add("active");
      }, 300);
   });

   modalCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         serviceBackDrop.classList.remove("active");
         serviceModal.classList.remove("active");
      }, 100);
   });

});

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");
   const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
   const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

   portfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardsWithModals.forEach((cardWithModal) => {
            if (filter == "all" || cardWithModal.classList.contains(filter)) {
               cardWithModal.classList.remove("hidden");
               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = "0.5s ease";
               }, 1);
            } else {
               cardWithModal.classList.add("hidden");
               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = "0.5s ease";
               }, 1);
            };
         });
         // Add active class to the clicked tab buttons.
         portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
         tabBtn.classList.add("active");
      });
   });
});

// Open/Close Portfolio modals.
const portfolioCardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardWithModals.forEach((portfolioCardWithModal) => {
   const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
   const portfolioBackDrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
   const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
   const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

   portfolioCard.addEventListener("click", () => {
      portfolioBackDrop.style.display = "flex";

      setTimeout(() => {
         portfolioBackDrop.classList.add("active");
      }, 300);

      setTimeout(() => {
         portfolioModal.classList.add("active");
      }, 300);
   });

   modalCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
         portfolioBackDrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         portfolioBackDrop.classList.remove("active");
         portfolioModal.classList.remove("active");
      }, 300);
   });
});
/* =====================================================
   Testimonial Swiper
===================================================== */
const swiper = new Swiper('.sue-client-swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

/* ===================================================== 
   Send/Receive emails from contact form - Formspree
===================================================== */
const form = document.querySelector('.sue-contact-form');
const alertBox = document.querySelector('.contact-form-alert');

form.addEventListener('submit', async (e) => {
   e.preventDefault();
   const formData = new FormData(form);

   const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
   });

   if (response.ok) {
      alertBox.classList.add('active');
      form.reset();
   } else {
      alert('Oops! Something went wrong.');
   }
});



/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink", window.scrollY > 0);
});

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.scrollY;

   navMenuSections.forEach((navMenuSection) => {
      const sectionHeight = navMenuSection.offsetHeight;
      const sectionTop = navMenuSection.offsetTop - 50;
      const id = navMenuSection.getAttribute("id");

      if (id) {
         const navLink = document.querySelector(".bottom-nav .menu li a[href*=" + id + "]");
         if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
               navLink.classList.add("current");
            } else {
               navLink.classList.remove("current");
            };
         }
      }
   });
});

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom-nav");

   bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");
   menuShowBtn.classList.remove("active");

   if (window.scrollY < 10) {
      function scrollStopped() {
         bottomNav.classList.remove("active");
      }
      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }

   if (window.scrollY > 10) {
      menuHideBtn.classList.add("active");
      function scrollStopped() {
         bottomNav.classList.remove("active");
         menuShowBtn.classList.add("active");
      }
      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }
});

// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.toggle("active");
   menuShowBtn.classList.toggle("active");
});

// Show bottom navigation menu on click menu-show-btn.
menuShowBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.add("active");
   menuShowBtn.classList.toggle("active");
});

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */
window.addEventListener("scroll", () => {
   const toTopBtn = document.querySelector(".to-top-btn");

   toTopBtn.classList.toggle("active", window.scrollY > 0);

   // Scroll indicator bar
   const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");
   const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const scrollValue = (pageScroll / height) * 100;

   scrollIndicatorBar.style.height = scrollValue + "%";
});

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
   // Toggle dark and light theme
   themeBtn.classList.toggle("active-sun-icon");
   document.body.classList.toggle("light-theme");
   // Save current theme
   const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
   const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

   localStorage.setItem("portfolio-icon", getCurrentIcon());
   localStorage.setItem("portfolio-theme", getCurrentTheme());
});

// Get saved theme icon and theme on document loaded.
const savedIcon = localStorage.getItem("portfolio-icon");
const savedTheme = localStorage.getItem("portfolio-theme");

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
   document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});

/* =====================================================
   Page Transition
===================================================== */
const legacyLink = document.querySelector('.legacy-site-link');
const overlay = document.querySelector('.page-transition-overlay');

if (legacyLink && overlay) {
    legacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        const href = legacyLink.getAttribute('href');
        overlay.classList.add('active');
        
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Match CSS transition duration
    });
}

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.