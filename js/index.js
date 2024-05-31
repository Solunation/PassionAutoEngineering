const dialog = document.getElementById("product-dialog");

var products = [...new_products["granulation & material handing"], ...new_products["ointment, plm, formulations"]];

products.slice(0,2).forEach((product, i) =>{
    const productDiv = document.createElement('div');
    productDiv.setAttribute("class", "product-card-home")
    productDiv.innerHTML = 
    `
        <img class="product-card-img" src="${product.images[0]}" alt="Product Image"></img> 
        <div class="product-card-desc">
            <h6>${product.title}</h6>
            <p>${product.subTitle}</p>
            <div>
                <button class="btn btn-custom" onclick="showDialog(${i})">Read More</button>
            </div>
        <div>
    `;
    document.getElementById('featured-products').appendChild(productDiv);
});


const scrollers = document.querySelectorAll(".scroller");
addAnimation();


function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

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
