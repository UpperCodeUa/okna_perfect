var openMenu = document.querySelector('.open-menu-btn');
var menu = document.querySelector('.nav');

// function setSubmenuTop() {
//     var headerHeight = document.querySelector('header').offsetHeight;
//     document.querySelector('.submenu-wrapper').style.top = headerHeight + 'px';
// }

function toggleMenu() {
    menu.classList.toggle('active');
    openMenu.classList.toggle('active');

    // if (window.innerWidth < 671) {
    //     setSubmenuTop();

        // window.addEventListener('resize', function () {
        //     if (window.innerWidth < 670) {
        //         setSubmenuTop();
        //     } else {
        //         document.querySelector('.submenu-wrapper').style.top = '';
        //     }
        // });
    // }
    
    
}

openMenu.addEventListener('click', function(event) {
    toggleMenu();
    event.stopPropagation(); // Зупиняє подальше поширення події
});

// Додаємо подію click до document для закриття меню при кліку за межами
document.addEventListener('click', function(event) {
    var isClickInsideMenu = menu.contains(event.target);

    if (!isClickInsideMenu && menu.classList.contains('active')) {
        toggleMenu();
    }
});

//===============переключалка========================

// var titleElements = document.querySelectorAll('.title');
// var submenuItems = document.querySelectorAll('.submenu-item');

// titleElements.forEach(function (titleElement, index) {
//     titleElement.addEventListener('click', function () {
//         titleElements.forEach(function (element) {
//             element.classList.remove('active');
//         });

//         titleElement.classList.add('active');

//         submenuItems.forEach(function (item) {
//             item.style.display = 'none';
//         });

//         submenuItems[index].style.display = 'block';
//     });
// });

function handleSubMenuClick(titleClass, submenuClass) {
    var titleElements = document.querySelectorAll('.' + titleClass);
    var submenuItems = document.querySelectorAll('.' + submenuClass);

    titleElements.forEach(function (titleElement, index) {
        titleElement.addEventListener('click', function () {
            titleElements.forEach(function (element) {
                element.classList.remove('active');
            });

            titleElement.classList.add('active');

            submenuItems.forEach(function (item) {
                item.style.display = 'none';
            });

            submenuItems[index].style.display = 'flex';
        });
    });
}

handleSubMenuClick('first-title', 'first-sub-menu-item');
handleSubMenuClick('second-title', 'second-sub-menu-item');
handleSubMenuClick('third-title', 'third-sub-menu-item');




//================================================

// var mobileSubMenuBtn = document.querySelector('.sub-link');
// var mobileSubMenuLink = document.querySelector('.open-mobile');
// var mobileSubMenu = document.querySelector('.submenu-wrapper');

// mobileSubMenuLink.addEventListener('click', function() {
//     if (window.innerWidth < 671) {
//         mobileSubMenu.classList.toggle('active');
//         mobileSubMenuBtn.classList.toggle('active');
//     }
    
// })



// function setSubmenuTop() {
//     var headerHeight = document.querySelector('header').offsetHeight;

//     document.querySelector('.submenu-wrapper').style.top = headerHeight + 'px';
// }

// window.onload = function () {
//     if (window.innerWidth < 671) {
//         setSubmenuTop();

//         window.addEventListener('resize', function () {
//             document.querySelector('.submenu-wrapper').style.top = '';
//             if (window.innerWidth < 671) {
//                 setSubmenuTop();
//             } else {
//                 document.querySelector('.submenu-wrapper').style.top = '';
//             }
//         });
//     }
// };

//========= darkening of the page when hovering over .sublink ===============

const subLinks = document.querySelectorAll('.sub-link');
const darken = document.querySelector('.darken');

subLinks.forEach(subLink => {
    subLink.addEventListener('mouseenter', function () {
        darken.style.display = 'block';
    });

    subLink.addEventListener('mouseleave', function () {
        darken.style.display = 'none';
    });
});

//========= add doors-menu on pvcglass_doors_path ===============

document.addEventListener('click', function (event) {
    var submenuWrapper = document.querySelector('.doors-menu');
    var targetElement = event.target;

    if (!submenuWrapper.contains(targetElement)) {
        submenuWrapper.style.removeProperty('display');
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     var arrow = document.querySelector('.arrow-left');
//     var arrowReverse = document.querySelector('.arrow-reverce');
//     var navMenu = document.querySelector('.nav-menu');

//     arrow.addEventListener('click', function (event) {
//         event.preventDefault();
//         var startPosition = navMenu.scrollLeft;
//         var scrollAmount = -startPosition; 
//         smoothScroll(navMenu, scrollAmount);
//     });

//     arrowReverse.addEventListener('click', function (event) {
//         event.preventDefault();
//         var scrollAmount = 100; 
//         smoothScroll(navMenu, scrollAmount);
//     });

//     function smoothScroll(element, scrollAmount) {
//         var start = element.scrollLeft;
//         var currentTime = 0;
//         var increment = 20; 

//         function animateScroll() {
//             currentTime += increment;
//             var val = Math.easeInOutQuad(currentTime, start, scrollAmount, 500); // тривалість анімації
//             element.scrollLeft = val;
//             if (currentTime < 500) {
//                 requestAnimationFrame(animateScroll);
//             }
//         }
//         animateScroll();
//     }

//     Math.easeInOutQuad = function (t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     };
// });
