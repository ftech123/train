document.addEventListener('DOMContentLoaded', function() {
    // Retrieve saved users from localStorage
    var savedUsers = JSON.parse(localStorage.getItem('userData'));

    // Check if there are saved users
    if (savedUsers && savedUsers.length > 0) {
        var userList = document.getElementById('userList');

        // Iterate through saved users and display them
        savedUsers.forEach(function(user) {
            var listItem = document.createElement('li');
            listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
    } else {
        // If there are no saved users, display a message
        var userList = document.getElementById('userList');
        userList.innerHTML = '<li>No users registered yet.</li>';
    }
});
