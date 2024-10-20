


// the search-icon and search-bar1 
const searchIcon = document.querySelector('.search-icon');
const searchBar1 = document.querySelector('.search-bar1');

searchIcon.addEventListener('click', function() {

  searchBar1.classList.toggle('active');
});


//  search-bar2 
const searchBar2 = document.querySelector('.search-bar2');
const sideMenu = document.querySelector('.side-menu');
const removeButton = document.querySelector('.remove a');


searchBar2.addEventListener('click', function() {
    sideMenu.classList.toggle('active');
});

removeButton.addEventListener('click', function() {
    sideMenu.classList.remove('active');
});
