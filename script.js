const form = document.getElementById("form")
const fname = document.getElementById('firstname')
const lname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')



form.addEventListener('submit', e => {
    e.preventDefault();
    
    var firstName = fname.value.trim()
    var lastName = lname.value.trim()
    var emailVal = email.value.trim()
    var passVal = password.value.trim()

    if(firstName === ""){
        errorFunc(fname, "First Name cannot be empty")
    }else{
        successFunc(fname, 'You have a beautiful name')
    }
    if(lastName === ""){
        errorFunc(lname, "Last Name cannot be empty")
    }else{
        successFunc(lname, "You have a powerful bloodline")
    }

    if(emailVal === ""){
        errorFunc(email, "Email Address cannot be empty")
    }else{
        successFunc(email, "That is looking great")
    }

    if(passVal === ""){
        errorFunc(password, "Password cannot be empty")
    }else {
        successFunc(password ,"Better remember that")
    }

})

function errorFunc(req, message){
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    req.className = "error"
    span.className = 'error-text'
}

function successFunc(req, message) {
    const formControl = req.parentElement
    const span = formControl.querySelector('span')
    span.innerText = message
    span.className = "success-text"
    req.className ='success'
}