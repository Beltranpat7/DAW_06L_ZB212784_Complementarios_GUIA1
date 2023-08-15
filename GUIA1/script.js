document.addEventListener('DOMContentLoaded', function() {
    var Btnsaludar = document.getElementById('Btnsaludar');
    var mensaje = document.getElementById('mensaje');

    Btnsaludar.addEventListener('click', function() {
        mensaje.textContent = 'HOLA A TODOS';
    });
});
