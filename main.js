
class Producto {constructor (nombre, precio, descripcion) {
this.nombre = nombre;
this.precio = precio;
this.descripcion = descripcion;

}

}


const productos= []
productos.push(new Producto ("fideos", 25, "yerba sin palo"));
productos.push(new Producto ("agua", 25, "yerba sin palo"));
productos.push(new Producto ("queso", 25, "yerba sin palo"));
productos.push(new Producto ("coca", 25, "yerba sin palo"));
productos.push(new Producto ("papas", 25, "yerba sin palo"));
productos.push(new Producto ("yerba", 25, "yerba sin palo"));



const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach( Producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-2", "col-xs-12");
        card.innerHTML = `
            <div class="card">
                <img src="${Producto.img}" class="card-img-top imgProductos" alt="${Producto.nombre}">
                <div class= "card-body">
                    <h5>${Producto.nombre}</h5>
                    <p>$${Producto.precio}</p>
                    <p>${Producto.descripcion}</p>
                    <button class="btn colorBtn" id="boton ${Producto.id}"> Agregar al carrito </button>
                </div>
            </div>
                    `

    contenedorProductos.appendChild(card);

    const boton = document.getElementById(`boton ${Producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(Producto.id);
    })
            
    })
}


mostrarProductos();