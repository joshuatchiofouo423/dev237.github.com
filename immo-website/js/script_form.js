// La recuperation des elements 
const form = document.querySelector("#form");
const password = document.querySelector('#password');
const email = document.querySelector('#email');

// Evenements
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})

// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    
    // Username verify
    if (emailValue === "") {
        let message ="Email ne peut pas être vide";
        setError(email,message);
    }else if(!emailValue.match(/^[a-zA-Z]/)){
        let message ="Email doit commencer par une lettre";
        setError(email,message)
    }else{
        let letterNum = emailValue.length;
        if (letterNum < 9) {
            let message ="Email doit avoir au moins 9 caractères";
            setError(email,message)
        } else {
            setSuccess(email);
        }
    }

   
    // password verify
    if (pwdValue ==="") {
        let message ="Le password ne peut pas être vide";
        setError(password,message)
    }else if(!password_verify(pwdValue)){
        let message = "Le mot de passe est trop faible (8 à 12 caractères)";
        setError(password,message)
    }else{
        setSuccess(password);
    }
   
}

function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(password) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);
}


function togglePassword() {
    const password = document.querySelector('#password');
    const toggle = document.querySelector('.toggle-password');
    const tog = document.querySelector('.tog');
    if (password.type === 'password') {
        password.type = 'text';
        toggle.classList.remove('visible');
        toggle.classList.add('visually-hidden');
        tog.classList.remove('visually-hidden');
        tog.classList.add('visible');
    } else {
        password.type = 'password';
        toggle.classList.remove('fa-eye-slash');
        toggle.classList.add('fa-eye');
        tog.classList.remove('visible');
        tog.classList.add('visually-hidden');
        toggle.classList.remove('visually-hidden');
        toggle.classList.add('visible');
        
    }
}
