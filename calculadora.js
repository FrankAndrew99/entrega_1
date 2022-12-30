
let num1 = parseInt (prompt ('Ingrese un numero'));

let operacion = prompt ('Indique operacion: + , - , / , *');

let num2 = parseInt (prompt ('Ingrese un numero'));

let flag = true;

if (isNaN(num1) || isNaN(num2)) {

    flag = false;
    alert('Por ingrese numeros enteros');
}

if(flag) {

    if(operacion) {

        switch (operacion) {

            case '+':

                resultado = num1 + num2;
                break;
            
            case '-':

                resultado = num1 - num2;
                break;
            
            case '/':

                resultado = num1 / num2;
                break;

            case '*':

                resultado = num1 * num2;
                break;

            default:

                alert('Operacion invalida.')
        }

        alert('El resultado es: ' + resultado);

    }else{

        alert('No indicaste una opracion.')

    }
}