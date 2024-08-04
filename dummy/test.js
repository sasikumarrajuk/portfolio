let email = document.getElementById('email');
let pass = document.getElementById('password');

function submitForm() {
    if (email.value == '' && pass.value == '') {
        alert('email & password is compulsory');
    } else if (email.value == '' && pass.value != '') {
        alert('email is required');
    } else if (email.value != '' && pass.value == '') {
        alert('password is required');
    } else {
        alert('Login Sucessful');
    }
}