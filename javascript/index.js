import rik from "./module.mjs";


    for (var i = 0; rik.results.length; i++){

      var box = document.createElement('div');
      box.className= 'box';

      var containerImagen = document.createElement('div')
      containerImagen.className = "containerImagen",
      containerImagen.style.textAlign = "center";
      var avatar = document.createElement("img")
      avatar.src = rik.results[i].image
      avatar.className = "avatar"
      containerImagen.appendChild(avatar)

      var hr = document.createElement('hr')

      var nombre = document.createElement('h2')
          nombre.innerText = "Nombre: " + rik.results[i].name;

      var status = document.createElement('p')
          status.innerText = "Status: " + rik.results[i].status;

      var descripcion = document.createElement('p')
          descripcion.innerText = 'Type: ' + rik.results[i].type;
          descripcion.className= 'margin-bottom'

      box.appendChild(containerImagen)
      box.appendChild(hr)
      box.appendChild(nombre)
      box.appendChild(status)
      box.appendChild(descripcion)

      root.appendChild(box);

    }
  //------------------------------------------------------------------------

  document.getElementById("submit").addEventListener('click', function () {
    var input = document.getElementById("search").value;
    console.log(input)
    enviarAlDom(input)
    //el evento onchonge tiene que ver con la actualizacion de los datos de entrada en el input
    // https://es.javascript.info/events-change-input
  })

function enviarAlDom(input) {
  var root = document.getElementById("root");
  root.innerText = input
}

