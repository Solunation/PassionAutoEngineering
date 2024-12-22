const dialog = document.getElementById("product-dialog");

var products = [...new_products["granulation & material handing"], ...new_products["ointment, plm, formulations"]];

$(document).ready(function () {
  if ($('.service_carousel').length) {
    $('.service_carousel').owlCarousel({
      loop: true,
      items: 4,
      margin: 30,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      dots: false,
      autoWidth: false,
      autoplay: 5000,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
          autoWidth: false
        },
        380: {
          items: 1,
          dots: false,
          autoWidth: false
        },
        667: {
          items: 2,
          dots: false,
          autoWidth: false
        },
        992: {
          items: 3,
          dots: false,
          autoWidth: false
        },
        1000: {
          items: 4,
          autoWidth: false
        }
      }
    });
  };
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

function closeDialog() {
  dialog.close();
}

function showDialog(productId) {
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
