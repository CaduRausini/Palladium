window.addEventListener('scroll', () => {
    const headerpage = document.querySelector('.header-page');
    headerpage.classList.toggle('active-scroll', window.scrollY > 100)
})
