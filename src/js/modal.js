const overlay = document.querySelector('.overlay');
const form = document.querySelector('.feed-form');
const consultationModal = document.querySelector('#consultation');
const orderModal = document.querySelector('#order');
const gratitudeModal = document.querySelector('#gratitude');

const consultationButton = document.querySelector('.button_main');
consultationButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    consultationModal.style.display = 'block';
});

const consultationThnaksButton = consultationModal.querySelector('.button_submit');
consultationThnaksButton.addEventListener('click', (e) => {
    if (!form.checkValidity()) {
        // If the form is invalid, let the default form submission behavior occur
        return;
    }
    e.preventDefault();
    overlay.style.display = 'block';
    consultationModal.style.display = 'none';
    gratitudeModal.style.display = 'block';
});

const orderButtons = document.querySelectorAll('.button_mini');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', () => {
        overlay.style.display = 'block';
    orderModal.style.display = 'block';
    });
});

const thanksButton = document.querySelector('.button_submit');
thanksButton.addEventListener('click', (e) => {
    if (!form.checkValidity()) {
        // If the form is invalid, let the default form submission behavior occur
        return;
    }
    e.preventDefault();
    overlay.style.display = 'block';
    gratitudeModal.style.display = 'block';
});

overlay.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close')) {
        overlay.style.display = 'none';
        event.target.closest('.modal').style.display = 'none';
    }
});
