// // $('.dropdown').click(function () {
// //     $(this).attr('tabindex', 1).focus();
// //     $(this).toggleClass('active');
// //     $(this).find('.dropdown-menu').slideToggle(300);
// // });
// // $('.dropdown').focusout(function () {
// //     $(this).removeClass('active');
// //     $(this).find('.dropdown-menu').slideUp(300);
// // });
// // $('.dropdown .dropdown-menu li').click(function () {
// //     $(this).parents('.dropdown').find('span').text($(this).text());
// //     $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
// // });
// // /*End Dropdown Menu*/


// // $('.dropdown-menu li').click(function () {
// // var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
// //   msg = '<span class="msg">Hidden input value: ';
// // $('.msg').html(msg + input + '</span>');
// // }); 
// // /////////////////////////////////////////////

// // const submit = document.querySelector(".search_btn")

// // const inputService = document.querySelector('.dropdown')
// // const inputDate = document.querySelector('#inputDate')
// // const inputTime = document.querySelector('#inputTime')

// // let data = {
// //     firstinput: "",
// //     secInput: "",
// //     thirdInput: "",
// // }


// // inputService.addEventListener('click', (event)=> {
// //     event.preventDefault()
// //     if(event.target && event.target.tagName == "LI"){
// //         data.firstinput = event.target.innerText
// //     }
// // })

// // inputDate.addEventListener('click', (event)=> {
// //     data.secInput = inputDate.value
// //     console.log(data);
// // }) 

// // inputTime.addEventListener('click', (event)=> {
// //     data.thirdInput = inputTime.value
// //     console.log(data);
// // }) 

// // function sendData (event) {
// //     event.preventDefault()
// //     console.log(data)
// // }


// $('.sel').each(function() {
//     $(this).children('select').css('display', 'none');
    
//     var $current = $(this);
    
//     $(this).find('option').each(function(i) {
//       if (i == 0) {
//         $current.prepend($('<div>', {
//           class: $current.attr('class').replace(/sel/g, 'sel__box')
//         }));
        
//         var placeholder = $(this).text();
//         $current.prepend($('<span>', {
//           class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
//           text: placeholder,
//           'data-placeholder': placeholder
//         }));
        
//         return;
//       }
      
//       $current.children('div').append($('<span>', {
//         class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
//         text: $(this).text()
//       }));
//     });
//   });
  
//   // Toggling the `.active` state on the `.sel`.
//   $('.sel').click(function() {
//     $(this).toggleClass('active');
//   });
  
//   // Toggling the `.selected` state on the options.
//   $('.sel__box__options').click(function() {
//     var txt = $(this).text();
//     var index = $(this).index();
    
//     $(this).siblings('.sel__box__options').removeClass('selected');
//     $(this).addClass('selected');
    
//     var $currentSel = $(this).closest('.sel');
//     $currentSel.children('.sel__placeholder').text(txt);
//     $currentSel.children('select').prop('selectedIndex', index + 1);
//   });
  
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