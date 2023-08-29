

# Acerca de 
## rick and morty api usan callbacks, promises y callback queue.

Escribi una aplicacion cliente que tomara datos de una api y los dibujara en el navegador, todo esto sin node, librerias o frameworks.
La idea principal es aplicar conocimientos sobre JS vanilla tales como **callbacks, promises, callback queue,** nucleo JS 

## Pila de Tecnologias

El proyecto esta alojado en [Github](https://github.com/alexbyd/rick-and-morty) y desplegado en  [vercel](https://rick-and-morty-pi-two.vercel.app/)

* Javascript
* HTML
* CSS
* API


### Temas tratados

* innerHTML
* querySelector
* getElementById
* addEventListener
* DOM manipulation
* keyCode
* CSS Calc
* CSS Variables
* Flexbox
* JSON.parse
* forEach
* API documentation.

## Enfoque 

Lo principal es traer los datos de la API y procesarlos, luego se dio estructura con elementos creados a partir de JavaScript y técnicas de diseño CSS flexbox.


````ecmascript 6
const url = 'https://rickandmortyapi.com/api/character';

let response = await fetch(url)
let rik = await response.json(response)
export default rik;
````


![Imgur](https://i.imgur.com/GC81PDPl.png)


````css
#search {
  width: var(--withForm);
  height: calc(var(--withForm) - 19.7rem);
  color: #090808;
  border: 1px solid #dfe1e5;
  border-radius: var(--borderRadius);
  margin: 0 auto;
}
````
````css
.box{
  width: 20%;
  flex: 0 0 18em;
  border: 1px solid var(--fourth-color);
  border-radius: var(--borderRadius);
  background-color: white;
}
````

![Imgur](https://i.imgur.com/AB3mvJdl.png)
