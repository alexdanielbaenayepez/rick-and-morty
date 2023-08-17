import rik from "./module.mjs";

    var root = document.getElementById("root");

    for (var i = 0; rik.results.length; i++){
      var avatar = document.createElement("img")
      avatar.src = rik.results[i].image;
      root.appendChild(avatar)
    }





















  console.log()

var box = document.createElement('div');
  box.className= 'box';
  root.appendChild(box);





  // --------------------------------------------------------------------

  document.getElementById("search").addEventListener('click', function () {
    var input = document.getElementById("search").value;
  })

