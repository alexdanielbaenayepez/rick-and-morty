import rik from "./module.mjs";

    var root = document.getElementById("root");

    for (var i = 0; rik.results.length; i++){

      var box = document.createElement('div');
      box.className= 'box';

      var avatar = document.createElement("img")
      avatar.src = rik.results[i].image

      var hr = document.createElement('hr')

      var nombre = document.createElement('h1')
          nombre.innerText = "Nombre: " + rik.results[i].name;

      var status = document.createElement('h2')
          status.innerText = "Status: " + rik.results[i].status;

      var descripcion = document.createElement('p')
          descripcion.innerText = "Type: " + rik.results[i].type;

      box.appendChild(avatar)
      box.appendChild(hr)
      box.appendChild(nombre)
      box.appendChild(status)
      box.appendChild(descripcion)
      root.appendChild(box);

    }





  //------------------------------------------------------------------------








  

  // --------------------------------------------------------------------

  document.getElementById("search").addEventListener('click', function () {
    var input = document.getElementById("search").value;
  })

