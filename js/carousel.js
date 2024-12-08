$(document).ready(function () {
    const $carousel = $('.carousel');
    const $cards = $('.eventcard');
    const $prevButton = $('.prev-button');
    const $nextButton = $('.next-button');

    let currentIndex = 0;
    const cardWidth = 212;

    function goToSlide(index) {
      currentIndex = index;
      $carousel.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
    }

    $prevButton.on('click', function () {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });

    $nextButton.on('click', function () {
      if (currentIndex < $cards.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });
  });