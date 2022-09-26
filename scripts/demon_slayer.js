let cartas = document.getElementById("cartas");
const contenedorCarrito=document.getElementById("items");
let modal =document.getElementById("modal-body");
const carrito = JSON.parse(localStorage.getItem("carrito"))|| [];


const productosDemonSlayer = [
    {id: 1, titulo:"Demon slayer 01",precio:2500, imagen:"../img/demon_slayer01.jpg"},
    {id: 2, titulo:"Demon slayer 02",precio:4500, imagen:"../img/demon_slayer02.jpg"},
    {id: 3, titulo:"Demon slayer 03",precio:3500, imagen:"../img/demon_slayer03.jpg"},
    {id: 4, titulo:"Demon slayer 04",precio:6500, imagen:"../img/demon_slayer04.jpg"},
    {id: 5, titulo:"Demon slayer 04",precio:6500, imagen:"../img/demon_slayer05.jpg"}
]

productosDemonSlayer.forEach((producto) => {
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
    const item = productosDemonSlayer.find((prod)=> prod.id ===prodId);
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

