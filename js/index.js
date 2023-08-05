products.slice(0,2).forEach(product =>{
    const productDiv = document.createElement('div');
    productDiv.setAttribute("class", "product-card")
    productDiv.innerHTML = 
    `
        <img class="product-card-img" src="${product.images[0]}" alt="Product Image"></img> 
        <div>
            <h6>${product.title}</h6>
            <p>${product.subTitle}</p>
        <div>
    `;
    document.getElementById('featured-products').appendChild(productDiv);
});
