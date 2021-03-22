
//Burger

const burgerBtn = document.querySelector('.burger__btn'),
  menu = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.classList.toggle('lock');
});

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    menu.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.classList.remove('lock');
  }

});

// End Burger

// search

const search = document.querySelector('.search__box');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.add('search__box_active');
});

body.addEventListener('click', function () {
  search.classList.remove('search__box_active');
});

//  End search


//  popup
const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
const lockPadding = document.querySelector('.lock-padding');

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});


(function () {
  // провіряємо підтримку
  if (!Element.prototype.closest) {
    // реалізуємо
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function () {
  // провіряємо підтримку
  if (!Element.prototype.matches) {
    // оприділяємо властивість
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.mstMatchesSelector;

  }
})();

//  End popup
