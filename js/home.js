window.onload = ()=>{
  slide()
}

function slide(){
  let swiper = new Swiper('.slide-home .slide', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    autoplay: {
      delay: 5000,
    },
  });
}