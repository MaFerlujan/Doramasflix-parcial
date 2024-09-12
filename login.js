'use strict';

let email = document.getElementById("formEmail");
email.addEventListener("input", (e)=>{
    console.log(e.target.value);
});
let formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", (e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key)=>{
        formValues[key] = value;
    });
    console.log("Valores del formulario:", formValues);
    if(formValues["formEmail"] && formValues["exampleInputPassword1"]){
        alert("Sesión iniciada");
    }
    else{
        alert("La cuenta o la contraseña no son correctas")
    }

});