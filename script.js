// console.log ('connect');

const bouton = document.querySelectorAll('.bouton');
const progre = document.querySelector('.progression');
let compteur = 0; 
let resultat = 100/bouton.length; // 100 / nombre de bouton
let pourcentage = document.querySelector('.pourcentage');


bouton.forEach((boutonS) => {
    boutonS.addEventListener('click', function(e) {
        e.stopPropagation();
        const rond = boutonS.firstElementChild;
        rond.classList.toggle('switch-change');
            if ( rond.classList.toggle('.switch-change')) {
                compteur += resultat;
                progre.style.width = compteur +'%';
                pourcentage.innerText = progre.style.width;
            } else {
                compteur -= resultat;
                progre.style.width = compteur +'%';
                pourcentage.innerText = progre.style.width;
            };
        //compteur == 100 ? progre.style.background = "red" : progre.style.background = null;
        compteur == 100 ? progre.classList.add('barre-couleur') : progre.classList.remove('barre-couleur');
        compteur == 0 ? pourcentage.innerText = null : "";
    });
});