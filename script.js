let lastScrollTop = 0; // Stocke la dernière position de scroll
const navbar = document.querySelector('.navbar'); // Sélectionne la barre de navigation

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY; // Récupère la position actuelle du scroll

    if (scrollTop > lastScrollTop) {
        // Si l'utilisateur fait défiler vers le bas
        navbar.style.transform = "translateY(-200%)"; // Déplace la navbar vers le haut pour la cacher
    } else {
        // Si l'utilisateur fait défiler vers le haut
        navbar.style.transform = "translateY(0)"; // Ramène la navbar à sa position initiale
    }

    lastScrollTop = scrollTop; // Met à jour la dernière position de scroll
});


