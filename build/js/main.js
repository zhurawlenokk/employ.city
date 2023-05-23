document.addEventListener('DOMContentLoaded', function() {
    //открытие списка в селекте в форме
    function showSelectionsList() {
        var input = document.querySelector('.order__form-selection'),
            list = document.querySelector('.select-list');

        if (input) {
            var closeSelectByEmptySpace = function closeSelectByEmptySpace() {
                // закрытие по клику на пустом месте
                document.addEventListener('click', function(e) {
                    if (list.classList.contains('select-list--active')) {
                        var withinSelectWrap = e.composedPath().includes(list);
                        var withinSelectInput = e.composedPath().includes(input);

                        if (!withinSelectWrap && !withinSelectInput) {
                            toggleFilterSelectList();
                            input.closest('.order__form-select').classList.remove('rotate-arrow');
                        }
                    }
                });
            };

            var toggleFilterSelectList = function toggleFilterSelectList() {
                list.classList.toggle('select-list--active');
            };

            input.addEventListener('click', function() {
                list.classList.toggle('select-list--active');
                input.closest('.order__form-select').classList.toggle('rotate-arrow');
            });
            closeSelectByEmptySpace();
        };
    }

    showSelectionsList(); //подсчет процентов

    var getValueInpR = function getValueInpR() {
        var perValue = document.getElementById('percent'),
            printPerValue = document.querySelector('.percent-input-value');
        printPerValue.innerText = "".concat(perValue.value, "%");
    };

    percent.addEventListener('input', getValueInpR);

    window.onunload = function() {
        return percent.removeEventListener('input', getValueInpR);
    }; //фиксация меню при скролле


    var fixedBar = document.querySelector('.header__menu');

    var toggleBar = function toggleBar() {
        var isShown = window.pageYOffset > window.innerHeight / 2;
        fixedBar.classList.toggle('isShown', isShown);
    };

    toggleBar();
    window.addEventListener('scroll', toggleBar); //открытие меню в мобилке

    function openMenu() {
        var menuButton = document.querySelector('.burger-menu'),
            menu = document.querySelector('.header__nav');
        menuButton.addEventListener('click', function() {
            menu.classList.toggle('header__nav--active');
        });
    }

    openMenu();
});