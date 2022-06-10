const myRequest = new Request('https://pokeapi.co/api/v2/pokemon/54');
const myInit = {
  method: 'GET'
};
fetch(myRequest, myInit)
  .then(response => response.json())
  .then(data => {
    console.log('data', data);
  })
  .catch(console.error);
