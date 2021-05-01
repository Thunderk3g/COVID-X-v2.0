$(function() {
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
