var form = document.getElementById("registerForm");
var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var reenterPasswordInput = document.getElementById("reenterPassword");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    var username = usernameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value;
    var reenterPassword = reenterPasswordInput.value;

    // Validate the form data
    if (username === '' || email === '' || password === '' || reenterPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== reenterPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Save the user information
    var userInfo = {
        username: username,
        email: email,
        password: password
    };

    // Save user info and redirect to login page
    saveUserInfo(userInfo);
    window.location.href = 'login.html';
});

function saveUserInfo(userInfo) {
    // Retrieve existing user data from localStorage
    var existingData = localStorage.getItem('userData');
    var users = existingData ? JSON.parse(existingData) : [];

    // Add the new user to the array
    users.push(userInfo);

    // Save the updated user data back to localStorage
    localStorage.setItem('userData', JSON.stringify(users));
}
