window.onload = ()=>{
  slide()
  slide_ad()
}

function slide(){
  let swiper = new Swiper('.slide-home .slide', {
    slidesPerView: 1,
    spaceBetween: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
      },
    }
  });
}

function slide_ad(){
  let swiper = new Swiper('.box-img-vip .slide-vip', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
    }
  });
}