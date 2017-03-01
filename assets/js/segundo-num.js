var num2 = document.getElementById("num2");
var num1 = document.getElementById("num1");
var result = 0;
function operar(num1, num2, operacion){
  var operacion = document.getElementById("operacion");
  var op

  switch (operacion) {

    case "suma":
              result = function suma(num1, num2);
      break;

    case "resta":
              result = function resta(num1, num2);
        break;

    case "multiplicar":
              result = function multiplicar(num1,num2);
      break;

    case "dividir":
              result = function dividir(num1, num2);
      break;
    case "potencia":
              result = function potencia(num1, num2);
      break;
    case "raiz":
              result = function raiz(num1, num2);
      break;
    default:
            result =  "Error";
  }

  document.getElementById("salida").innerHTML = result;
}
