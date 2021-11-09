// Select elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('submit-btn')

// Check inputs onsubmit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})

// checkinput function
function checkInput() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    let message = 0;

    // USERNAME
    if (usernameValue === '') {
        setErrorfor(username, 'Username cannot be empty')
    } else {
        setSuccessFor(username)
        message = message + 1;
    }
    // EMAIL
    if (emailValue === '') {
        setErrorfor(email, 'Email cannot be empty')
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
        message = message + 1;
    }
    // PASSWORD
    if (passwordValue === '') {
        setErrorfor(password, 'Password cannot be empty')
    } else if (passwordValue !== password2Value) {
        setErrorfor(password, 'Passwords does not match')
    } else if (!isPassword(passwordValue)) {
        setErrorfor(password, 'Password is weak')
    } else {
        setSuccessFor(password)
        message = message + 1;
    }
    // PASSWORD CHECK
    if (password2Value === '') {
        setErrorfor(password2, 'Password cannot be empty')
    } else if (passwordValue !== password2Value) {
        setErrorfor(password2, 'Passwords does not match')
    } else if (!isPassword(password2Value)) {
        setErrorfor(password2, 'Password is weak')
    } else {
        setSuccessFor(password2)
        message = message + 1;
    }


    // Opens successful page
    if (message === 4) {
        button.addEventListener('click', window.open('/signed.html', '_self'))
    }
    console.log(message);
}

// error message

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList = "form-control error"
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList = "form-control success"

}
// success message


// email regex
function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function isPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
}

// password regex



///^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)