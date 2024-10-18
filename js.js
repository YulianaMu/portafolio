let index = 0;
let texto=document.getElementById("text").textContent;
document.getElementById("text").innerHTML = ""; // igualamos el iner o el espacio que estamos modificando "" para que se vacie.

function type() {
    if (index < texto.length) {
      //text.charAt(index) obtiene la letra del texto en la posición actual del índice.
        document.getElementById("text").innerHTML += texto.charAt(index);//agrega esa letra al contenido HTML del elemento con el ID "text". Así, se construye el texto letra por letra.
        index++;
        setTimeout(type, 100); // Velocidad de escritura
    } else  {
        // Espera un momento y luego borra el texto
        setTimeout(erase, 1000); // Espera 1 segundo antes de borrar
    }
}

function erase() {
    // Borrar todo el texto de una vez
    document.getElementById("text").innerHTML = ""; // igualamos el iner o el espacio que estamos modificando "" para que se vacie.
    index = 0; // Reiniciar el índice

    // Esperar medio segundo antes de volver a escribir
    setTimeout(type, 500); 
}

// Comienza el efecto
type();
//FIN FUNCION LETRAS EN MOVIMIENTO

//FORMULARIO
document.getElementById("submitButton").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerHTML = `
      <p>Gracias, ${name}! Tu mensaje ha sido recibido:</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
  `;
});
