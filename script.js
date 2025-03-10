// Cambiar entre modo claro y oscuro
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
const moonIcon = document.querySelector('#toggle-theme i');

toggleThemeButton.addEventListener('click', () => {
    // Alternamos la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    // Cambiar el ícono dependiendo del tema
    if (body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');  // Cambiar a sol en modo oscuro
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');  // Cambiar a luna en modo claro
    }
});

// Función para mostrar más información al hacer clic
const showInfoButton = document.getElementById('show-info');
const infoDiv = document.getElementById('info');

showInfoButton.addEventListener('click', () => {
    // Alternamos la visibilidad del div con la información
    infoDiv.classList.toggle('show');
});
