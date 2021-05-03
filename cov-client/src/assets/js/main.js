// $(function drop(){
//   $('.dropdown.item')
//   .dropdown();

// });

$('.menu-button').on('click', function () {
  $('.v-menu').toggleClass('hide');
  $('.v-menu').toggleClass('show');
});

$(function () {
  $('.one-half.left').on('mouseenter', function () {
    $('.container').addClass('left-is-hovered');
  }).mouseleave(function () {
    $('.container').removeClass('left-is-hovered');
  });

  $('.one-half.right').on('mouseenter', function () {
    $('.container').addClass('right-is-hovered');
  }).mouseleave(function () {
    $('.container').removeClass('right-is-hovered');
  });

  $('.dropdown.item')
    .dropdown();

  $('.menu .item')
    .tab();

  $('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay',
  }).sidebar('attach events', '#mobile_item');

  $('.plus')
    .on('click', function () {
      $('.search.item, .primary > .item:not(:last-of-type)')
        .hide();
      $('.slide > .item')
        .addClass('open');
      $('.slide .remove')
        .addClass('spin');
    });
  $('.remove')
    .on('click', function () {
      $(this)
        .removeClass('spin');
      $('.search.item, .primary > .item:not(:last-of-type)')
        .show();
      $('.slide > .item')
        .removeClass('open');
    });

  //   if($( window ).width() < 780){
  //     $(function(){
  //     $('.pushable.segment').addClass('display');
  //   });
  // };
});
