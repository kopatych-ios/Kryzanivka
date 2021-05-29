$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

$(document).ready(function() {
        $('.trash_btn').click(function() {
            $( this ).closest( 'tr' ).remove();
            let id = $(this).attr('id');
            $.get("/admin?delete="+id);
        });
});