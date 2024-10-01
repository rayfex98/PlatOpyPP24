fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));