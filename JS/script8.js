document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    function validateField(id, condition) {
        let field = document.getElementById(id);
        let errorSpan = field.nextElementSibling;
        if (condition) {
            errorSpan.style.visibility = "hidden";
        } else {
            errorSpan.style.visibility = "visible";
            isValid = false;
        }
    }

    validateField("firstName", document.getElementById("firstName").value.trim() !== "");
    validateField("lastName", document.getElementById("lastName").value.trim() !== "");
    validateField("email", document.getElementById("email").value.includes("@"));
    validateField("password", document.getElementById("password").value.length >= 6);
    validateField("confirmPassword", document.getElementById("confirmPassword").value === document.getElementById("password").value);
    validateField("age", document.getElementById("age").value > 0);
    validateField("phone", document.getElementById("phone").value.length >= 10);
    validateField("address", document.getElementById("address").value.trim() !== "");
    validateField("state", document.getElementById("state").value.trim() !== "");

    if (isValid) {
        alert("Registration Successful!");
    }
});
