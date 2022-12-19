// Counter Up

$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
        offset: 70,
        beginAt: 5,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
    });
});













//  ================== New Page Sections ===============

// About Area Start
// Declaring UI
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email validation
function checkEmail(input){
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i;
    if (regex.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input, 'Email is not valid')
    }
}

// Check Required Function
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is Required`)
        }
        else {
            showSuccess(input)
        }
    })
}

// Check input Length
function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`)
    }
    else {
        showSuccess(input)
    }
}



// Get Field Name 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


// Check Password Matching
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match.')
    }
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2])

    checkLength(username, 3, 25)
    checkLength(password, 6, 25)

    checkEmail(email)
    checkPasswordMatch(password, password2)
})
// About Area End