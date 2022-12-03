// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
   /* 
   solucion con funcion for
   let suma = 0;
    for(let i=1;i<=10;i++){
      suma=suma+i;
    }return suma

    solucion con funcion while(mientras que)
    */
   let suma = 0
   let i = 1
   while(i<11){
    suma = suma + i;
    i++
    }
    return suma
/*
    solucion con funcion for of
    let numeros =[1,2,3,4,5,6,7,8,9,10];
    let suma = 0
    for(let element of numeros){
      suma = element + suma;
    }
    return suma;

solucion con for each (para cada)

    let numeros =[1,2,3,4,5,6,7,8,9,10];
    let suma = 0
    numeros.foreach((element)=>{
      suma=suma + element;
    });
    return suma;
   */

}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

  /* codigo de forma larga con filter
  let filtrados = array.filter((element)=> element % 2 === 0)

  return filtrados;
 }
*/
  return array.filter((element)=> element % 2 === 0)
  
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map((elemento)=>elemento ** 2);
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce((Nacumulado,siguiente)=>Nacumulado+siguiente);
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  // asi nos muestra en console.log(num) una cantidad de numeros X ejm 9087
  //console.log(num)9087
  //para saber el tipo de elemento con typeof lo muestra ejm
  //console.log(typeof num) mostrara number osea que es un numero aun pero si usamos el .toString cambiara a un string
  //let numeroEnString = num.toString(); guardamos num en la variable nueva numeroEnString y al usar el console nos muestra el mismo numero pero en un string
  //let longitud = numeroEnString.length; ya se puede retornar return longitud;
  return num.toString().length;

}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
