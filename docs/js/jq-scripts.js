
    $(document).ready(function () {
        if ($(window).width() < '1024'){
            $(".expositions__filters-title").click(function (event) {
                $(".expositions__filters-title").not($(this)).removeClass("active");
                $(".expositions__filters-block").not($(this).next()).slideUp(300);
                $(this).toggleClass("active").next().slideToggle(300);
            });

            $(".collections__filters-title").click(function (event) {
                $(".collections__filters-title").not($(this)).removeClass("active");
                $(".collections__filters-block").not($(this).next()).slideUp(300);
                $(this).toggleClass("active").next().slideToggle(300);
            });

            $(".excursions__filters-title").click(function (event) {
                $(".excursions__filters-title").not($(this)).removeClass("active");
                $(".excursions__filters-block").not($(this).next()).slideUp(300);
                $(this).toggleClass("active").next().slideToggle(300);
            });

            $(".events__filters-title").click(function (event) {
                $(".events__filters-title").not($(this)).removeClass("active");
                $(".events__filters-block").not($(this).next()).slideUp(300);
                $(this).toggleClass("active").next().slideToggle(300);
            });

            $(".trow__title").click(function (event) {
                if ($(".tbody").hasClass("tbody--showoneitem")) {
                    $(".trow__title").not($(this)).removeClass("active");
                    $(".trow__text").not($(this).next()).slideUp(300);
                }
                $(this).toggleClass("active").next().slideToggle(300);
            });

            $(".block__title").click(function (event) {
                if ($(".block").hasClass("block--showoneitem")) {
                    $(".block__title").not($(this)).removeClass("active");
                    $(".block__text").not($(this).next()).slideUp(300);
                }
                $(this).toggleClass("active").next().slideToggle(300);
            });
        }

        $(".question").click(function (event) {
            if ($(".faq__list").hasClass("faq__list--showoneitem")) {
                $(".question").not($(this)).removeClass("active");
                $(".answer").not($(this).next()).slideUp(300);
            }
            $(this).toggleClass("active").next().slideToggle(300);
        });


    });



