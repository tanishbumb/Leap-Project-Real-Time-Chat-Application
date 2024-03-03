// in case u use the http implementation then use this else comment it.
    function loginUser(username, password) {
        const data = {
            username: username,
            password: password
        };

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('User logged in successfully');
            } else {
                console.error('Failed to log in user');
            }
        })
        .catch(error => {
            console.error('Error logging in user:', error);
        });
    }

    function registerUser(username, password, email) {
        const data = {
            username: username,
            password: password,
            email: email
        };

        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('User registered successfully');
            } else {
                console.error('Failed to register user');
            }
        })
        .catch(error => {
            console.error('Error registering user:', error);
        });
    }

    // Function to send a GET request to logout a user
    function logoutUser() {
        fetch('/api/auth/logout', {
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                console.log('User logged out successfully');
            } else {
                console.error('Failed to log out user');
            }
        })
        .catch(error => {
            console.error('Error logging out user:', error);
        });
    }

    function getUserDetails(userId) {
        fetch(`/api/auth/user/${userId}`, {
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.error('Failed to retrieve user details');
            }
        })
        .then(data => {
            console.log('User details:', data);
        })
        .catch(error => {
            console.error('Error retrieving user details:', error);
        });
    }


    export { loginUser, registerUser, logoutUser, getUserDetails };
