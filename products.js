fetch("products.json")
.then(function(response){
  return response.json();
})
.then(function(products){
  let placeholder = document.querySelector("#ready");
  let out = "";
  for(let product of products){
    out += `
      <ul>
        <div class="col-lg-2">
          <img src="${product.image.src}" style="width: ${product.image.width}px; height: ${product.image.height}px;">
          <br>
          <br>
          <h5>${product.title}</h5>
          <small>${product.date}</small>
          <small>${product.theme}</small>
        </div>
      </ul>
    `
  }

  placeholder.innerHTML = out;
})