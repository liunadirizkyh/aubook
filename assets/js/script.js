'use strict';



/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);



/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);


    // Function to convert all text to speech
        function speakAllText() {
            const paragraphs = document.querySelectorAll('.halaman p');
            const allText = Array.from(paragraphs).map(p => p.textContent).join(' ');
            speakText(allText);
        }

        // Function to convert text to speech
        function speakText(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }

        // Add event listeners to the chapters
        const chapters = document.querySelectorAll('.halaman h2');
        chapters.forEach((chapter) => {
            chapter.addEventListener('click', () => {
                const chapterText = chapter.nextElementSibling.textContent;
                speakText(chapterText);
            });
        });