// обработка формы
$(document).ready(function () {
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: {
          required: true,
          minlength: 8,
        },
      },
      messages: {
        name: {
          required: "Имя обязательное",
          minlength: jQuery.validator.format("Имя не должно быть менее 2 букв"),
        },
        phone: {
          required: "Телефон обязательно",
          minlength: jQuery.validator.format("Телефон не должен быть менее 8 цифр"),
        },
      },
    });
  });
});
