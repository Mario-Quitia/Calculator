document.addEventListener('DOMContentLoaded', function() {
  const productsContainer = document.querySelector('.products-container');
  productsContainer.addEventListener('click', addProduct);

  // Consolidamos la inicialización de los oyentes de eventos
  loadEventListeners();
});

let modal = document.getElementById("modalCarrito");
let botonVaciar = document.getElementById("botonVaciar");
let cerrarModal = document.querySelector('.close-button'); // Cambiado a querySelector para ser consistente
let iconoCarrito = document.getElementById("iconoCarrito");
let cartItems = [];

function loadEventListeners() {
  iconoCarrito.addEventListener('click', (event) => {
      event.preventDefault();
      abrirModal();
  });

  cerrarModal.addEventListener('click', cerrarModalFuncion);
  botonVaciar.addEventListener('click', vaciarCarrito);
}

function abrirModal() {
  modal.style.display = "block";
  loadHtml();
}

function cerrarModalFuncion() {
  modal.style.display = "none";
}

function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains('btn-add-cart')) {
      const product = e.target.closest('.product');
      getProductInfo(product);
  }
}

function getProductInfo(product) {
  const productInfo = {
      image: product.querySelector('img').src,
      title: product.querySelector('.product-title').textContent,
      id: product.querySelector('.product-id').textContent,
      description: product.querySelector('.product-description').textContent,
      price: product.querySelector('.product-price').textContent,
      quantity: 1
  };

  const exists = cartItems.findIndex(item => item.id === productInfo.id);
  if (exists === -1) {
      cartItems.push(productInfo);
  } else {
      cartItems[exists].quantity += 1;
  }

  loadHtml();
}

function loadHtml() {
  const container = document.getElementById('productosEnCarrito');
  container.innerHTML = ''; // Limpiar el contenedor

  cartItems.forEach(product => {
      const row = document.createElement('div');
      row.innerHTML = `
          <img src="${product.image}" width="50" alt="${product.title}">
          <div>
              <h4>${product.title}</h4>
              <p>${product.description}</p>
              <p>Precio: ${product.price}</p>
              <p>Cantidad: ${product.quantity}</p>
          </div>
      `;
      container.appendChild(row);
  });
}

function vaciarCarrito() {
  cartItems = [];
  loadHtml();
}
