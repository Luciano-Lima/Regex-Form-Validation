document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('message').addEventListener('blur', validateMessage);

function validateName(){
    const name = document.getElementById('name')
    const re = /^[a-zA-Z]{2,10}$/;
    
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
        document.querySelector('.invalid-name').innerHTML = 'Name must be between 2 and 10 characters'
    }else {
        name.classList.remove('is-invalid');
    }
};

function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/; //us zip code example 33443-3443

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        document.querySelector('.invalid-zip').innerHTML = 'Name must be between 2 and 10 characters'
    }else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; 

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
        document.querySelector('.invalid-email').innerHTML = 'Invalid email format'
    }else { 
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;  

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        document.querySelector('.invalid-phone').innerHTML = 'Enter a valid phone';
    }else {
        phone.classList.remove('is-invalid');
    }
}


function validateMessage() {
    const message = document.getElementById('message');
    const re = /^[a-zA-Z0-9]{10,100}$/;

    if (!re.test(message.value)) {
        message.classList.add('is-invalid');
        document.querySelector('.invalid-message').innerHTML = 'Message has to be at least 10 characters long';
    }else {
        message.classList.remove('is-ivalid');
    }
}
