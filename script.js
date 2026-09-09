// Toggle menu navigasi di tampilan mobile
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  // Tutup menu otomatis saat salah satu link diklik (khusus mobile)
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
    });
  });
}
