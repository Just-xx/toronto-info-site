import './styles/global.css'
import './styles/secHero.css'
import './styles/secHistory.css'
import './styles/secGeography.css'


// PARALAX
const heroBgFront = document.querySelector('.hero-bg-front');

window.addEventListener('scroll', () => {
  heroBgFront.style.transform = `translateY(${window.scrollY / 2}px)`;
})