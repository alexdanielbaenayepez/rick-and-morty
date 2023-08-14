
const url1 = 'https://jsonplaceholder.typicode.com/posts/1/comments';
const url2 = 'https://rickandmortyapi.com/api/location';

let response = await fetch(url2)
let rik = await response.json(response)

console.log(rik)

export default rik;