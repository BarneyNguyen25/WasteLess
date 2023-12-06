// on scroll animation
const elements = document.querySelectorAll('#section-two-header');
const cta = document.querySelectorAll('#cta')
const disc = document.querySelectorAll('#disc-2')
const imp = document.querySelectorAll('.imp-sta-1')
const imp2 = document.querySelectorAll('.imp-sta-2')
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);

});

cta.forEach(element => {
  observer.observe(element);

});

disc.forEach(element => {
  observer.observe(element);

});

imp.forEach(element => {
  observer.observe(element);

});

imp2.forEach(element => {
  observer.observe(element);

});

const card = document.querySelector("#plasticcup");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 20;
/* on hover transition */
function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}
  
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
