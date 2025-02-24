document.getElementById("frmcontact").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let encodedMessage = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\nNội dung: ${message}`);
    let zaloUrl = `https://zalo.me/0903609889?text=${encodedMessage}`;

    window.open(zaloUrl, "_blank");
});
