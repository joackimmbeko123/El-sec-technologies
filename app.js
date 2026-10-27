// Open and close the navigation menu on smaller screens.
const menu = document.querySelector('.menu');
const nav = document.querySelector('.links');
const drop = document.querySelector('.drop');
const serviceButton = drop.querySelector('button');

menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// The Services menu also opens on click and keyboard focus.
serviceButton.addEventListener('click', () => {
  const isOpen = drop.classList.toggle('open');
  serviceButton.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (event) => {
  if (!drop.contains(event.target)) {
    drop.classList.remove('open');
    serviceButton.setAttribute('aria-expanded', 'false');
  }
});

// Escape closes any open navigation.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    drop.classList.remove('open');
    nav.classList.remove('open');
    serviceButton.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');
  }
});
