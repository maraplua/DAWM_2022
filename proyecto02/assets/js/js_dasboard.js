window.addEventListener('DOMContentLoaded', (event) => {
  cargarDatos()
  Filtrar()

});

let cargarDatos = () => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
      /*=== categorias de producto ===*/
      let categorias = [];
      let categ = [];
      for (let i of data) {
        categorias.push(i.category)

      }
      categorias.forEach((elemento) => {
        if (!categ.includes(elemento)) {
          categ.push(elemento);
          console.log(elemento)
        }
      });


      for (let i of categ) {
        let plan = `
          <option id="${i}">${i}</options>
          `
        document.getElementById("opciones").innerHTML += plan
      }



    })
    .catch(console.error);
}

let Filtrar = () => {

  /*=== categorias de producto ===*/
  let select = document.getElementById("opciones")
  select.addEventListener("change", (event) => {
    let valor = event.target.value;
   
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        let articulo_categ = data.filter(data => data.category == valor)
        document.getElementById("chart").innerHTML = ''
        // grafica 1
        for (let i of articulo_categ) {
          let plantilla =`
            <tr>
              <th scope="row"> ${i.title.slice(0,10)} </th>
              <td style="--size:calc(${i.price }/200)"> $${i.price} </td>     
            </tr>                              

          `
          document.getElementById("chart").innerHTML += plantilla
        }
      // grafica 2
        document.getElementById("tchart2").innerHTML = ''
        
        for (let i of articulo_categ) {
          let plantilla2 =`
            <tr>
              <th scope="row"> ${i.title.slice(0,10)} </th>
              <td style="--size:calc(${i.rating.rate})"> ${i.rating.rate} </td>     
            </tr>           
           

          `
          document.getElementById("tchart2").innerHTML += plantilla2
        }

        document.getElementById("filtro").innerHTML = ''
        
        for (let i of articulo_categ) {
          let plantilla3 =`
          <tr>
            <th scope="row"> ${i.title.slice(0,10)} </th>
            <td> $${i.price }</td>
            <td> ${i.rating.rate} </td>           
          </tr>                   

          `
          document.getElementById("filtro").innerHTML += plantilla3
        }



      })
      .catch(console.error);




  })

}
