var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://getpantry.cloud/apiv1/pantry/35698a2c-de28-4063-9866-44aea64b67b9/basket/lista", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//35698a2c-de28-4063-9866-44aea64b67b9 Pantry id