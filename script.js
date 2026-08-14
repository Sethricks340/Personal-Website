const images = [
    "images/cougars.jpg",
    "images/GUI_loading.jpg",
    "images/GUI_panel.jpg",
    "images/GUI_panel2.jpg"
];

let currentImage = 0;

function changeImage(direction) {

    currentImage += direction;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("carousel-image").src = images[currentImage];

    const dots = document.querySelectorAll(".carousel-indicators span");

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentImage].classList.add("active");
}