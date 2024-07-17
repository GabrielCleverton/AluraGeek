document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    galleryImages.forEach(img => {
      img.addEventListener('click', function () {
        const src = this.getAttribute('src');
        lightboxImg.setAttribute('src', src);
        lightbox.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });
  