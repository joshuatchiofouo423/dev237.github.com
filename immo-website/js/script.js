// La recuperation des elements 
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const place = document.querySelector('#place');
const dob = document.querySelector('#dob');
const surname = document.querySelector('#surname');
const phone = document.querySelector('#phone');
const country = document.querySelector('#country');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Evenements
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})

// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();
    const cityValue = city.value.trim();
    const placeValue = place.value.trim();
    const dobValue = dob.value.trim();
    const surnameValue = surname.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value.trim();
    
    // Username verify
    if (userValue === "") {
        let message ="Username ne peut pas être vide";
        setError(username,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="Username doit commencer par une lettre";
        setError(username,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="Username doit avoir au moins 3 caractères";
            setError(username,message)
        } else {
            setSuccess(username);
        }
    }
    if (phoneValue === "") {
        let message ="Phone ne peut pas être vide";
        setError(phone,message);
    }else{
        let letterNum = phoneValue.length;
        if (letterNum < 9) {
            let message ="Phone doit avoir au moins 9 caractères";
            setError(phone,message)
        } else {
            setSuccess(phone);
        }
    }
    if (countryValue === "") {
        let message ="Pays ne peut pas être vide";
        setError(country,message);
    }else{
        setSuccess(country);
    }
    if (cityValue === "") {
        let message ="Ville ne peut pas être vide";
        setError(city,message);
    }else{
        setSuccess(city);
    }
    if (dobValue === "") {
        let message ="Date de naissance ne peut pas être vide";
        setError(dob,message);
    }else{
        setSuccess(dob);
    }
    if (placeValue === "") {
        let message ="Lieu de naissance ne peut pas être vide";
        setError(place,message);
    }else{
        setSuccess(place);
        
    }
    if (surnameValue === "") {
        let message ="Prénom ne peut pas être vide";
        setError(surname,message);
    }else{
        setSuccess(surname);
        
    }
    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
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
    // pwd confirm
    if (pwd2Value ==="") {
        let message ="Le password confirm ne peut pas être vide";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Les mot de passes ne correspondent pas";
        setError(password2,message)
    }else{
        setSuccess(password2)
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
    return /^[a-z0-9]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(password) {
    return /^(?=.*[0-9])[a-zA-Z0-9]{8,12}$/.test(password);
}