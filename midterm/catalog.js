
const products = [
    "My First Fire",
    "Handy Hand",
    "NapSack",
    "Hot Tub Wildlife Feeder",
    "Toilet Meadow",
    "Pudding Pouch"
];


const productContainer = document.querySelector('.product-container');


products.forEach(product => {
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    
    const productImage = document.createElement('img');
    productImage.src = `images/${product.toLowerCase().replace(/ /g, '-')}.webp`;
productImage.alt = `${product} image`; 
productImage.classList.add('product-image'); 
productCard.appendChild(productImage);


    
    const productName = document.createElement('h4');
    productName.textContent = product;
    productCard.appendChild(productName);

    
    productContainer.appendChild(productCard);
});
