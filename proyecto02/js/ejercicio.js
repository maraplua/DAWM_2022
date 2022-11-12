/*=== JS ===*/
fetch("https://fakestoreapi.com/products")

  .then(response => response.json())
  .then(data => {
    document.getElementById('respuesta').innerHTML = ''

        for( let i of data) {
          let plantilla = `
          <div class="card">
          <img src="${i.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${i.title}</h5>
            <p class="card-text">${i.description.slice(0,150)}...</p>            
          </div>
        </div>
          `        
          document.getElementById("respuesta").innerHTML += plantilla
        }
  })
  .catch(console.error);