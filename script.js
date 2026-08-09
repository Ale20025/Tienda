let Dinero=document.getElementById("Alepuntos");
let CompraExitosa=document.getElementById("Exito");
let CompraFallida=document.getElementById("NoExito");
let Premio=document.getElementById("Premio");
let Clave=document.getElementById("Clave");
let Dibujo=document.getElementById("Dibujo");
let Numero=document.getElementById("Numero");
let Sonido1=document.getElementById("Sonido1");
let Sonido2=document.getElementById("Sonido2");
let Sonido3=document.getElementById("Sonido3");
let Sonido4=document.getElementById("Sonido4");
let Sonido5=document.getElementById("Sonido5");
let Casino=document.getElementById("Casino");
let productos=[
{
    nombre:"Piedra mascota",
    precio:120,
    descripcion:"Es la mejor mascota que podrias tener... enserio",
    imagen:"imagenes/roca.png"
},
{
    nombre:"Rebanada de Pastel",
    precio:150,
    descripcion:"Esta bien, ganaste tu rebanada tomala si la completas",
    imagen:"imagenes/pastel.png"
},
{
    nombre:"Pastel Completo",
    precio:320,
    descripcion:"Si lo compras se acabara todo el pastel de la tienda",
    imagen:"imagenes/pastelentero.png"
},
{
    nombre:"Obsequio misterioso",
    precio:200,
    descripcion:"Quien sabe, tal vez valga la pena...",
    imagen:"imagenes/regalomisterioso.png"
},
{
    nombre:"Una paleta helada",
    precio:100,
    descripcion:"Perfecta para el calor... o no?",
    imagen:"imagenes/paleta.png"
},
{
    nombre:"Bolsa de Alepuntos",
    precio:120,
    descripcion:"Comprala, te conviene",
    imagen:"imagenes/alepuntos.png"
},
{
    nombre:"Pez en Bolsa",
    precio:200,
    descripcion:"Pez dorado aparentemente sano ",
    imagen:"imagenes/pez.png"
},
{
    nombre:"Autografo mio",
    precio:160,
    descripcion:"Si oficial, para mis -2 fans",
    imagen:"imagenes/autografo.png"
},
{
    nombre:"Mis huesos",
    precio:350,
    descripcion:"Porque quieres eso? Alejate de mi porfavor",
    imagen:"imagenes/huesos.png"
},
{
    nombre:"Alepunto",
    precio:1,
    descripcion:"Tomalo, te esforzaste mucho por ello, lo se",
    imagen:"imagenes/alepunto.png"
},
{
    nombre:"Flor",
    precio:175,
    descripcion:"Espero que la sepas cuidar, merece MUCHO cuidado",
    imagen:"imagenes/flor.png"
},
{
    nombre:"Retrato",
    precio:260,
    descripcion:"Te dibujare (no confies mucho)",
    imagen:"imagenes/retrato.png"
},
{
    nombre:"Taza",
    precio:120,
    descripcion:"Bueno... si tanto te gustan las tazas...",
    imagen:"imagenes/taza.png"
},
{
    nombre:"Viaje",
    precio:300,
    descripcion:"Cupon para un viaje CASI gratis a un lugar espectacular",
    imagen:"imagenes/vacaciones.png"
},
{
    nombre:"Trofeo",
    precio:2525,
    descripcion:"Solo abra uno para el primero que lo consiga y llevara su nombre",
    imagen:"imagenes/trofeo.png"
}
];

let ProductoSeleccionado=0;
let Botones=document.querySelectorAll(".Boton");

let NombreProducto=document.getElementById("Nombre");
let PrecioProducto=document.getElementById("Precio");
let DescripcionProducto=document.getElementById("Descripcion");
let ImagenProducto=document.getElementById("Imagen");
let MensajeCompra=document.getElementById("Mensaje");
let Cancela=document.getElementById("Cancelar");
let Enter=document.getElementById("Comprar");

for(let i=0; i<Botones.length;i++){
    Botones[i].onclick=function(){
        MostrarProducto(i);
    }
}

function ActualizarAlePuntos(){

    let Total = Number(localStorage.getItem("AlePuntos")) || 0;

    Dinero.textContent = Total+" Alepuntos";

}

function MostrarProducto(id){
    Sonido1.play();
    ProductoSeleccionado=id;
    MensajeCompra.style.transform = "translateY(-80%)";
    MensajeCompra.style.opacity = "1";
    MensajeCompra.style.pointerEvents="auto";
    NombreProducto.textContent=productos[id].nombre;
    ImagenProducto.src = productos[id].imagen;
    DescripcionProducto.textContent=productos[id].descripcion;
    PrecioProducto.textContent=productos[id].precio+"$";
    ActualizarAlePuntos();
    if(localStorage.getItem("Producto"+ProductoSeleccionado)=="Comprado"){
        Enter.disabled=true;
        Enter.textContent="Comprado"
    }
    else{
        Enter.disabled=false;
        Enter.textContent="Comprar"
    }
}

function ComprarProducto(){

    if(localStorage.getItem("Producto"+ProductoSeleccionado)=="Comprado"){
        return;
    }

    let Total = Number(localStorage.getItem("AlePuntos")) || 0;

    let Precio= productos[ProductoSeleccionado].precio;

    if(Total>=Precio){
        Sonido2.play();
        if(!Musica.paused){
            Musica.pause();
            setTimeout(function(){
                Musica.play();
            },3000);
        }
        CompraExitosa.style.display="flex";
        CompraExitosa.scrollIntoView;
        Total -= Precio;
        localStorage.setItem("AlePuntos", Total);
        localStorage.setItem("Producto"+ProductoSeleccionado, "Comprado");
        Enter.disabled=true;
        Enter.textContent="Comprado"
        Botones[ProductoSeleccionado].style.opacity="0.4";
        ActualizarAlePuntos();
        setTimeout(function(){
            CompraExitosa.style.display="none";
        },3000);
    }
    else{
        Sonido4.play();
        if(!Musica.paused){
            Musica.pause();
            setTimeout(function(){
                Musica.play();
            },1000);
        }
        CompraFallida.style.display="flex";
        CompraFallida.scrollIntoView
        setTimeout(function(){
            CompraFallida.style.display="none";

        },3000);
    }

}  

function ComprarTrofeo(){

    if(localStorage.getItem("Producto"+ProductoSeleccionado)=="Comprado"){
        return;
    }

    let Total = Number(localStorage.getItem("AlePuntos")) || 0;

    let Precio= productos[ProductoSeleccionado].precio;

    if(Total>=Precio){
        if(!Musica.paused){
            Musica.pause();

            setTimeout(function(){
                Musica.play();
            },37000);
        }

        setTimeout(function(){
            CompraExitosa.style.display="flex";
            CompraExitosa.scrollIntoView;
            Sonido2.play();
        },31000);

        setTimeout(function(){
            CompraExitosa.style.display="none";
            Premio.style.display="none";
        },37000);
        
        Sonido3.play();
        Premio.style.opacity="1";
        Premio.style.transform = "translateY(80%)";

        Premio.style.pointerEvents="auto";
        MensajeCompra.style.transform = "translateY(0)";
        MensajeCompra.style.opacity = "0";

        Total -= Precio;
        localStorage.setItem("AlePuntos", Total);
        localStorage.setItem("Producto"+ProductoSeleccionado, "Comprado");
        Enter.disabled=true;
        Enter.textContent="Comprado"
        Botones[ProductoSeleccionado].style.opacity="0.4";
        ActualizarAlePuntos();
    }
    else{
        Sonido4.play();
        if(!Musica.paused){
            Musica.pause();
            setTimeout(function(){
                Musica.play();
            },1000);
        }
        CompraFallida.style.display="flex";
        CompraFallida.scrollIntoView
        setTimeout(function(){
            CompraFallida.style.display="none";

        },3000);
    }

}  

function ComprarSaco(){

    if(localStorage.getItem("Producto"+ProductoSeleccionado)=="Comprado"){
        return;
    }

    let Total = Number(localStorage.getItem("AlePuntos")) || 0;

    let Precio= productos[ProductoSeleccionado].precio;

    if(Total>=Precio){
        Sonido2.play();
        if(!Musica.paused){
            Musica.pause();
            setTimeout(function(){
                Musica.play();
            },3000);
        }
        CompraExitosa.style.display="flex";
        CompraExitosa.scrollIntoView;
        Total -= Precio;
        Total += Precio*.5;
        localStorage.setItem("AlePuntos", Total);
        localStorage.setItem("Producto"+ProductoSeleccionado, "Comprado");
        Enter.disabled=true;
        Enter.textContent="Comprado"
        Botones[ProductoSeleccionado].style.opacity="0.4";
        ActualizarAlePuntos();
        setTimeout(function(){
            CompraExitosa.style.display="none";
        },3000);
    }
    else{
        Sonido4.play();
        if(!Musica.paused){
            Musica.pause();
            setTimeout(function(){
                Musica.play();
            },1000);
        }
        CompraFallida.style.display="flex";
        CompraFallida.scrollIntoView
        setTimeout(function(){
            CompraFallida.style.display="none";

        },3000);
    }

}  

Cancelar.addEventListener("click", function() {
    MensajeCompra.style.transform = "translateY(0)";
    MensajeCompra.style.opacity = "0";
    MensajeCompra.style.pointerEvents="none";
});

Enter.addEventListener("click", function(){
    if(productos[ProductoSeleccionado].nombre=="Trofeo"){
        ComprarTrofeo();
    }
    else if(productos[ProductoSeleccionado].nombre=="Bolsa de Alepuntos"){
        ComprarSaco();
    }
    else{
        ComprarProducto();
    }
});

for(let i=0; i<Botones.length;i++){
    if(localStorage.getItem("Producto"+i)=="Comprado"){
        Botones[i].style.opacity="0.4";
    }
}

//musica
let Musica=document.getElementById("Musica");
let Sonido=document.getElementById("Sonido");

Sonido.addEventListener("click", function () {

    if(Musica.paused){
        Musica.play();
        Sonido.style.backgroundImage=`url("imagenes/audioff.jpeg")`;
        console.log(Sonido.style.backgroundImage);
    }

    else{
        Musica.pause();
        Sonido.style.backgroundImage=`url("imagenes/audion.jpeg")`;
        console.log(Sonido.style.backgroundImage);
    }
});

Clave.addEventListener("click", function(){
    Musica.pause();
    Dibujo.style.backgroundImage=`url("imagenes/cursed.jpeg")`;
    Numero.style.display="block";
    Sonido.style.display="none";
});

Casino.addEventListener("click", function(){
    Musica.pause();
    setTimeout(function(){
        Sonido5.play();
    },500); 
    setTimeout(function(){
        window.location.href = "https://ale20025.github.io/Entrada/";
    },1000); 
});
