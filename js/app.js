function swip_menu(that){
  const ele = that.nextElementSibling
  ele.classList.toggle('active')
}

function open_mobile_navMenu(){
  document.querySelector('.header .right').classList.toggle('show')
}

function open_menu_aside(){
  document.querySelector('.aside').classList.toggle('show')
  document.querySelector('.icon-aside').classList.toggle('show')
}