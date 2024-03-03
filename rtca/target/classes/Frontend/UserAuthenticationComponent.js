
function loginUser() {
    const username = document.getElementById('usernameInput').value;

    if (validateUsername(username)) {
        console.log(`Logging in user: ${username}`);
    } else {
        alert('Please enter a valid username');
    }
}


function handleUserAction(action) {
    const username = document.getElementById('usernameInput').value;

    if (validateUsername(username)) {
        console.log(`${action === 'login' ? 'Logging in' : 'Registering'} user: ${username}`);
    } else {
        alert('Please enter a valid username');
    }
}

document.getElementById('loginButton').addEventListener('click', () => handleUserAction('login'));
document.getElementById('registerButton').addEventListener('click', () => handleUserAction('register'));


