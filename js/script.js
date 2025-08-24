let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const videos = document.querySelectorAll('.portfolio-box video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.muted = true;
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    videos.forEach(video => {
        observer.observe(video);

        video.addEventListener('mouseenter', () => {
            video.muted = false;
            video.play();
        });

        video.addEventListener('mouseleave', () => {
            video.muted = true;
            const rect = video.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
            if (!inView) {
                video.pause();
            }
        });
    });



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 
    'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
     strings: ['Web Designer', 'Graphic Designer', 'Gamer', 'VFX Editor', 'YouTuber',], 
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 1000,
     loop: true
});
const typed2 = new Typed('.multiple-text2', {
  strings: ['GRAPHIC DESIGNS','MARKETING ADVERTISEMENTS','COMMERCIAL ADDS','VFX EDITS','VIDEO EDITS','SOCIAL MEDIA POSTS','MUSIC VIDEOS','THUMBNAILS','WEB DESIGNS','GAMING CONTENTS','YOUTUBE CONTENTS'],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1500,
  loop: true
});
