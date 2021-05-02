const mainNav = document.getElementById('sidebar');
const openSideNav = document.getElementById('open-sidenav');
const overlay = document.getElementById('overlay');

// Open sidenav
openSideNav.addEventListener('click', function () {
    mainNav.classList.add('active');
    displayOverlay();

    // Close sidenav by click on overlay
    overlay.addEventListener('click', function () {
        mainNav.classList.remove('active');
        hideOverlay();
    });
});

function displayOverlay() {
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = 'hidden'; // disables scroll
    document.body.style.height = '100%';
    document.body.style.margin = '0';
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = 'initial'; // enables scroll
}