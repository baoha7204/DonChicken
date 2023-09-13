const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// const footer = $('footer');

/**
 * Insert fontAwesome
 */
function insertFontAwesome() {
    const head = $('head');
    var script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/311807c634.js";
    script.crossOrigin = "anonymous";
    head.append(script);
}

/**
 * Add active dropdown to tool--nation
 */
function addActiveDropdownToolNation() {
    const nation = $('.tool--nation');
    document.addEventListener('click', (e) => {
        if (e.target.closest('.tool--nation') && !nation.classList.contains('active')) {
            nation.classList.add('active');
        }
        else if (!e.target.closest('.tool--nation .menu__dropdown')) {
            nation.classList.remove('active');
        }
    });
}

/**
 * Add active dropdown to tool--login
 */
function addActiveDropdownToolLogin() {
    const login = $('.tool--login');
    login.addEventListener('click', () => {
        login.classList.toggle('active');
    });
}

/**
 * Add active dropdown to header-container__items in mobile
 */
function addActiveDropdownMobileItems() {
    window.onresize = () => {
        if (window.matchMedia("(max-width: 991px)").matches) {
            const span = $('.header-container__items .dropdown span');
            let spanHeight = span.offsetHeight;

            let dropdownItems = $$('.header-container__items .dropdown');
            dropdownItems.forEach((dropdownItem) => {
                dropdownItem.addEventListener('click', () => {
                    dropdownItem.classList.toggle('active');
                });
                dropdownItem.style.setProperty('--span-height', `${spanHeight}px`);
            });
        }
    };
}

/**
 * Detect scrolling to turn into sticky header
 */
function scrollingHeader() {
    document.onscroll = () => {
        const header = $('header');
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        if(scrollTop > 40){
            header.classList.add('header--scrolling');
        } else{
            header.classList.remove('header--scrolling');
        }
    }
}

function myWebApp() {
    // fontAwesome
    insertFontAwesome();
    // Add active dropdown to tool--nation
    addActiveDropdownToolNation();
    // Add active dropdown to tool--login
    addActiveDropdownToolLogin();
    // Add active dropdown to header-container__items in mobile
    addActiveDropdownMobileItems();
    // Detect scrolling to turn into sticky header
    scrollingHeader();
}

myWebApp();