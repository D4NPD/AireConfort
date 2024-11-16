document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.agregar-carrito');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Producto agregado al carrito');
        });
    });
});
