// Definición inicial de la lista de productos.
const product = [
  // Productos regulares
  { id: 0, image: '/producto1.png', title: 'Ropa gótica', price: 120, category: 'Productos' },
  { id: 1, image: '/producto2.png', title: 'Ropa gótica', price: 60, category: 'Productos' },
  { id: 2, image: '/producto3.png', title: 'Ropa gótica', price: 230, category: 'Productos' },
  { id: 3, image: '/producto4.png', title: 'Ropa gótica', price: 230, category: 'Productos' },
  { id: 4, image: '/producto3.png', title: 'Ropa gótica', price: 230, category: 'Productos' },
  { id: 5, image: '/producto5.png', title: 'Ropa gótica', price: 230, category: 'Productos' },
            
  // Productos en promoción
  { id: 6, image: '/promocion1.png', title: 'Ropa gótica en promoción', price: 80, category: 'Promociones' },
  { id: 7, image: '/Promocion2.png', title: 'Ropa gótica en promoción', price: 50, category: 'Promociones' },
  { id: 8, image: '/promocion3.png', title: 'Ropa gótica en promoción', price: 80, category: 'Promociones' },
  { id: 9, image: '/promocion4.png', title: 'Ropa gótica en promoción', price: 50, category: 'Promociones' },

  // Novedades
  { id: 10, image: '/producto7.png', title: 'Ropa gótica nueva', price: 50, category: 'Novedades' },
  { id: 11, image: '/producto8.png', title: 'Ropa gótica nueva', price: 50, category: 'Novedades' }
];



// Extracción única de categorías de productos.
const categories = ['Productos', 'Promociones', 'Novedades']; // Orden definido



// Carrito de compras.
let cart = [];


// Agregar un producto al carrito.
function addtocart(productId) {
  const productToAdd = product.find(item => item.id === productId);
  if (productToAdd) {
    cart.push(productToAdd);
    displaycart();
  }
}

// Eliminar un producto del carrito.
function delElement(index) {
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    displaycart();
  }
}

// Mostrar el carrito de compras.
function displaycart() {
  document.getElementById("count").textContent = cart.length;
  let total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    document.getElementById('cartItem').textContent = "Tu carrito está vacío";
    document.getElementById("total").textContent = "$ 0.00";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((item, index) => `
        <div class='cart-item'>
            <div class='row-img'>
                <img class='rowimg' src=${item.image}>
            </div>
            <p style='font-size:12px;'>${item.title}</p>
            <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
            <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
        </div>
    `).join('');
    document.getElementById("total").textContent = `$ ${total}.00`;
  }
}

// Renderizado de categorías y productos en el HTML.
window.onload = function() {
  document.getElementById('root').innerHTML = categories.map(category => {
    const productsInCategory = product.filter(item => item.category === category);
    return `<div class='category' style='display: flex; flex-direction: row; justify-content: space-around; flex-wrap: wrap;'>
              <h2 style='width: 100%; text-align: center;'>${category}</h2>
              ${productsInCategory.map(item => `
                  <div class='box'>
                      <div class='img-box'>
                          <img class='images' src=${item.image}></img>
                      </div>
                      <div class='bottom'>
                          <p>${item.title}</p>
                          <h2>$ ${item.price}.00</h2>
                          <button onclick='addtocart(${item.id})'>Agregar al carrito</button>
                      </div>
                  </div>
              `).join('')}
            </div>`;
  }).join('');
  
};
