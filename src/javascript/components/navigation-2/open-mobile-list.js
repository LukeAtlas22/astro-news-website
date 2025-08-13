function checkHamburgerCheckbox(){
  document.getElementById('hamburger-menu-checkbox').checked = true;
}

function uncheckHamburgerCheckbox(){
  document.getElementById('hamburger-menu-checkbox').checked = false;
}

export function openMobileList(){
  checkHamburgerCheckbox();
}

export function closeMobileList(){
  console.log('Closing');
  uncheckHamburgerCheckbox();
}