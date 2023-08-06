products.slice(0,2).forEach(product =>{
    const productDiv = document.createElement('div');
    productDiv.setAttribute("class", "product-card-home")
    productDiv.innerHTML = 
    `
        <img class="product-card-img" src="${product.images[0]}" alt="Product Image"></img> 
        <div class="product-card-desc">
            <h6>${product.title}</h6>
            <p>${product.subTitle}</p>
            <div>
                <button class="btn btn-custom">Read More</button>
            </div>
        <div>
    `;
    document.getElementById('featured-products').appendChild(productDiv);
});
