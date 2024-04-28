document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll('.catalog__tab');
    var contents = document.querySelectorAll('.catalog__content');

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            // Удаляем класс активной вкладки и контента
            document.querySelector('.catalog__tab_active').classList.remove('catalog__tab_active');
            document.querySelector('.catalog__content_active').classList.remove('catalog__content_active');
            
            // Добавляем класс активности только для нажатой вкладки и соответствующего контента
            this.classList.add('catalog__tab_active');
            contents[index].classList.add('catalog__content_active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const catalogItems = document.querySelectorAll('.catalog-item');

    // Добавляем обработчики для каждого элемента .catalog-item
    catalogItems.forEach(function(catalogItem) {
        const content = catalogItem.querySelector('.catalog-item__content');
        const list = catalogItem.querySelector('.catalog-item__list');
        const detailLink = catalogItem.querySelector('.catalog-item__link');
        const backButton = catalogItem.querySelector('.catalog-item__back');

        // Обработчик клика на ссылку "ПОДРОБНЕЕ"
        detailLink.addEventListener('click', function(event) {
            event.preventDefault();
            list.classList.add('catalog-item__list_active');
            content.classList.remove('catalog-item__content_active');
        });

        // Обработчик клика на кнопку "НАЗАД"
        backButton.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.add('catalog-item__content_active');
            list.classList.remove('catalog-item__list_active');
            // Добавьте плавную анимацию здесь, если требуется
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll('.catalog__content');

    function updateContainerLayout() {
        containers.forEach(function(container) {
            var items = container.querySelectorAll('.catalog-item');

            if (items.length === 1) {
                container.classList.remove('space-around-justify', 'space-between-justify');
                container.classList.add('center-justify');
            } else if (items.length === 2) {
                container.classList.remove('center-justify', 'space-between-justify');
                container.classList.add('space-around-justify');
            } else {
                container.classList.remove('center-justify', 'space-around-justify');
                container.classList.add('space-between-justify');
            }
        });
    }

    updateContainerLayout(); // вызываем функцию сразу, чтобы установить начальное расположение

    // Периодически обновляем расположение контейнера при изменении размера экрана или других изменениях
    window.addEventListener('resize', updateContainerLayout);
});