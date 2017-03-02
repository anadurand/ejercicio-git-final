var result = 0;
//Para prevenir que se refresque la pagina cada vez que se pulsa el boton
document.getElementById("form").onsubmit=function(e){
  e.preventDefault();
}

//funcion que llama a las operaciones dependiendo del valor seleccionado
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


  preguntar();
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

function preguntar(){
  var pregunta = prompt("Desea continuar operando?: \n 0 = No \n 1 = Si");
  if(pregunta == "1"){
    alert("Ingrese numero 2 y operacion en el formulario");
    document.getElementById("num1").value = result;
    document.getElementById("num2").value = "";
    document.getElementById("operacion").value = "";
  }else if (pregunta == "0") {

    document.getElementById("salida").innerHTML = result;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operacion").value = "";
  }else{
    alert("Valor Invalido, operacion terminada");
    document.getElementById("salida").innerHTML = result;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operacion").value = "";

  }
}
