var name = document.getElementById('name');
var num1 = document.getElementById('num1').value;
var num2 = document.getElementById("num2").value;
var operacion = document.getElementById("operacion");
var opcion = operacion.options[operacion.selectedIndex].value;
var result;
console.log(opcion);

function operar(num1, num2, opcion){

  switch (opcion) {

    case 1:
              result = suma(num1, num2);
      break;

    case 2:
              result = resta(num1, num2);
        break;

    case 3:
              result = multiplicar(num1,num2);
      break;

    case 4:
              result = dividir(num1, num2);
      break;
    case 5:
              result = potencia(num1, num2);
      break;
    case 6:
              result = raiz(num1, num2);
      break;
    default:
            result =  "Error";
  }

  document.getElementById("salida").innerHTML = result;
}

function suma (num1, num2){
  return num1 + num2;
}

function multiplicar(num1, num2){
  return num1 * num2;
}



