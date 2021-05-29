const inputService = document.querySelector('#potencial')
const inputDate = document.querySelector('#datepicker')
const inputTime = document.querySelector('#inputTime')

const firstName = document.querySelector('#fname')
const secName = document.querySelector('#sname')
const phone = document.querySelector('#num')


function sendData () {
  const data = {
    service_name: inputService.value,
    date: inputDate.value,
    time: inputTime.value,
    first_name:  firstName.value,
    second_name: secName.value,
    user_phone: phone.value
  }

  console.log(data)
  $.post("/", data,function(result){
      if (result.status) {
          window.location.assign('/okay')
      } else {
          window.location.assign('/error')
      }
      
   }, "json");
}



jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
  
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
  
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
  });


  
  