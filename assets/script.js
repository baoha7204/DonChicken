const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const header = $('header');
// const footer = $('footer');
const head = $('head');

/**
 * Insert fontAwesome
 */
function insertFontAwesome(){
    var script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/311807c634.js";
    script.crossOrigin = "anonymous";
    head.append(script);
}

function myWebApp(){
    // fontAwesome
    insertFontAwesome();
}

myWebApp();