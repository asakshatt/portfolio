let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', reveal)
function reveal() {
  var reveals = document.querySelectorAll('.reveal,.reveal2');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active')
    }

  }
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    
    if (screenWidth <= 850) {
        // Get references to elements
        const navbar = document.querySelector(".navbar");
        const navbarLinks = document.querySelectorAll(".navbar a");
        
        // Add click event listener to each navbar link
        navbarLinks.forEach(link => {
            link.addEventListener("click", function() {
                navbar.classList.remove("open"); // Remove the "open" class
            });
        });
        
        // Get references to menu button and menu icon
        const menuBtn = document.querySelector(".menu-btn");
        const menuIcon = document.getElementById("menu-icon");
        
        // Add click event listener to menu button
        menuBtn.addEventListener("click", function() {
            navbar.classList.toggle("open"); // Toggle the "open" class
        });
    }
});






