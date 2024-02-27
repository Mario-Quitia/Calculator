// Esta función es para hacer click en cualquier parte del contenedor
let allcontainercart = document.querySelector('.products');
let buyThings=[];

// Función para cargar los event listeners
function loadEventListeners() {
    allcontainercart.addEventListener('click', addProduct);
}

// Llama a la función para cargar los event listeners
loadEventListeners();

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        // Aquí puedes realizar las acciones que desees cuando se hace clic en el botón "add to cart"
        console.log(e.target.parentElement);
        const selectProduct=e.target.parentElement
       readthecontent(selectProduct);
    }
}

function readthecontent(product) {
    const infoproduct = {
        Image:product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount:1
    }

    buyThings=[...buyThings,infoproduct]
    loadHtml();
    console.log(infoproduct);
}; 

function loadHtml() {
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <div class="item">
                <img src="${image}" alt="">
                <div class="item-content">
                    <h5>${title}</h5>
                    <h5 class="cart-price">${price}$</h5>
                    <h6>Amount: ${amount}</h6>
                </div>
                <span class="deleteproduct">X</span>
            </div>`;
        // Agregar la fila al contenedor deseado (por ejemplo, un div con la clase "container")
        document.querySelector('.container').appendChild(row);
    });
}