
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }
  
  
  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  
  const products = [
    { name: "Nemlendirici", price: 199, image: "nemlendirici.jpg" },
    { name: "Göz Kremi", price: 149, image: "göz kremi.jpg" },
    { name: "Cilt Serumu", price: 249, image: "cilt serumu.jpg" },
    { name: "Güneş Kremi", price: 179, image: "güneş kremi.jpg" },
    { name: "Ruj", price: 99, image: "ruj.jpg" },
  ];
  
  const productGrid = document.getElementById("productGrid");
  
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100%">
      <h3>${product.name}</h3>
      <p>${product.price}₺</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Sepete Ekle</button>
    `;
    productGrid.appendChild(card);
  });
  
  
  let cart = [];
  
  
  function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} sepete eklendi.`);
    updateCartTotal();
  }
  
  
  function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log("Toplam Sepet Tutarı: " + total + "₺");
  }
  
  
  window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 100);
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("mouseenter", () => card.style.transform = "scale(1.05)");
      card.addEventListener("mouseleave", () => card.style.transform = "scale(1)");
    });
  });
  
 
  
const allProducts = [
    { name: "Nemlendirici", price: 199, category: "Cilt Bakımı", image: "nemlendirici.jpg" },
    { name: "Göz Kremi", price: 149, category: "Cilt Bakımı", image: "göz kremi.jpg" },
    { name: "Fondöten", price: 299, category: "Makyaj", image: "fondöten.jpg" },
    { name: "Allık", price: 129, category: "Makyaj", image: "allık.jpg" },
    { name: "Güneş Kremi", price: 179, category: "Cilt Bakımı", image: "güneş kremi.jpg" },
  ];
  
  
  function loadProducts(productsToShow) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";
    productsToShow.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="100%">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>${product.price}₺</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Sepete Ekle</button>
      `;
      grid.appendChild(card);
    });
  }
  
  
  if (window.location.pathname.includes("products.html")) {
    loadProducts(allProducts);
  }
  
  
  function applyFilters() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const min = parseInt(document.getElementById("minPrice").value) || 0;
    const max = parseInt(document.getElementById("maxPrice").value) || Infinity;
  
    const filtered = allProducts.filter(product => {
      return (
        product.name.toLowerCase().includes(search) &&
        (category === "Hepsi" || product.category === category) &&
        product.price >= min &&
        product.price <= max
      );
    });
  
    loadProducts(filtered);
  }

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");
  
    
    if (name === "") {
      formMessage.style.color = "red";
      formMessage.innerText = "Adınızı girmeniz gerekiyor.";
      return false;
    }
  
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "" || !emailPattern.test(email)) {
      formMessage.style.color = "red";
      formMessage.innerText = "Lütfen geçerli bir e-posta adresi girin.";
      return false;
    }
  
    
    if (message === "") {
      formMessage.style.color = "red";
      formMessage.innerText = "Mesajınızı yazmanız gerekiyor.";
      return false;
    }
  
    
    formMessage.style.color = "green";
    formMessage.innerText = "Mesajınız başarıyla gönderildi!";
    return true;
  }
  function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} sepete eklendi.`);
    updateCartTotal();
    updateCartDisplay();
  }
  function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price}₺`;
      cartItems.appendChild(li);
    });
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cartTotal").textContent = `Toplam: ${total}₺`;
  }
    