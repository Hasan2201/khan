function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    loop: false,
    showCursor: false
});
