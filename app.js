/**
 * Suma dos numeros ingresados por el usuario y muestra el resultado en pantalla.
 */
function sumar() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById("resultado").textContent = "Por favor ingresa tres numeros validos.";
    return;
  }

  const resultado = num1 + num2 + num3;
  document.getElementById("resultado").textContent = `Resultado: ${num1} + ${num2} + ${num3} = ${resultado}`;
}
