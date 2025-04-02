document.documentElement.style.setProperty('--scrollbar-thumb', '#bebebe'); // change thumb's color
document.documentElement.style.setProperty('--scrollbar-track', '#333'); // change track's color


const filmContainer = document.querySelector('.film');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

// Mulai dengan next terlihat
btnNext.classList.add('show');

function scrollKiri() {
    filmContainer.scrollBy({ left: -1560, behavior: 'smooth' });
    setTimeout(toggleButtons, 500);  // Biar efek scroll dulu baru toggle
}

function scrollRight() {
    filmContainer.scrollBy({ left: 1560, behavior: 'smooth' });
    setTimeout(toggleButtons, 500);  // Biar efek scroll dulu baru toggle
}

function toggleButtons() {
    if (btnPrev.classList.contains('show')) {
        btnPrev.classList.remove('show');
        btnNext.classList.add('show');
    } else {
        btnPrev.classList.add('show');
        btnNext.classList.remove('show');
    }
}

// Function Click Asked
function toggleAsked(id) {
    let content = document.getElementById("asked-content-" + id);
    let imgAsked = document.querySelector("#asked-" + id + " .asked-img");

    if (content.classList.contains("active")) {
        content.classList.remove("active");
        imgAsked.classList.remove("rotate");
    } else {
        content.classList.add("active");
        imgAsked.classList.add("rotate");
    }
}

// to show div with class ".take-action-filmContainer" (popup)
document.addEventListener("DOMContentLoaded", function () {
    const filmItems = document.querySelectorAll(".film-item");
    const popup = document.querySelector(".take-action-filmContainer");
    const overlay = document.querySelector(".overlay");

    // to show the popup and the overlay
    function showPopup() {
        popup.classList.add("show");
        overlay.classList.add("show");
    }

    // to hide the popup and the overlay
    function hidePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }

    // Event listener for every film-item's class
    filmItems.forEach(item => {
        item.addEventListener("click", showPopup);
    });

    // close the popup if overlay clicked
    overlay.addEventListener("click", hidePopup);
});

// to close the popup
document.addEventListener("DOMContentLoaded", function () {
    const filmItems = document.querySelectorAll(".film-item");
    const popup = document.querySelector(".take-action-filmContainer");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".close_2");

    // to show the popup
    function showPopup() {
        popup.classList.add("show");
        overlay.classList.add("show");
    }

    // to hide the popup
    function hidePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }

    // Event listener for every film-item's class so that the popup show
    filmItems.forEach(item => {
        item.addEventListener("click", showPopup);
    });

    // Event listener for close button
    closeBtn.addEventListener("click", hidePopup);

    // close the popup if overlay clicked
    overlay.addEventListener("click", hidePopup);
});







