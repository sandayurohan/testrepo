// Get the menu icon and mobile menu elements
const menuIcon = document.querySelector('#menu-icon');
const mobileMenu = document.querySelector('#mobile-menu');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', function() {
    // Toggle the sidemenu-on and sidemenu-off classes on the mobile menu element
    mobileMenu.classList.toggle('sidemenu-on');
    mobileMenu.classList.toggle('sidemenu-off');

    // Toggle the display style on the mobile menu element
    if (mobileMenu.classList.contains('sidemenu-on')) {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});