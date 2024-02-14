//Select the navigation toggle button element
const navToggle = document.querySelector('.nav-toggle');

//Select all navigation links
const navLinks = document.querySelectorAll('.nav_ _link')

//Add event listener to the navigation toogle button for click event
navToggle.addEventListener('click', function() {
   //Toggle the 'nav-open' class on the body elememnt
    document.body.classList.toggle('nav-open');
});

//Iterate over each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.body.classList.remove('nav-open');
    })
})
