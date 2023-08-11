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

// Array de propinas disponibles
const propinasDisponibles = [
  { porcentaje: 10, descripcion: "Buen servicio (10%)" },
  { porcentaje: 15, descripcion: "Servicio estándar (15%)" },
  { porcentaje: 20, descripcion: "Excelente servicio (20%)" },
  { porcentaje: 25, descripcion: "Servicio excepcional (25%)" }
];

//Se agrega el evento 'click' al botón de calcular
btnCalcular.addEventListener("click", calcularPropina);

//Función que se ejecuta al hacer clic en el botón de calcular
function calcularPropina() {
  //obtengo el monto total y el porcentaje de propina del formulario
  const montoTotal = parseFloat(document.getElementById("montoTotal").value);
  const porcentajePropina = parseInt(document.getElementById("porcentajePropina").value);

  if (isNaN(montoTotal)) {
    console.log("Por favor, ingresa un monto válido.");
    return;
  }//verificación de si el monto total es un número válido, si no, se da ese mensaje

  const propina = (montoTotal * porcentajePropina) / 100;
  const totalAPagar = montoTotal + propina;
  //cálculo de la propina y el total a pagar

  //Muestro el resultado en la página
  document.getElementById("propinaResultado").textContent = `Propina a dejar: $${propina.toFixed(2)}`;
  document.getElementById("totalResultado").textContent = `Total a pagar: $${totalAPagar.toFixed(2)}`;

//Muestro el resultado en la página con display 
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
}


// Función de Orden Superior: Filter
function filtrarOpciones(valor) {
  return valor >= 15; // Filtrar opciones con porcentaje mayor o igual al 15%
}

// Actualizar las opciones del select con Filter y Include
function actualizarOpcionesPropina() {
  const selectPropina = document.getElementById("porcentajePropina");
  selectPropina.innerHTML = propinasDisponibles
    .filter(opcion => filtrarOpciones(opcion.porcentaje))
    .map(opcion => `<option value="${opcion.porcentaje}">${opcion.descripcion}</option>`)
    .join("");
}

actualizarOpcionesPropina();

// Capturar entradas mediante prompt para añadir una propina personalizada
const porcentajePersonalizado = parseFloat(prompt("Ingresa un porcentaje de propina personalizado:"));
if (!isNaN(porcentajePersonalizado)) {
  propinasDisponibles.push({ porcentaje: porcentajePersonalizado, descripcion: `${porcentajePersonalizado}%` });
  actualizarOpcionesPropina();
}
