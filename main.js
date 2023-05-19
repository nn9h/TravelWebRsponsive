// Toggle header when scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
})

// Show search box
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');
searchIcon.addEventListener('click', function(){
    searchBox.classList.toggle('hide')
})
searchBox.onclick = function(e){
    e.stopPropagation();
}


// Toggle menu
const menuBtn = document.querySelector('.menu_icon');
const navHeader = document.querySelector('.nav_header');
menuBtn.addEventListener('click', function(){
    navHeader.classList.add('active')
})
const closeMenuBtn = document.querySelector('.x-icon');
closeMenuBtn.addEventListener('click', function(){
    navHeader.classList.remove('active')
    searchBox.classList.remove('hide')
})

document.addEventListener('click', function(event) {
    if (!navHeader.contains(event.target) && !menuBtn.contains(event.target)) {
        navHeader.classList.remove('active');
        searchBox.classList.remove('hide')
    }
});