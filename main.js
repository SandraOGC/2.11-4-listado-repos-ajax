"use strict";

var boton = document.querySelector(".boton");
var userName = document.querySelector(".username");
var nombre= document.querySelector(".name");
var profile= document.querySelector(".foto");
var repositorios=document.querySelector(".repos");


function perfil() {

  var valor = userName.value;
  fetch("https://api.github.com/users/" + valor)
    .then(function(response) {
        console.log(response);
      return response.json();
    })
    .then(function(json) {
        nombre.innerHTML=json.name;
        repositorios.innerHTML=json.public_repos;
      profile.src= json.avatar_url;
    });
}

boton.addEventListener("click", perfil);