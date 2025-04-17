// Function to store user details in localStorage
document.getElementById("registrationForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || email === "" || contact === "" || address === "") {
        alert("All fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, contact, address });
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully!");

    document.getElementById("registrationForm").reset();
});

// Function to display user details from localStorage
function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("userTableBody");

    if (tableBody) {
        tableBody.innerHTML = "";
        users.forEach((user, index) => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                        
                      </tr>`;
            tableBody.innerHTML += row;
        });
    }
}


// Load users on View Page
document.addEventListener("DOMContentLoaded", loadUsers);
