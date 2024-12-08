$(document).ready(function() {
  const $body = $('body');
  const $menubasculer = $('#menubasculer');
  const $flou = $('.flou');
  const $menuchoix = $('.menuchoix');


  $menubasculer.on('click', function() {
    $body.toggleClass('menu-open');
  });


  $flou.on('click', function() {
    $body.removeClass('menu-open');
  });


  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && $body.hasClass('menu-open')) {
      $body.removeClass('menu-open');
    }
  });

  $menuchoix.each(function() {
    const $item = $(this);
    const $submenu = $item.next('.sousmenu');

    if ($submenu.length) {
      $item.on('click', function(e) {
        e.preventDefault();
        $submenu.slideToggle();
      });
    }
  });


  function toggleBodyScroll(disable) {
    $body.css('overflow', disable ? 'hidden' : '');
  }


  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class') {
        const isMenuOpen = $body.hasClass('menu-open');
        toggleBodyScroll(isMenuOpen);
      }
    });
  });

  observer.observe($body[0], {
    attributes: true
  });
});