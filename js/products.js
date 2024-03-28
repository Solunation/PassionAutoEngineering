const dialog = document.getElementById("product-dialog");

products.forEach((product, i) =>{
    const productDiv = document.createElement('div');
    productDiv.setAttribute("class", "product-card")
    productDiv.innerHTML = 
    `
        <img class="product-card-img" src="${product.images[0]}" alt="Product Image"></img> 
        <div>
            <h6>${product.title}</h6>
            <p>${product.subTitle}</p>
            <div>
                <button class="btn btn-custom" onclick="showDialog(${i})">Read More</button>
            </div>
        <div>
    `;
    document.getElementById('products-container').appendChild(productDiv);
});

function closeDialog(){
    dialog.close();
}

function showDialog(productId){
    console.log(products[productId]);
    dialog.innerHTML = 
    `
    <button style="position:absolute; top: 5px; right: 5px; border: none; border-radius: 50%;" onclick="closeDialog()"><i class="bi bi-x-lg"></i></button>
    <div style="display:flex; height: 85vh; gap: 1em;">
        <div>
            <img style="height: 40em;" src="${products[productId].images[0]}" alt="Product Image"></img> 
        </div>
        <div style="overflow: auto;">
            <h1>${products[productId].title}</h1>
            <h2>${products[productId].subTitle}</h2>
            <p>${products[productId].details}</p>
        </div>
    </div>`;
    dialog.showModal();
}