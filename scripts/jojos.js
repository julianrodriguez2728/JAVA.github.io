let cartas = document.getElementById("cartas");
const contenedorCarrito=document.getElementById("items");
let modal =document.getElementById("modal-body");
const carrito = JSON.parse(localStorage.getItem("carrito"))|| [];

const productosJojos =[
    {id: 1,titulo:"Battle tendency v2",precio:2500, imagen:"../img/phantom_blood.jpg"},
    {id: 2,titulo:"Stardust Crusaders v3",precio:4500, imagen:"../img/stardust_crusaders.jpg"},
    {id: 3,titulo:"Diamond is Unbreakle v4",precio:3500, imagen:"../img/diamond_is_unbreakble.jpg"},
    {id: 4,titulo:"Golden Wind v5",precio:6500, imagen:"../img/golden_wind.jpg"}
]


function obtenerDatos (){
    const URLJSON="../jsons/productos_jojos.json";
    fetch(URLJSON)
        .then( respuesta => respuesta.json())
            .then( portadas => {
                portadas.forEach(producto => {
                    document.getElementById("jojos-portadas").innerHTML+=`
                    <div class="card" style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <h6 class="precio">${producto.precio}</h6>
                    <button id="agregar ${producto.id}" class="btn btn-primary">COMPRAR<i class="fas fa-shopping-cart"></i></button>
                    </div>
                    </div>
                    `;
                    const boton = document.getElementById(`agregar ${producto.id}`);
                    boton.addEventListener("click", ()=> {
                        agregarAlCarrito(producto.id);
                    })
                });
            })
}



let agregarAlCarrito = (prodId)=>{
    const item = productosJojos.find((prod)=> prod.id ===prodId);
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
obtenerDatos()