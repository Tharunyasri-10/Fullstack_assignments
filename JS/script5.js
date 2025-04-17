document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    function validateField(id, errorId) {
        let field = document.getElementById(id);
        let error = document.getElementById(errorId);

        if (field.value.trim() === "") {
            error.style.display = "inline";
            field.classList.add("error-border");
            isValid = false;
        } else {
            error.style.display = "none";
            field.classList.remove("error-border");
        }
    }

    validateField("name", "nameError");
    validateField("email", "emailError");
    validateField("website", "websiteError");
    validateField("message", "messageError");

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
