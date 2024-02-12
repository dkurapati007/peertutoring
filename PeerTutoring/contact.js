function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var phone = document.forms["contactForm"]["phone"].value;

    if (name == "" || email == "" || message == "" || phone == "") {
        alert("Please fill out all fields!");
        return false;
    } else {
        alert(`Thank you, ${name}!. We will contact you soon`);
        location.reload();
    }
}

    