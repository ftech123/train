document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve saved users from localStorage
    var savedUsers = JSON.parse(localStorage.getItem('userData'));

    // Check if there are saved users
    if (savedUsers && savedUsers.length > 0) {
        // Check if the entered username and password match any saved user
        var userFound = savedUsers.some(function(user) {
            return user.username === username && user.password === password;
        });

        if (userFound) {
            // Redirect to the dashboard upon successful login
            window.location.href = "dashboard.html";
        } else {
            // Display an error message for invalid credentials
            alert("Username or password not match. Please try again.");
        }
    } else {
        // If there are no saved users, display a message
        alert("No users registered yet.");
    }
});
