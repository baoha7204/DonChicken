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
/**
 * Insert items into the offer list
 */
function insertOfferItems(array, section) {
    const offerItemsHTML = array.map((item) =>{
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
    const offerList = $(section);
    offerList.innerHTML = offerItemsHTML.join('\n');
}

function switchOfferItems(){
    const catergories = $$('li.offer-catergory');
    const section = '.offers .offer-items';
    insertOfferItems(offers_gaNuong, section);
    catergories.forEach((catergory) =>{
        catergory.addEventListener('click', () =>{
            catergories.forEach((subCatergory) =>{
                subCatergory.classList.remove('active');
            })
            catergory.classList.add('active');
            if(catergory.classList.contains('category--gaNuong')){
                insertOfferItems(offers_gaNuong, section);
            } else if(catergory.classList.contains('category--khoaiTayChien')){
                insertOfferItems(offers_khoaiTayChien, section);
            }
        });
    });
    // Add automatic slide horizontally
    addAutoSlide('.offers');
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
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        if(scrollTop > 40){
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
function addAutoSlide(section){
    let slider = $(section + ' .offers-container__items .offer-items');
    let items = $$(section + ' .offers-container__items .offer-items .offer-item');
    let next = $(section + ' #next');
    let prev = $(section + ' #prev');
    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function(){
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }
    let refreshInterval = setInterval(()=> {next.click()}, 5000);
    function reloadSlider(){
        slider.style.left = -items[active].offsetLeft + 'px';
        clearInterval(refreshInterval);
        refreshInterval = setInterval(()=> {next.click()}, 5000);
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
    switchOfferItems();
}

myWebApp();