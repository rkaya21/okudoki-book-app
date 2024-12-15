async function loadComponent(elementId, path) {
  try {
      const response = await fetch(`components/${path}`);
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;

      if (path === 'slider.html') {
          setTimeout(() => {
              if (typeof showSlides === 'function') {
                  showSlides();
              }
          }, 100);
      }
  } catch (error) {
      console.error(`Error loading ${path}:`, error);
  }
}

async function loadAllComponents() {
  await loadComponent('navbar-content', 'navbar.html');
  await loadComponent('slider-content', 'slider.html');
  await loadComponent('about-content', 'about.html');
  await loadComponent('authors-content', 'authors.html');
  await loadComponent('contact-content', 'contact.html');
  await loadComponent('footer-content', 'footer.html');
}

/*
Sayfa içi yönlendirme
*/
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  }
});

/*
Sayfa yüklendiğinde bileşenleri
 aktif hale getir
*/
document.addEventListener('DOMContentLoaded', () => {
  loadAllComponents();
});

/*
Mobil menüyü için hamburger menü
basıldıgında menüyü gösterir
kapatıldıgında menüyü kapatır.
*/
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x) {
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
}

/*
Sayfa kaydırıldığında menüyü kapat
(mobil menü için)
*/
window.onscroll = function() {
    var x = document.getElementById("navDemo");
    if (x && x.className.indexOf("w3-show") !== -1) {
        x.className = x.className.replace(" w3-show", "");
    }
};