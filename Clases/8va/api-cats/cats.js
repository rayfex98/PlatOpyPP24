fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => console.log(data.fact))
  .catch(error => console.error('Error:', error));
