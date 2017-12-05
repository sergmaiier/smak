  // $('.slider-bottom').slick({
  //     infinite: true,
  //     arrows: false,
  //     dots: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   });

  // $('.slider-top').slick({
  //     infinite: true,
  //     arrows: true,
  //     dots: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   });


  $('.slider-top').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	asNavFor: '.slider-top',
  	dots: true,
  	centerMode: true,
  	focusOnSelect: true
  });