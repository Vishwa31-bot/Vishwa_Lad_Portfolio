// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Expand project detail on click
const projectLinks = document.querySelectorAll('.project-title');

projectLinks.forEach(link => {
  link.addEventListener('click', () => {
    const detailId = link.getAttribute('data-target');
    const detailSection = document.getElementById(detailId);
    if (detailSection) {
      document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
      detailSection.style.display = 'block';
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
