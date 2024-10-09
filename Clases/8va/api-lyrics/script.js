fetch('https://api.lyrics.ovh/v1/Don Omar/Virtual Diva')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    parrafo = document.getElementById("letra");
    const {lyrics} = data;
    parrafo.innerHTML = `${lyrics}`;
  }
  )
  .catch(error => {
    console.error('Error:', error);
    alert("Cancion no encontrada");
  }
);
