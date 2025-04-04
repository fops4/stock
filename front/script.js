const API_URL = "http://localhost:5000/api/products";
const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    name: form.name.value,
    category: form.category.value,
    quantity: parseInt(form.quantity.value),
    price: parseFloat(form.price.value),
    supplier: form.supplier.value,
    inStock: form.inStock.checked
  };

  const productId = form.productId.value;

  if (productId) {
    // UPDATE
    await fetch(`${API_URL}/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
  } else {
    // CREATE
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
  }

  form.reset();
  fetchProducts();
});

async function fetchProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();

  productList.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <div>
        <strong>${p.name}</strong> (${p.category})<br>
        Quantité: ${p.quantity} | Prix: ${p.price} FCFA<br>
        Fournisseur: ${p.supplier} | ${p.inStock ? "✅ En stock" : "❌ Rupture"}
      </div>
      <div class="product-actions">
        <button class="btn btn-primary" onclick="editProduct('${p._id}')">✏️ Modifier</button>
        <button class="btn btn-secondary" onclick="deleteProduct('${p._id}')">🗑 Supprimer</button>
      </div>
    `;
    productList.appendChild(div);
  });
}

async function editProduct(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const product = await res.json();

  form.productId.value = product._id;
  form.name.value = product.name;
  form.category.value = product.category;
  form.quantity.value = product.quantity;
  form.price.value = product.price;
  form.supplier.value = product.supplier;
  form.inStock.checked = product.inStock;
}

async function deleteProduct(id) {
  if (confirm("Confirmer la suppression du produit ?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchProducts();
  }
}

fetchProducts();
