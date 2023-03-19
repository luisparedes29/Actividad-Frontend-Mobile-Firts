import './styles.css'
import './index.html';
// import './imagenes';

_toogle.onclick = () => {
    _items.classList.toggle("open")
}


let li = document.getElementsByClassName("nosotros__item");
let ul = document.getElementsByClassName('nosotros__item--oculto')
console.log(li);
for (let i = 0; i < li.length; i++) {
    li[i].onclick = () => {
        ul[i].classList.toggle('claseNose');
    }
}


// slider

let contenedor = document.getElementById('contenedor_slider');
let auto = 0;
setInterval(() => {
    auto++;
    if (auto > 1) {
        contenedor.insertBefore(contenedor.lastChild, contenedor.firstChild);
    }

}, 3000);


const Swal = require('sweetalert2')

const formElement = document.getElementById('suscripcion')

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let datos = { nombre: nombre, email: email }
    let datosJson = JSON.stringify(datos);
    console.log(datosJson);

    fetch("http://localhost:3000", {
        method: 'Post',
        body: datosJson
    }).then((x) => {
        console.log(x)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tus datos han sido enviados',
            showConfirmButton: false,
            timer: 1200,
        });
    })

    formElement.reset();
})

