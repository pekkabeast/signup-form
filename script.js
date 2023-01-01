

const password = document.querySelector('#password');
const confirm = document.querySelector('#confirmPassword');


confirm.addEventListener("change", confirmPassword);


function confirmPassword(){
    if (password.value !== confirm.value){
        const label = document.querySelector("label[for='confirmPassword']");
        label.toggleAttribute(data-before);
    }
    
}