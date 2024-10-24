import { createMainPage } from '../src/home.js';
import { createAboutUsPage } from '../src/aboutus.js';
import { createMenuPage } from '../src/menu.js';
import { createContactPage } from '../src/contact.js';

const content = document.getElementById('content');

function loadPage(importedFunction) {
  if (content.firstChild) {
    content.innerHTML = '';
  }
  content.appendChild(importedFunction());
  
  // Remove all page-specific classes
  document.body.classList.remove('page-home', 'page-about', 'page-menu', 'page-contact');
  
  // Add the new page-specific class
  if (importedFunction === createMainPage) {
    document.body.classList.add('page-home');
  } else if (importedFunction === createAboutUsPage) {
    document.body.classList.add('page-about');
  } else if (importedFunction === createMenuPage) {
    document.body.classList.add('page-menu');
  } else if (importedFunction === createContactPage) {
    document.body.classList.add('page-contact');
  }
}

document.getElementById('home-btn').addEventListener('click', () => loadPage(createMainPage));
document.getElementById('aboutus-btn').addEventListener('click', () => loadPage(createAboutUsPage));
document.getElementById('menu-btn').addEventListener('click', () => loadPage(createMenuPage));
document.getElementById('contact-btn').addEventListener('click', () => loadPage(createContactPage));

// load the main page
loadPage(createMainPage);