const topHeader = document.querySelector('.top-header');
const aside = document.querySelector('aside');
const elements = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const mobileMenuWrapper = document.querySelector('.menu-wrapper');
const managerStatus = document.querySelector('.manager-status');
const loginButton = document.querySelector('.login-modal');


document.getElementById(menuSelected).classList.add('menu-active');

function toggleMenu(visible) {
function toggleClasses(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('section-show-menu', visible);
  }
}
    mobileMenuWrapper.classList.toggle('menu-wrapper-toggle', visible);
    topHeader.classList.toggle('top-header-show-menu', visible);
    managerStatus.classList.toggle('status-md', visible);
    managerStatus.classList.toggle('status-sm', visible);
    toggleClasses(elements);
 }

 hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    
});

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}

loginButton.addEventListener('click', function(e) {
  openModal('#loginModal'); 
});








 
