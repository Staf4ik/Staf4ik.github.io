$(document).ready(function (){
    $('.slider').slick({
        // включение / отключение стрелок . true / false
        arrows: true,
        // Сколько слайдов будет отображаться
        slidesToShow: 6,
        // скорость пролистывания
        speed: 300,
        // бесконечное пролистывание
        infinite: false,
        // скорость смены слайдов. по дефолту 3000 - это 3 секунды
        autoplaySpeed: 5000,
        // чтобы нельзя было перетаскивать слайды мышкой, но на телефоне работало
        draggable: true,
        // чтобы нельзя было свайпать и на телефоне и на компе
        swipe: true,
        //на сколько нужно будет протащить экран, чтобы сменился слайд. чем больше значение тем меньше. чем меньше значение тем больше надо протащить.
        touchThreshold: 10,
        // отключение возможности двигать слайд. ненужная хрень. Просто картинка вообще не будет двигаться если будет false
        touchMove: true,
        // возможность листать слайды далее далее без задержки и ожидания анимации
        waitForAnimate: false,
        // просматриваемый слайд встает по центру. и появляется новый класс .slick-center
        centerMode: false,
        // работает как медиа запрос,
        responsive:[
            {
                // на ширине 720px изменить значения
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                }
            },{
                // на ширине 600px изменить значения
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },{
                // на ширине 520px изменить значения
                breakpoint: 520,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            }
        ],
        // при включении размер будет идти от маленького к большому. 300, 320, 540, 740, 960 и тд. или по другому: поменяет с max-width на min-width
        mobileFirst: false
    });

    $('.goods-slider').slick({
        // включение / отключение стрелок . true / false
        arrows: true,
        // Сколько слайдов будет отображаться
        slidesToShow: 6,
        // бесконечное пролистывание
        infinite: false,
        // скорость пролистывания
        speed: 300,
        // скорость смены слайдов. по дефолту 3000 - это 3 секунды
        autoplaySpeed: 5000,
        // чтобы нельзя было перетаскивать слайды мышкой, но на телефоне работало
        draggable: true,
        // чтобы нельзя было свайпать и на телефоне и на компе
        swipe: true,
        //на сколько нужно будет протащить экран, чтобы сменился слайд. чем больше значение тем меньше. чем меньше значение тем больше надо протащить.
        touchThreshold: 10,
        // отключение возможности двигать слайд. ненужная хрень. Просто картинка вообще не будет двигаться если будет false
        touchMove: true,
        // возможность листать слайды далее далее без задержки и ожидания анимации
        waitForAnimate: false,
        // просматриваемый слайд встает по центру. и появляется новый класс .slick-center
        centerMode: false,
        // работает как медиа запрос,
        responsive:[
            {
                // на ширине 720px изменить значения
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                }
            },{
                // на ширине 520px изменить значения
                breakpoint: 520,
                settings: "unslick"
            }
        ],
        // при включении размер будет идти от маленького к большому. 300, 320, 540, 740, 960 и тд. или по другому: поменяет с max-width на min-width
        mobileFirst: false
    });
    

    $('.banner-slider').slick({
        arrows: false,
        // ТОЧКИ
        dots: true,
        centerMode: false,
        slidesToShow: 1,
        // слайды не листаются а заменяются. используются только когда один главный слайд
        fade: false,
        
    });
});