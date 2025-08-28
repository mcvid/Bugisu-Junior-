document.addEventListener('DOMContentLoaded', () => {
  // Hero button interactive effects
  const heroButtons = document.querySelectorAll('.hero-buttons a');

  heroButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });

    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    });
  });

  // Hamburger menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // News card interactive effects
  const newsCard = document.querySelector('.news-card');
  const readMoreBtn = document.querySelector('.read-more');

  if (newsCard) {
    // Add click effect to news card
    newsCard.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A' || !e.target.classList.contains('read-more')) {
        newsCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
          newsCard.style.transform = '';
        }, 150);
      }
    });

    // Add keyboard navigation
    newsCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (e.target.classList.contains('read-more')) {
          e.target.click();
        }
      }
    });
  }

  if (readMoreBtn) {
    // Smooth scroll for read more button
    readMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Add your scroll logic here when you have target sections
      console.log('Read more clicked - would scroll to news section');
      
      // Visual feedback
      readMoreBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        readMoreBtn.style.transform = '';
      }, 150);
    });
  }

  // Add intersection observer for additional animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe news card for additional animations
  if (newsCard) {
    observer.observe(newsCard);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".program-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // remove when out of view so it replays
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 }); // triggers when 20% visible

  cards.forEach((card) => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".program-card, .admin-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
});
 function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Add scroll event listener to trigger animation
        window.addEventListener('scroll', function() {
            const footer = document.getElementById('school-footer');
            if (isInViewport(footer)) {
                footer.classList.add('visible');
            }
        });

        // Also check on page load
        window.addEventListener('load', function() {
            const footer = document.getElementById('school-footer');
            if (isInViewport(footer)) {
                footer.classList.add('visible');
            }
        });

        // Simple form validation
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();});