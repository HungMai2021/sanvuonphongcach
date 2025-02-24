document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let encodedMessage = encodeURIComponent(`Họ tên: ${name}\nSĐT: ${phone}\nNội dung: ${message}`);
    let zaloUrl = `https://zalo.me/0903609889?text=${encodedMessage}`;

    window.open(zaloUrl, "_blank");
});
document1.getElementById("frmcontact").addEventListener("submit", function(event1) {
    event1.preventDefault();

    let name1 = document1.getElementById("name").value;
    let phone1 = document1.getElementById("email").value;
    let message1 = document1.getElementById("message").value;

    let encodedMessage1 = encodeURIComponent(`Họ tên: ${name1}\nEmail: ${email1}\nNội dung: ${message1}`);
    let zaloUrl1 = `https://zalo.me/0903609889?text=${encodedMessage1}`;

    window.open(zaloUrl1, "_blank");
});
