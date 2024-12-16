// Lấy tất cả các sản phẩm trên trang
const products = document.querySelectorAll('.product');

// Lặp qua mỗi sản phẩm và thêm sự kiện hover
products.forEach(product => {
    // Lấy phần thông tin sản phẩm (tên và giá)
    const productInfo = product.querySelector('.product-info');

    // Sự kiện khi di chuột lên sản phẩm
    product.addEventListener('mouseover', () => {
        productInfo.style.opacity = '1'; // Hiển thị thông tin
    });

    // Sự kiện khi rời chuột khỏi sản phẩm
    product.addEventListener('mouseout', () => {
        productInfo.style.opacity = '0'; // Ẩn thông tin
    });
});
