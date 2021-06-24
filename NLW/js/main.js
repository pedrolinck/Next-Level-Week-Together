const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')


for(const element of toggle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  }) 
}

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

// sombra no header após rolagem 

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
} )

// Swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
})


// ============= ScrollReveal ===============

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 750,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials .title, #testimonial .cards
  #constact .title, #contact .grid`, { interval: 120}
  
  )