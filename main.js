const btnCalcular = document.getElementById("btnCalcular");
// js busca en el HTML la id btnCalcular para almacenarla acá como una constante que se va a usar en el futuro

btnCalcular.addEventListener("click", calcularPropina);
//js maneja btnCalcular, así cuando se toca en la opción de "calcularPropina", se usa la constante btnCalcular

function calcularPropina() {
 //empieza la definición de la función "calcularPropina", ejecutada cuando se presione el botón de "Calcular Propina"

  const montoTotal = parseFloat(document.getElementById("montoTotal").value);
  const porcentajePropina = parseInt(document.getElementById("porcentajePropina").value);
  //se obtienen las ids montoTotal y porcentajePropina para almacenarlas en js, y se accede al valor del campo usando .value
  //montoTotal se convierte a un número con parseFloat, y porcentajePropina se convierte a un número entero con parseInt
  
  if (isNaN(montoTotal)) {
    alert("Por favor, ingresa un monto válido.");
    return;
  }
  //respuesta que se obtiene si se deja vacío el campo, o se ingresan letras solas como la "e"

  const propina = (montoTotal * porcentajePropina) / 100;
  const totalAPagar = montoTotal + propina;
  //se calcula la propina y el resultado a pagar.
  //-Propina: resultado de multiplicar montoTotal por porcentajePropina, y dividir al resultado por 100, para obtener un porcentaje real
  //-totalAPagar: Resultado de sumar el monto total y la propina

  document.getElementById("propinaResultado").textContent = `Propina a dejar: $${propina.toFixed(2)}`;
  document.getElementById("totalResultado").textContent = `Total a pagar: $${totalAPagar.toFixed(2)}`;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
}
