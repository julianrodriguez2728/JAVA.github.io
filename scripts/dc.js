let cartas = document.getElementById("cartas");
const contenedorCarrito=document.getElementById("items");
let modal =document.getElementById("modal-body");
const carrito = JSON.parse(localStorage.getItem("carrito"))|| [];


const productosDc = [
    {id: 1, titulo:"Superman vs Batman",precio:7500, imagen:"../img/dc1.jpg"},
    {id: 2, titulo:"El boton parte 1.",precio:8500, imagen:"../img/dc2.jpg"},
    {id: 3, titulo:"Superman","precio":2500, imagen:"../img/dc3.jpg"},
    {id: 4, titulo:"Batman tmnt Tortugas Ninjas",precio:1500, imagen:"../img/dc4.jpg"}
]

productosDc.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML =`
    <div class="card" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.titulo}</h5>
    <h6 class="precio">${producto.precio}</h6>
    <button id="agregar ${producto.id}" class="btn btn-primary">COMPRAR<i class="fas fa-shopping-cart"></i></button>
    </div>
    </div>
    `;
    
    cartas.appendChild(div)
    
    const boton = document.getElementById(`agregar ${producto.id}`);
    boton.addEventListener("click", ()=> {
        agregarAlCarrito(producto.id);
    })
})


let agregarAlCarrito = (prodId)=>{
    const item = productosDc.find((prod)=> prod.id ===prodId);
    carrito.push(item);
    actualizar();
    console.log(...carrito);   
    Swal.fire(
        'Agregaste producto al carro!',
        'producto: '+ prodId,
        'success'   
      )
}

const actualizar = () =>{

    carrito.forEach((prod)=>{

        const div=document.createElement("div");
        div.className = ("productoEnCarrito");
    
        div.innerHTML =`  <tr>
                        <td>${prod.id}</td>
                        <td>${prod.titulo}</td>
                        <td>${prod.precio}</td>
                        </tr>
                    `;
            contenedorCarrito.appendChild(div)
            localStorage.setItem("carrito: ",JSON.stringify(carrito));
    })

}