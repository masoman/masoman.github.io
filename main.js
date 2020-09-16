// Smooth Arrow and Wheel Scrolling

function arrowListen() {
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            smoothScroll('right');
        }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            smoothScroll('left');
        }
    });
}

function wheelListen() {
    window.addEventListener('wheel', (e) => {
        if (e.deltaY === 100 || e.deltaY === 150 || e.deltaX === 100 || e.deltaX === 150) {
            e.preventDefault();
            smoothScroll('right');
        }
        else if (e.deltaY === -100 || e.deltaY === -150 || e.deltaX === -100 || e.deltaX === -150) {
            e.preventDefault();
            smoothScroll('left');
        }
    }, {passive: false});
}

function smoothScroll(direction) {
    switch(direction) {
        case 'right':
            var distance = window.innerWidth;
            break;
        case 'left':
            var distance = -(window.innerWidth);
            break;
        default:
            break;
    }
    if (document.querySelector("#lightboxOverlay").style.display !== 'block') {
        document.querySelector('.outer-wrapper').scrollTop += distance;
    }
}

if ( $(window).width() > 650 || $(window).width() > $(window).height() ) {
    arrowListen();
    wheelListen();
}

// Instagram Icon

const instaicon = document.querySelector('#instaicon')

instaicon.addEventListener('mouseover', (e) => {
    document.querySelector('#instaicon').src = 'instaicon-red.png'
})

instaicon.addEventListener('mouseout', (e) => {
    document.querySelector('#instaicon').src = 'instaicon.png'
})

// Scroll Icon

const scrollicon = document.querySelector('#scrollicon')

scrollicon.addEventListener('mouseover', (e) => {
    document.querySelector('#scrollicon').src = 'scrollicon-red.png'
})

scrollicon.addEventListener('mouseout', (e) => {
    document.querySelector('#scrollicon').src = 'scrollicon.png'
})

// Mobile Header Icons

function mobileIcons() {
    if ( window.innerWidth <= 650) {
        console.log("small");
        document.getElementById("paintinglink").innerHTML = "";
        document.getElementById("infolink").innerHTML = '<img src="infoicon.png">';
        document.getElementById("shoplink").innerHTML = '<img src="shopicon.png">';
    }
    if ( window.innerWidth > 650) {
        document.getElementById("paintinglink").innerHTML = "Painting";
        document.getElementById("infolink").innerHTML = "Info";
        document.getElementById("shoplink").innerHTML = "Shop";
    }
}

mobileIcons()
$(window).resize(mobileIcons)
