.then(response => response.json())
  .then(data => {
   
     /*=== categorias de producto ===*/   
    let categorias =[];  
    let categ= [];  
    for (let i of data) {
      categorias.push(i.category)
     
    }   
    categorias.forEach( (elemento) => {
      if (!categ.includes(elemento)) {
        categ.push(elemento);
      }
    });
   
    
  })
  .catch(console.error);

