/* ---------------------------- hiding preloader ---------------------------- */
const loader = document.getElementById('preload');
window.addEventListener('load', () => {
  loader.style.display = 'none'
});

/* ---------------------- navbar color change on scroll --------------------- */
const navBar = document.querySelector('.container')
const topLink = document.querySelector('.totop')

window.addEventListener('scroll', function(){
  const scrnHeight = window.pageYOffset
  const navHeight = navBar.getBoundingClientRect().height
  if(scrnHeight > navHeight){
    navBar.classList.add('fixed')
  }else{
    navBar.classList.remove('fixed')
  }
  if(scrnHeight > 500){
    topLink.classList.add("scroll")
  }else{
    topLink.classList.remove("scroll")
  }
});


/* ----------------------------- toggle-menu ----------------------------- */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-con');

hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('toggle')
});

document.querySelectorAll('.links').forEach(n => n.addEventListener('click', () =>
{
  hamburger.classList.remove('active')
  navMenu.classList.remove('toggle')
}));

/* ------------------------------ setting-year ------------------------------ */
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();