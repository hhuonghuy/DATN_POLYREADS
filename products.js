document.addEventListener("DOMContentLoaded", function() {
  let productContainer = document.querySelector("#product-container");
  let paginationContainer = document.querySelector("#pagination-container");
  let products = [];
  let perPage = 20;
  let totalProducts = 100;
  let totalPages = Math.ceil(totalProducts / perPage);
  let currentPage = 1;

  for (let i = 1; i <= totalProducts; i++) {
      let productHTML = `
          <div class="product">
              <img src="book${i % 10 + 1}.jpg" alt="Sách ${i}">
              <h3>Sách ${i}</h3>
              <p>Giá: ${(i % 4 + 1) * 50000}đ</p>
              <button>Thêm vào giỏ</button>
          </div>
      `;
      products.push(productHTML);
  }

  function renderProducts(page) {
      productContainer.innerHTML = "";
      let start = (page - 1) * perPage;
      let end = start + perPage;
      productContainer.innerHTML = products.slice(start, end).join("\n");
  }

  function renderPagination() {
      paginationContainer.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
          let btn = document.createElement("button");
          btn.innerText = i;
          btn.classList.add("page-btn");
          if (i === currentPage) btn.classList.add("active");
          btn.addEventListener("click", function() {
              currentPage = i;
              renderProducts(currentPage);
              document.querySelectorAll(".page-btn").forEach(b => b.classList.remove("active"));
              btn.classList.add("active");
          });
          paginationContainer.appendChild(btn);
      }
  }
  
  renderProducts(currentPage);
  renderPagination();
});