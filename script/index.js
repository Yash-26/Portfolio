const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("navlinks")[0];

toggleButton.addEventListener('click', () =>{
    navLinks.classList.toggle("active")
})