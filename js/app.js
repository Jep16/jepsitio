
    //efecto1
    var swiper = new swiper(.myswiper, {
      slidesPervView: 1,
      centeredslides:true,
      loop:true
      spaceBetween: 30,
      grabCursor:true,
      navigation: {
        nextEl: ".swiper-button.next"
        prevEl: ".swiper-button.prev"
      },
      breakpoints: {
        991: {
          slidesPervView: 3
        }
      }

    });
  
  