// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    // Validate that variables exist
    if(toggle && nav) {
        // We add the show-menu class to the div tag with
        // the nav__menu class
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        let sectionId = current.getAttribute(id)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the
    // scroll-header class to the header tag
    if(this.scrollY >= 200) 
        nav.classList.add('scroll-header') 
    else
        nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// SHOW SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    // When the scroll is higher than 560 viewport height, add the
    // show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) 
        scrollTop.classList.add('scroll-top') 
    else
        scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)