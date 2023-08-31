const divNav = document.querySelector('.div-nav')

document.querySelector('#humberger-menu').
onclick = () => {
    divNav.classList.toggle('active');
};

// bebas

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !divNav.contains(e.target)){
        divNav.classList.remove('active');
    }
});