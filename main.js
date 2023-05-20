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

// Drag / Drop
const trashItem = document.querySelector('#trash');
const trashBin = document.querySelector('.trash-bin-box');
const noneDropF = document.querySelector('.box-trash .img-box');
const noneDropS = document.querySelector('.box-trash h4');
const ringLoading = document.querySelector('.lds-ring');
const dropDoneMess = document.querySelector('.box-trash h3');
const loaderWr = document.querySelector('#loader');

trashBin.addEventListener('dragover', function(e){
    e.preventDefault();
})
trashItem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('trash', e.target.id)
})
trashBin.addEventListener('drop', e => {
    e.preventDefault();
    let data = e.dataTransfer.getData('trash')
    e.target.appendChild(document.getElementById(data));
    noneDropF.style.display = 'none';
    noneDropS.style.display = 'none';
    ringLoading.style.display = 'block';
    setTimeout(() => {
        ringLoading.style.display = 'none';
        dropDoneMess.style.display = 'block'
        setTimeout(() => {
            loaderWr.style.display = 'none';
        }, 1000)
    }, 3000)
})



