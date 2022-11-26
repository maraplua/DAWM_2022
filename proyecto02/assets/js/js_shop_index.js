/*=== JS ===*/
fetch("https://fakestoreapi.com/products")

  .then(response => response.json())
  .then(data => {
    document.getElementById('productos').innerHTML = ''
    
    let categorias =[];
    
    for (let i of data) {
      categorias.push(i.category)
      let plantilla = `          
        <div class="col-md-4">
          <div class="card mb-4 product-wap rounded-0">
            <div class="card rounded-0">
              <img class="card-img rounded-0 img-fluid" src="${i.image}">
                <div
                  class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul class="list-unstyled">
                    <li><a class="btn btn-success text-white" href="shop-single.html"><i
                      class="far fa-heart"></i></a></li>
                    <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i
                      class="far fa-eye"></i></a></li>
                    <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i
                      class="fas fa-cart-plus"></i></a></li>
                  </ul>
                </div>
            </div>
            <div class="card-body">
              <a href="shop-single.html" class="h3 text-decoration-none">${i.title}</a>
              <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                <li>${i.category}</li>

              </ul>
              <ul class="list-unstyled d-flex justify-content-center mb-1">
                <li>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-muted fa fa-star"></i>
                  <i class="text-muted fa fa-star"></i>
                </li>
              </ul>
              <p class="text-center mb-0"> $${i.price}</p>
            </div>
          </div>
        </div>
        
          `
      document.getElementById("productos").innerHTML += plantilla
    }

    /*=== categorias de producto ===*/
    
    let categ= [];
    categorias.forEach( (elemento) => {
      if (!categ.includes(elemento)) {
        categ.push(elemento);
      }
    });
    document.getElementById('categorias').innerHTML = ''
    for(let j of categ){
      let plantilla_categ= `
        <li class="pb-3">
          <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
            ${j}                          
          </a>                        
        </li>    
      `
      document.getElementById("categorias").innerHTML += plantilla_categ

    }
    
  })
  .catch(console.error);

