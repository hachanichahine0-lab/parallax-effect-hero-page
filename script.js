document.addEventListener('DOMContentLoaded', () => {
  const navbar      = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');
  const layerBg     = document.getElementById('layerBg');
  const layerText   = document.getElementById('layerText');
  const heroContent = document.querySelector('.hero-content');
  const layerBridge = document.getElementById('layerBridge');
  const layerTreeTl = document.getElementById('layerTreeTl');
  const layerTreeBr = document.getElementById('layerTreeBr');
  const layerPetals = document.getElementById('layerPetals');
  const revealItems = document.querySelectorAll('.reveal-item');

  let tX = 0, tY = 0, mX = 0, mY = 0;
  const damp = 0.08;

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    tX = (clientX / window.innerWidth  - 0.5) * 2;
    tY = (clientY / window.innerHeight - 0.5) * 2;
  });
  window.addEventListener('mouseleave', () => { tX = 0; tY = 0; });

  function render() {
    const sy = window.scrollY;
    const heroH = heroSection?.offsetHeight ?? window.innerHeight;

    mX += (tX - mX) * damp;
    mY += (tY - mY) * damp;

    if (sy <= heroH + 200) {
      if (layerBg) layerBg.style.transform = 'translate3d(0,0,0)';

      if (heroContent) {
        heroContent.style.transform = `translate3d(${mX*25}px,${-sy*0.45 + mY*20}px,0)`;
        heroContent.style.opacity = Math.max(0, 1 - sy / 400).toFixed(2);
      }

      if (layerBridge) {
        const bX = Math.min(Math.max(mX * 10, -12), 12);
        const bY = Math.min(Math.max(sy * 0.12 + mY * 8, -25), 90);
        layerBridge.style.transform = `translate3d(${bX}px,${bY}px,0)`;
      }

      if (layerTreeTl) {
        layerTreeTl.style.transform = `translate3d(${mX*5}px,${Math.max(-sy*0.15,-180) + mY*4}px,0)`;
      }

      if (layerTreeBr) {
        layerTreeBr.style.transform = `translate3d(${mX*6}px,${Math.min(sy*0.15,180) + mY*5}px,0)`;
      }

      if (layerPetals) {
        layerPetals.style.transform = `translate3d(${mX*85}px,${-sy*1.1 + mY*65}px,0)`;
      }

    }

    if (navbar) navbar.classList.toggle('scrolled', sy > 60);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealItems.forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - (id === '#hero' ? 0 : 80), behavior: 'smooth' });
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const pos = window.scrollY + 300;
    sections.forEach(s => {
      if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
        document.querySelectorAll('.nav-link').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${s.id}`);
        });
      }
    });
  });
});
