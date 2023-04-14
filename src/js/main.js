document.addEventListener('DOMContentLoaded', function () {
    //открытие списка в селекте в форме

    function showSelectionsList () {
        const input = document.querySelector('.order-form-selection'),
        list = document.querySelector('.select-list');

        if (input) {
            input.addEventListener('click', function () {
                list.classList.toggle('select-list--active');
                input.closest('.order-form-select').classList.toggle('rotate-arrow');
            });

            function closeSelectByEmptySpace() {
                // закрытие по клику на пустом месте
                document.addEventListener( 'click', (e) => {
                    if (list.classList.contains('select-list--active')) {
                        const withinSelectWrap = e.composedPath().includes(list);
                        const withinSelectInput = e.composedPath().includes(input);
        
                        if (!withinSelectWrap && !withinSelectInput) {
                            toggleFilterSelectList();
                            input.closest('.order-form-select').classList.remove('rotate-arrow');
                        }
                    }
                });
            };

            function toggleFilterSelectList() {
                list.classList.toggle('select-list--active');
            };
            
            closeSelectByEmptySpace();
        };   
    }

    showSelectionsList();

    //подсчет процентов

    const getValueInpR = () => {
        let perValue = document.getElementById('percent'),
        printPerValue = document.querySelector('.percent-input-value');
        printPerValue.innerText = `${perValue.value}%`;
    }

    percent.addEventListener('input', getValueInpR);
    window.onunload = () => percent.removeEventListener('input', getValueInpR);

    //фиксация меню при скролле

    const fixedBar = document.querySelector('.header-menu');

    const toggleBar = function () {
    let isShown = window.pageYOffset > window.innerHeight / 2;
        fixedBar.classList.toggle('isShown', isShown);
    }

    toggleBar();
    window.addEventListener('scroll', toggleBar);

    //открытие меню в мобилке

    function openMenu () {
        const menuButton = document.querySelector('.burger-menu'),
        menu = document.querySelector('.header-menu-nav');

        menuButton.addEventListener('click', function () {
            menu.classList.toggle('header-menu-nav--active');
        })
    }

    openMenu();

})