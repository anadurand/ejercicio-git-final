var result = 0;
document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}
function operar(num1, num2){

  var name = document.getElementById('name');
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById("num2").value);
  var opcion = document.getElementById("operacion").value;

  //console.log(opcion);

  switch (opcion) {

    case "1":
              result = suma(num1, num2);
      break;

    case "2":
              result = resta(num1, num2);
        break;

    case "3":
              result = multiplicar(num1,num2);
      break;

    case "4":
              result = dividir(num1, num2);
      break;
    case "5":
              result = potencia(num1, num2);
      break;
    case "6":
              result = raiz(num1, num2);
      break;
    default:
            result =  "Error";
  }

  document.getElementById("salida").innerHTML = result;
}

function suma (num1, num2){
  return (num1 + num2);
}

function multiplicar(num1, num2){
  return num1 * num2;
}

function resta (num1, num2){
  return num1 - num2;
}

function dividir (num1, num2){
  return num1 / num2;
}

function potencia (num1, num2){
  return Math.pow(num1,num2);
}
function raiz (num1, num2){
  return Math.sqrt(num1, num2);
}
