const carousels = {
    cougar_GUI: {
        images: [
            "images/cougars.jpg",
            "images/GUI_loading.jpg",
            "images/GUI_panel.jpg",
            "images/GUI_panel2.jpg"
        ],
        currentImage: 0
    },

    wands: {
        images: [
            "images/wandPCB1.jpg",
            "images/wandPCB2.jpg",
            "images/wands.jpg"
        ],
        currentImage: 0
    }
};


function changeImage(direction, project) {

    const carousel = carousels[project];

    carousel.currentImage += direction;

    if (carousel.currentImage < 0) {
        carousel.currentImage = carousel.images.length - 1;
    }

    if (carousel.currentImage >= carousel.images.length) {
        carousel.currentImage = 0;
    }

    // Change image
    document.getElementById(project + "-image").src =
        carousel.images[carousel.currentImage];

    // Change dots
    const carouselElement = document.getElementById(
        project === "cougar_GUI" ? "cougar-carousel" : "wand-carousel"
    );

    const dots = carouselElement.querySelectorAll(".carousel-indicators span");

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[carousel.currentImage].classList.add("active");
}