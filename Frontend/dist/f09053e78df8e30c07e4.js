import"./styles.css";import"./index.html";_toogle.onclick=function(){_items.classList.toggle("open")};var li=document.getElementsByClassName("nosotros__item"),ul=document.getElementsByClassName("nosotros__item--oculto");console.log(li);for(var _loop=function(e){li[e].onclick=function(){ul[e].classList.toggle("claseNose")}},i=0;i<li.length;i++)_loop(i);var contenedor=document.getElementById("contenedor_slider"),auto=0;setInterval((function(){++auto>1&&contenedor.insertBefore(contenedor.lastChild,contenedor.firstChild)}),3e3);var Swal=require("sweetalert2"),formElement=document.getElementById("suscripcion");formElement.addEventListener("submit",(function(e){e.preventDefault();var t={nombre:document.getElementById("nombre").value,email:document.getElementById("email").value},o=JSON.stringify(t);console.log(o),fetch("http://localhost:3000",{method:"Post",body:o}).then((function(e){console.log(e),Swal.fire({position:"center",icon:"success",title:"Tus datos han sido enviados",showConfirmButton:!1,timer:1200})})),formElement.reset()}));