
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
}


$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr("placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  $(this)
    .find("option")
    .each(function() {
      template +=
        '<span class="custom-option ' +
        $(this).attr("class") +
        '" data-value="' +
        $(this).attr("value") +
        '">' +
        $(this).html() +
        "</span>";
    });
  template += "</div></div>";

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(
  function() {
    $(this)
      .parents(".custom-options")
      .addClass("option-hover");
  },
  function() {
    $(this)
      .parents(".custom-options")
      .removeClass("option-hover");
  }
);
$(".custom-select-trigger").on("click", function() {
  $("html").one("click", function() {
    $(".custom-select").removeClass("opened");
  });
  $(this)
    .parents(".custom-select")
    .toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this)
    .parents(".custom-select-wrapper")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".custom-options")
    .find(".custom-option")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this)
    .parents(".custom-select")
    .removeClass("opened");
  $(this)
    .parents(".custom-select")
    .find(".custom-select-trigger")
    .text($(this).text());
});


$("#datepicker").datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: "dd.mm.yy"
});

$(".date").mousedown(function() {
  $(".ui-datepicker").addClass("active");
});

var element = document.getElementById('num');
var maskOptions = {
    mask: '+38 (000)-000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

