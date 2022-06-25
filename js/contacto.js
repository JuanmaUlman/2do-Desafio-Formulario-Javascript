// let inputNombre = document.getElementById("nombre");
// let inputEmail = document.getElementById("email");
// let inputTelefono = document.getElementById("telefono");


// inputNombre.addEventListener("input", () => {
//     console.log(inputNombre.value);
// })




const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const areaDeTexto = document.getElementById("textArea")



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    

    // const nombre = document.getElementById("nombre");
    // const email = document.getElementById("email");
    // const telefono = document.getElementById("telefono");
    // const areaDeTexto = document.getElementById("textArea")


    // formulario = e.target;

        if (formulario.checkValidity()) {
                alert(`Gracias por contactarte con nosotros ${nombre}, en breve nos pondremos en contacto contigo, tanto por telefono a traves del numero ${telefono} como asi tambien te enviaremos toda la información necesaria al email ${email}.
                Ya lograste el primer paso para tu Metamorfosis!`)
        }


        // localStorage.setItem("Contacto", JSON.stringify(formulario))
});

console.log(formulario)
const solicitud = {
    nombre: nombre.value,
    email: email.value,
    telefono: telefono.value,
    texto: areaDeTexto.value
}

    localStorage.setItem("Contacto", JSON.stringify(solicitud))

    let mensaje = localStorage.getItem("Contacto")

console.log(mensaje)


