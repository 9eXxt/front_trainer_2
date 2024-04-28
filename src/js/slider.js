const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    nav: false,
    responsive: {
        960: {
            autoplay: false
        }
    }
  });

// Get the dots container
const dotsContainer = document.querySelector('.carousel__dots');
const dots = Array.from(dotsContainer.children);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slider.goTo(i);
    });
});

slider.events.on('indexChanged', () => {
    const info = slider.getInfo();
    dots.forEach((dot, i) => {
        if (i === info.displayIndex - 1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});

document.querySelector(".prev").addEventListener("click", function() {
    slider.goTo("prev");
});
document.querySelector(".next").addEventListener("click", function() {
    slider.goTo("next");
});




