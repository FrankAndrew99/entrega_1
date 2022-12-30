

// /* declaracion de variables */

// let apellido = 'Maldonado';

// let nombre = 'Franco';

// let edad = prompt('Ingresa tu edad')

// console.log(edad)

// vidas = 1

// vidas ++ 

// vidas --

// vidas +=5; //suma 5

// // vidas =+5; 
//sobreescribe a 5


//Operadores Logicos

//and && (solo es True cuando ambas son True)
//or || (solo es False cuando ambas son False)

//not ! 

// n1 = 3;
// n2 = 3;

// resultado = n1 != n2

// console.log(resultado)

//el if siempre avalua la condicion como verdadera

// let edad = Number(prompt('Ingresa tu edad'))

// if (edad > 18) {

//     alert('Puede comprar alcohol.')

// }else{

//     alert('No puede comprar alcohol.')

// }

// let ingresarNumero = parseInt (prompt ('Ingresar numero'))

// for (let i = 1; i<= 10; i++) {

//     let resultado = ingresarNumero * i;
//     alert (ingresarNumero + ' x ' + i + '=' + resultado)

// };

//break: rompe el ciclo.

//continue: saltea el paso que le asignemos.

// for (let i = 1; i < 101; i++) {

//     if (i == 1) {

//         alert('Tengo' + i + ' oveja.');
//     }else{
    
//         alert('Tengo' + i + ' ovejas.');

//     }

// };

// const user = 'Franco';
// const pass = '1234';

// let intentos = 3;

// for (let i = 0; i < 3; i++ ) {

//     let u = prompt ('Ingrese su usuario')
//     let p = prompt ('Ingrese su pass')

//     if (u == user && p == pass) {

//         alert('Bienvenido '+ u +'.')
//         break;

//     }

//     intentos --;
//     alert('El usuario o la contrasena son incorrectos. Intentos restantes: '+ intentos);
    

//     if(intentos == 0) {

//         alert('Usuario bloqueado.')
//         break;

//     }

// };

// const user = 'Franco';
// const pass = '1234';

// let intentos = 3;

// while(intentos > 0) {

//     let u = prompt ('Ingrese su usuario')
//     let p = prompt ('Ingrese su pass')

//     if (u == user && p == pass) {

//         alert('Bienvenido '+ u +'.')
//         break;

//     }

//     intentos --;
//     alert('El usuario o la contrasena son incorrectos. Intentos restantes: '+ intentos);
    
//     if(intentos == 0) {

//         alert('Usuario bloqueado.')
//         break;

//     }

// }

// switch: resuelve muchas condiciones para no anidar.

// switch(numero) {

//     case 5:

//         break;

//     case 8:

//         break;

// }

// let entrada = prompt('Ingresar un nombre')

// while (entrada != 'ESC') {

//     switch (entrada) {

//         case 'ANA':
//             alert('Hola ANA')
//             break;

//         case 'JUAN':
//             alert('Hola JUAN')
//             break;

//         case 'PEDRO':
//             alert('Hola PEDRO')
//             break;

//     }
// }


// let n = 0;
// let x = 0;

// while (n < 5) {

//     n++
//     x += n
//     console.log ('Valor de X: '+ x)

// }

// function sumar() {

//     alert('Hola soy una funcion')
    
// }

// sumar();

//los parametros son valores que le enviamos a la funcion.

//las funciones se programan para retornar un valor.

// el return es el break de la funcion

//en las funciones se definen parametros por defecto
//por si nos olvidamos de pasar alguno

// function resta(n1 = 0, n2 = 0) {

//     let resultado = n1 - n2

//     return resultado

// }

// let n1 = Number(prompt('Ingresa el primer numero'))
// let n2 = Number(prompt('Ingresa el segundo numero'))

// console.log(resta(n1,n2))

// //function arrow

// const suma = (n1, n2) => { return n1 + n2 }

// suma()
 //reglas de la funcion arrow:
 //si vamos a utilizar un solo parametro puedo suprimir
 //los () , y aplica para las {}
 // ejem: const saludo = nombre => 'Hola me llamo' + nombre











