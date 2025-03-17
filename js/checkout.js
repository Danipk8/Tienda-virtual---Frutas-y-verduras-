document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const resumen = document.getElementById("resumen-pedido");
    const totalPedido = document.getElementById("total-pedido");

    if (carrito.length === 0) {
        resumen.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalPedido.textContent = "";
        return;
    }

    let total = 0;
    resumen.innerHTML = "<ul>";
    carrito.forEach(producto => {
        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        resumen.innerHTML += `<li>${producto.nombre} × ${producto.cantidad} - $${subtotal.toLocaleString("en-US")}</li>`;
    });
    resumen.innerHTML += "</ul>";

    totalPedido.textContent = `Total: $${total.toLocaleString("en-US")}`;
});
