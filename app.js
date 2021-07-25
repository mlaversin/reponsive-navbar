const navSlide = () => {
    const burger = document.querySelector('.burger');
    const  nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toogle('nav-active');
    });
}

const app = () => {
    navSlide();
}