// Chuyển đổi hiển thị nội dung khi nhấn vào menu
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Xóa class 'active' khỏi tất cả menu
    document
      .querySelectorAll(".menu-item")
      .forEach((i) => i.classList.remove("active"));
    this.classList.add("active");

    // Ẩn tất cả nội dung
    document
      .querySelectorAll(".content > div")
      .forEach((div) => div.classList.add("hidden"));

    // Hiển thị nội dung tương ứng
    const targetId = this.getAttribute("data-target");
    if (targetId) {
      document.getElementById(targetId).classList.remove("hidden");
    }
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    document
      .querySelectorAll(".order-list")
      .forEach((list) => list.classList.add("hidden"));
    document
      .getElementById(this.getAttribute("data-target"))
      .classList.remove("hidden");
  });
});
