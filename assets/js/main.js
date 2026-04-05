/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('portfolio-theme')
const selectedIcon = localStorage.getItem('portfolio-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('portfolio-theme', getCurrentTheme())
    localStorage.setItem('portfolio-icon', getCurrentIcon())
})

/*=============== PAGE TRANSITION ===============*/
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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 200,
})

sr.reveal(`.profile__header`, {delay: 300})
sr.reveal(`.nes-container.is-dark`, {delay: 400})
sr.reveal(`.profile__data`, {delay: 500})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 600})
sr.reveal(`.profile__buttons`, {delay: 700})
sr.reveal(`.filters__content`, {delay: 800})
sr.reveal(`.filters`, {delay: 900})

/*=============== CONTACT FORM AJAX ===============*/
const contactForm = document.getElementById('contact-form')
const successDialog = document.getElementById('success-dialog')

if (contactForm && successDialog) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const formData = new FormData(contactForm)
        
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                successDialog.showModal()
                contactForm.reset()
            } else {
                alert('Oops! There was a problem submitting your form')
            }
        })
        .catch(error => {
            alert('Oops! There was a problem submitting your form')
        })
    })
}