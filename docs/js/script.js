$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger__active');
        $('.menu').toggleClass('menu__active');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #record, #thanks').fadeOut('slow');
    });

    $('[data-modal=record]').on('click', function() {
        $('.overlay, #record').fadeIn('slow');
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона"
            }
        });
    };

    // validateForms('#record-form');
    // validateForms('#record form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#record').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

})