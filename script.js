document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let encodedMessage = encodeURIComponent(`Họ tên: ${name}\nSĐT: ${phone}\nNội dung: ${message}`);
    let zaloUrl = `https://zalo.me/0828234902?text=${encodedMessage}`;

    window.open(zaloUrl, "_blank");
});
document.getElementById("frmcontact").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let encodedMessage = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\nNội dung: ${message}`);
    let zaloUrl = `https://zalo.me/0828234902?text=${encodedMessage}`;

    window.open(zaloUrl, "_blank");
});
