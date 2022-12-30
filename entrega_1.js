//El programa consiste en analizar la seguridad
//de un password ingresado por el usuario.

//FUNCIONES

function validar(a) {

    let contador = 0;

    if (a.length > 8) {

        return validacion

    }

    for (let i = 0; i < a.length; i++ ) {


        if (alfaMinus.includes(a[i]) || alfaMayus.includes(a[i]) || numeros.includes(a[i]) || especiales.includes(a[i])) {
    
            contador++;
    
        }else{
    
            break;
    
        }
    
    }

    if (contador == a.length) {

        return validacion = true;    

    }

}

function evaluarSeguridad (a) {

    let carMinusculas = 0;
    
    let carMayusculas = 0;

    let carNumeros = 0;

    let carEspeciales = 0;

    for (let i = 0; i < a.length; i++ ) {


        if (alfaMinus.includes(a[i])) {
    
            carMinusculas = 1;
        
        }

        if (alfaMayus.includes(a[i])) {

            carMayusculas = 2;

        }

        if (numeros.includes(a[i])) {

            carNumeros = 3;

        }
        
        if (especiales.includes(a[i])) {

            carEspeciales = 4;
    
        }

        
    }


    return carMinusculas + carMayusculas + carNumeros + carEspeciales;

}


//VARIABLES

const alfaMinus = 'abcdefghijklmnopqrstuvwxyz';

const alfaMayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const numeros = '1234567890';

const especiales = '@#$%';

validacion = false;

let total = 0;

//PROGRAMA PRINCIPAL

let password = prompt ('Ingrese un password cualquiera (hasta 8 caracteres)');

validar(password);

switch (validacion) {

    case true:

        if ((evaluarSeguridad(password) == 1) || (evaluarSeguridad(password) == 2) || (password.length < 4)) {

            alert('El password posee pesima seguridad.')
            break;
        
            }
    
        if  ((evaluarSeguridad(password) >= 3) && (evaluarSeguridad(password) <= 6) && (password.length >= 4)) {

            alert('El password es medianamente seguro.')
            break;

         }

        if  ((evaluarSeguridad(password) >= 7) && (evaluarSeguridad(password) <= 10)) {

            alert('El password es de seguridad alta.')
            break;

        }
    
        if  ((evaluarSeguridad(password) >= 7) && (evaluarSeguridad(password) <= 10)) {

            alert('El password es de seguridad alta.')
            break;
        }
    
    case false:

        alert('El password no es valido o supera los 8 caracteres')
          
}

