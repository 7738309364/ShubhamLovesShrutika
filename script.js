function goTo(page) {
    window.location.href = page;
}

// For mobile + desktop
function moveNoButton() {
    const btn = document.getElementById("noBtn");

    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = "fixed";
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

// Extra safety: disable click
function disableNoClick() {
    const btn = document.getElementById("noBtn");
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        moveNoButton();
    });
}
