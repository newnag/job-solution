function swip_menu(that){
  const ele = that.nextElementSibling
  ele.classList.toggle('active')
}

function open_mobile_navMenu(){
  document.querySelector('.header .right').classList.toggle('show')
}