
//const url2 = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive'
//const url1 = 'https://jsonplaceholder.typicode.com/posts/1/comments';


var input = document.getElementById("search")
  input.addEventListener("keyup",(e)=> {

    if("keypres" === "Enter")
      return e.value
  })

const url = `https://rickandmortyapi.com/api/character/` //?name=${input}; la busqueda esta funcionando, lo que no logro controlar es el input porque me arroja un error como si fuera un b¿objeto pero lo voy a lolucionar con el video de onemonth
let response = await fetch(url)
let rik = await response.json(response)
export default rik;

console.log(url)

/**
 * https://www.codebrainer.com/blog/how-to-create-javascript-list-filter-and-search-for-records
 *
 * aqui hay en ejemplo de como hacer una lista donde seleccionar un tipo de indice dentro de una busqueda, o mejor dicho una categoria
 *
* Array.filter
 * Array.find
 * loops
 * Array.includes
 * Array.findIndex
 *
 * https://github.com/EvilInsultGenerator/website
 * api para pruevas, esta se puede almacenar en un array y presentar varios ya que la api solo envia un insulto por rerquest
 *
 *
 *
 * -----------------------------------------------------------
 *
 *
 * var input = document.getElementById('name');
 * var inputValue = document.getElementById('input-value');
 * var debounceValue = document.getElementById('debounce-value');
 *
 *
 * const updateInputValue = () => {
 *   inputValue.innerHTML = input.value;
 * }
 *
 * const updateDebounceValue = () => {
 *   debounceValue.innerHTML = input.value;
 * }
 *
 * let debounceTimer;
 *
 * const debounce = (callback, time) => {
 *   window.clearTimeout(debounceTimer);
 *   debounceTimer = window.setTimeout(callback, time);
 * };
 *
 * input.addEventListener(
 *   "input",
 *   () => {
 *     updateInputValue();
 *     debounce(updateDebounceValue, 500)
 *   },
 *   false
 * );
* */


