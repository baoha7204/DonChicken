const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// offers data
const offers_gaNuong = [
    {
        id: 1,
        offer_name: 'Gà Hallamayo không xương (M)',
        offer_image: './assets/img/offers/hala_kx_5.jpg',
        offer_price: '185.000'
    },
    {
        id: 2,
        offer_name: 'Gà nướng cay (M)',
        offer_image: './assets/img/offers/ganuongcay.jpg',
        offer_price: '169.000'
    },
    {
        id: 3,
        offer_name: 'Gà nướng tỏi (M)',
        offer_image: './assets/img/offers/ganuongtoi.jpg',
        offer_price: '169.000'
    },
    {
        id: 4,
        offer_name: 'Cánh gà nướng',
        offer_image: './assets/img/offers/canhganuong.jpg',
        offer_price: '159.000'
    }
];

const offers_khoaiTayChien = [
    {
        id: 1,
        offer_name: 'Khoai tây chiên',
        offer_image: './assets/img/offers/khoaitaychien_kovi.jpg',
        offer_price: '69.000'
    },
    {
        id: 2,
        offer_name: 'Khoai tây chiên mật ong',
        offer_image: './assets/img/offers/khoaitaychien_matong_hanh_cari.jpg',
        offer_price: '79.000'
    }
];

const newOffers = [
    {
        id: 1,
        offer_name: 'Gà nướng (L)',
        offer_image: './assets/img/new_offers/1.jpg',
        offer_price: '269.000'
    },
    {
        id: 2,
        offer_name: 'Gà rán không xương (L)',
        offer_image: './assets/img/new_offers/2.jpg',
        offer_price: '319.000'
    },
    {
        id: 3,
        offer_name: 'Gà rán sốt tương (L)',
        offer_image: './assets/img/new_offers/3.jpg',
        offer_price: '319.000'
    },
    {
        id: 4,
        offer_name: 'Gà rán sốt cay (L)',
        offer_image: './assets/img/new_offers/4.jpg',
        offer_price: '319.000'
    },
    {
        id: 5,
        offer_name: 'Gà rán (L)',
        offer_image: './assets/img/new_offers/5.jpg',
        offer_price: '309.000'
    },
    {
        id: 6,
        offer_name: 'Gà rán Sốt Ngọt (L)',
        offer_image: './assets/img/new_offers/6.jpg',
        offer_price: '319.000'
    },
    {
        id: 7,
        offer_name: 'Gà Phô Mai Tuyết (L)',
        offer_image: './assets/img/new_offers/7.jpg',
        offer_price: '319.000'
    },
    {
        id: 8,
        offer_name: 'Gà Hallamayo không xương (L)',
        offer_image: './assets/img/new_offers/8.jpg',
        offer_price: '340.000'
    },
    {
        id: 9,
        offer_name: 'Gà Hallamayo có xương (L)',
        offer_image: './assets/img/new_offers/9.jpg',
        offer_price: '330.000'
    },
    {
        id: 10,
        offer_name: 'Gà nướng Teriyaki (L)',
        offer_image: './assets/img/new_offers/10.jpg',
        offer_price: '299.000'
    }
];
/**
 * Insert items into the offer list
 */
function insertOfferItems(array, section) {
    let offerItemsHTML = array.map((item) =>{
        return `<div class="offer-item">
        <img class="offer-item__image" src="${item.offer_image}" width="270" height="270" alt="${item.offer_name})"></img>
        <div class="offer-item__detail">
            <h2 class="detail__name">${item.offer_name}</h2>
            <div class="detail__price">
                <span class="price">${item.offer_price}&nbsp;<span class="price__unit">đ</span></span>
            </div>
            <button type="submit" title="Thêm vào giỏ hàng"><i class="fa-regular fa-clipboard"></i><span>Thêm vào giỏ hàng</span></button>
        </div>
    </div>`;
    });
    let offerList = $(section + ' .offer-items');
    offerList.innerHTML = offerItemsHTML.join('\n');
    addAutoSlide(section);
}

/**
 * Add buttons into the offer container
 */
function addButtonToOfferContainer() {
    // add buttons
    let prev = document.createElement('button');
    let prevNode = document.createTextNode("⬅");
    prev.appendChild(prevNode);
    prev.setAttribute('id', 'prev');

    let next = document.createElement('button');
    let nextNode = document.createTextNode("➡");
    next.appendChild(nextNode);
    next.setAttribute('id', 'next');

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.append(prev);
    buttons.append(next);
    const offer_containers = $$('.offers__container');
    offer_containers.forEach((offer_container) => {
        offer_container.append(buttons);
    });
}

function switchOfferItems(){
    const catergories = $$('li.offer-catergory');
    const section = '.offers';
    insertOfferItems(offers_gaNuong, section);
    catergories.forEach((catergory, index) =>{
        catergory.addEventListener('click', () =>{
            if(!catergory.classList.contains('active')){
                let otherIndex = (index == 0) ? 1: 0;
                catergories[otherIndex].classList.remove('active');
                catergory.classList.add('active');
                if(catergory.classList.contains('category--gaNuong')){
                    insertOfferItems(offers_gaNuong, section);
                } else if(catergory.classList.contains('category--khoaiTayChien')){
                    insertOfferItems(offers_khoaiTayChien, section);
                }
            }
        });
    });
}
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
}

/**
 * Detect scrolling to turn into sticky header
 */
function scrollingHeader() {
    document.onscroll = () => {
        const header = $('header');
        let logo = 0;
        if (window.matchMedia("(min-width: 320px) and (max-width: 568px)").matches || window.matchMedia("(min-width: 992px) and (max-width: 1268px)").matches) {
            let header_logo = $('.header-container__logo');
            logo = header_logo.offsetHeight;
        }
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var dist = scrollTop - logo;
        if(dist > 40){
            header.classList.add('header--scrolling');
        } else{
            header.classList.remove('header--scrolling');
        }
    }
}

/**
 * Add click event for scrollbar
 */
function addActiveScrollbar() {
    const scrollbar = $('section.scrollbar');
    document.addEventListener('click', (e) => {
        if (e.target.closest('section.scrollbar .toggle-button') && !scrollbar.classList.contains('active')) {
            scrollbar.classList.add('active');
        }
        else if (!e.target.closest('.scrollbar-container__panel')) {
            scrollbar.classList.remove('active');
        }
    });
}
/**
 * Add automatic slide horizontally to offers
 */
var activeOffers = 0;
function addAutoSlide(section){
    if(window.matchMedia("(max-width: 768px)").matches){
        let slider = $(section + ' .offers-container__items .offer-items');
        let items = $$(section + ' .offers-container__items .offer-items .offer-item');
        var nextBtn = $(section + ' #next');
        var prevBtn = $(section + ' #prev');
        let lengthItems = items.length - 1;
        activeOffers = 0;
        slider.style.left = 0;
        nextBtn.onclick = function(){
            activeOffers = activeOffers + 1 <= lengthItems ? activeOffers + 1 : 0;
            reloadSlider();
        }
        prevBtn.onclick = function(){
            activeOffers = activeOffers - 1 >= 0 ? activeOffers - 1 : lengthItems;
            reloadSlider();
        }
        let refreshInterval = setInterval(()=> {nextBtn.click()}, 5000);
        function reloadSlider(){
            slider.style.left = -items[activeOffers].offsetLeft + 'px';
            clearInterval(refreshInterval);
            refreshInterval = setInterval(()=> {nextBtn.click()}, 5000);
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
    window.onresize = () => {
        addActiveDropdownMobileItems();
    }
    // Detect scrolling to turn into sticky header
    scrollingHeader();
    // Add click event for scrollbar
    addActiveScrollbar();
    // addButtonToOfferContainer();
    switchOfferItems();
    insertOfferItems(newOffers, '.new-offers');
}

myWebApp();