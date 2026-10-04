document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-collapse');
    if (menu.classList.contains('show')) new bootstrap.Collapse(menu).hide();
  });
});

document.querySelector('footer').innerHTML = document.querySelector('footer').innerHTML.replace('© 2026', `© ${new Date().getFullYear()}`);
