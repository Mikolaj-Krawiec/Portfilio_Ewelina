const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
    burger.addEventListener('click', burgerClickHandler);
}

burgerClickHandler = () => {
    //Toggle Nav
    nav.classList.toggle('nav-links-active');

    //Animate Links
    navLinks.forEach((link,index) => {
        if (link.style.animation) {
            link.style.animation = ''; 
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/10 + 0.2}s`;
        }
    });

    //Burger Animation
    burger.classList.toggle('toggle');
}

clickHandler = (links) => {
    event.preventDefault();
    const activeName = event.currentTarget.getAttribute('href');
    const pages = document.querySelectorAll('.page');
    
    for( page of pages) {
        page.classList.toggle('active', page.classList.contains(activeName));   
        console.log(page);
    }
    if(burger.classList.contains('toggle')) {
        burgerClickHandler();
    }
}

const links = () => {
    const links = document.querySelectorAll('.link');
    for(const link of links) {
        link.addEventListener('click',clickHandler);
    } 
}

const app = () => {
    navSlide();
    links();
}

app();
