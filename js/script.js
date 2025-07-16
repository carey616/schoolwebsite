/*document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
  });*/
  
  // Hamburger Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
  // Optional: close menu when clicking outside or on a link (for better mobile UX)
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
