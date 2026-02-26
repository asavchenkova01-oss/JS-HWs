// ცვლადები
const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const priceSlider = document.getElementById("priceSlider");
const priceValue = document.getElementById("priceValue");
const productForm = document.getElementById("productForm");
const contactForm = document.getElementById("contactForm");

let allProducts = []; 
let currentSlide = 0; 

// მოგვაქვს დატა და ვაჩენთ პროდუქტებს/კატეგორიებს/სლაიდერს
function getProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            allProducts = data;

            const prices = allProducts.map(p => p.price);
            const highestPrice = Math.max(...prices);
            const maxLimit = Math.ceil(highestPrice); 

            priceSlider.max = maxLimit;
            priceSlider.value = maxLimit;
            priceValue.textContent = maxLimit;

            setupSlider();
            renderProducts(allProducts);
            renderCategories();
        })
}
getProducts();

// სლაიდერის ფუნქცია
function setupSlider() {
    const slidesContainer = document.querySelector(".slides");
    slidesContainer.innerHTML = "";

    allProducts.forEach((product, index) => {
        const slideDiv = document.createElement("div");
        slideDiv.className = (index === 0) ? "slide active" : "slide";
        slideDiv.innerHTML = `<img src="${product.image}">`;
        slidesContainer.appendChild(slideDiv);
    });
}

// პროდუქტების გამოსაჩენი ფუნქცია
function renderProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <div class="actions">
                <button onclick="deleteProduct(${product.id})">Delete</button>
                <button onclick="updateProduct(${product.id})">Update</button>
            </div>
        `;
        productsContainer.appendChild(div);
    });
}

// ვამატებთ კატეგორიებს
function renderCategories() {

    const categories = [];
    allProducts.forEach(product => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
            const option = document.createElement("option");
            option.value = product.category;
            option.textContent = product.category;
            categorySelect.appendChild(option);
        }
    });
}

// ფილტრები
function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const maxPrice = Number(priceSlider.value);

    const filtered = allProducts.filter(product => {
        const matchesName = product.title.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice = Number(product.price) <= maxPrice;

        return matchesName && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
}

// სლაიდერი
function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove("active");

    currentSlide = currentSlide + step;

    if (currentSlide >= slides.length) {
        currentSlide = 0; 
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}

// პროდუქტის წაშლა
function deleteProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
        allProducts = allProducts.filter(p => p.id !== id);
        applyFilters();
    });
}

// პროდუქტის განახლება
function updateProduct(id) {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
        const product = allProducts.find(p => p.id === id);
        if (product) {
            product.title = newTitle;
            applyFilters();
        }
    }
}

// პროდუქტის დამატება
productForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const errorDisplay = document.getElementById("formError");
    errorDisplay.style.display = "none";

    const formData = new FormData(productForm);
    const data = Object.fromEntries(formData.entries());

    if (!data.title || !data.price || !data.category || !data.image || !data.date) {
        errorDisplay.textContent = "Error: Please fill in all fields!";
        errorDisplay.style.display = "block";
        return;
    }

    if (Number(data.price) <= 0) {
        errorDisplay.textContent = "Error: Price must be a positive number!";
        errorDisplay.style.display = "block";
        return;
    }

    fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        allProducts.push({ 
            ...data, 
            id: Date.now(), 
            price: Number(data.price) 
        });
        
        productForm.reset();
        applyFilters(); 
        alert("Product added successfully!");
    })
});

// ვუსმენთ ფილტრებს
searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);
priceSlider.addEventListener("input", () => {
    priceValue.textContent = priceSlider.value;
    applyFilters();
});

// სლაიდერის ღილაკები
document.querySelector(".next").addEventListener("click", () => moveSlide(1));
document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
setInterval(() => moveSlide(1), 3000);

// ბურგერი
document.getElementById("burger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active")
});

// საკონტაქტო ფორმა

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const errorDisplay = document.getElementById("contactError");
    errorDisplay.style.display = "none";

    const formData = new FormData(contactForm);
    const contactData = Object.fromEntries(formData.entries());

    if (!contactData.userName || !contactData.userEmail || !contactData.userMessage) {
        errorDisplay.textContent = "Error: All contact fields are required!";
        errorDisplay.style.display = "block";
        return;
    }

    if (!contactData.userEmail.includes("@")) {
        errorDisplay.textContent = "Error: Please enter a valid email address!";
        errorDisplay.style.display = "block";
        return;
    }

    alert(`Thank you, ${contactData.userName}! Your message has been sent.`);
    contactForm.reset();
});