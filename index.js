import './styles/global.css'
import './styles/hero.css'
import './styles/history.css'
import './styles/geography.css'

// PARALAX
const heroBgFront = document.querySelector('.hero-bg-front');

window.addEventListener('scroll', () => {
  heroBgFront.style.transform = `translateY(${window.scrollY / 2}px)`;
})