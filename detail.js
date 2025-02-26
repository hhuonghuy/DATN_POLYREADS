document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tab");
  let sections = document.querySelectorAll(".chitiet > div");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Xóa class active ở tất cả tab và nội dung
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      // Thêm class active vào tab được chọn
      this.classList.add("active");

      // Hiển thị nội dung tương ứng
      let target = this.getAttribute("data-target");
      document.querySelector("." + target).classList.add("active");
    });
  });
});
