// $(function drop(){
//   $('.dropdown.item')
//   .dropdown();

// });

$(function() {
  $('.one-half.left').mouseenter(function () {
    $('.container').addClass('left-is-hovered');
  }).mouseleave(function () {
    $('.container').removeClass('left-is-hovered');
  });
  
  $('.one-half.right').mouseenter(function () {
    $('.container').addClass('right-is-hovered');
  }).mouseleave(function () {
    $('.container').removeClass('right-is-hovered');
  });

  $('.dropdown.item')
  .dropdown();

  $('.plus')
    .on('click', function() {
      $('.search.item, .primary > .item:not(:last-of-type)')
        .hide();
      $('.slide > .item')
        .addClass('open');
      $('.slide .remove')
        .addClass('spin');
  });
  $('.remove')
    .on('click', function() {
    $(this)
      .removeClass('spin');
    $('.search.item, .primary > .item:not(:last-of-type)')
      .show();
    $('.slide > .item')
      .removeClass('open');
  });
});
