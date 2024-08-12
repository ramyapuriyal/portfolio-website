// ********************************toggle navbar*********

let menuIcon=document.querySelector("#menu-icon");
let navbar =document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// ********************************scroll section active setupr*********

let sections =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // ********************************sticky navbar************
let header=document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// *****************************************remove toggle icon and navbar*****

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

// ********************************scroll Revealr************
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
 });

 ScrollReveal().reveal(' heading', {origin:'top'});
 ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin:'bottom'});
 ScrollReveal().reveal('.home-content, h4, h3, h1, p, .social-media, .btn-resume', {orgin:'left'});
 ScrollReveal().reveal('.skills-container', {origin:'right'});

// *******DARK & LIGHT MODE *****************

var moonIcon=document.getElementById('moon-img');
    moonIcon.onclick=function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            moonIcon.src="./images/sun-image.png";
        }else{
            moonIcon.src="./images/moon-image.png";
        }
    }