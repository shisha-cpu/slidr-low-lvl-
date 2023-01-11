const slideList = document.querySelector('.slider-list')

let offset = 0
document.querySelector('.btn1').addEventListener('click',()=>{

  offset+=495
    if (offset>1970){
    offset=0
  }
  slideList.style.left = -offset+ 'px'

  
})
document.querySelector('.btn2').addEventListener('click',()=>{
 
  offset-=495
  if (offset<-1970){
    offset=0
  }
  slideList.style.left = offset + 'px'
})