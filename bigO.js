// var doLinearSearch = function(array) {
// for (var guess = 0; guess < array.length; guess++) {
// if (array[guess] === targetValue) {
// return guess;  // encontrei!
//     }
// }
// return -1;  // nao encontrei
// };

function inverter_lista(lista){
    let tamanho = lista.length;
    limite = tamanho/2;
    for(let i; i++; i == limite){
        let aux = lista[i];
        lista[i]  = lista[n-1];
        lista[tamanho - i] = aux;
        console.log(lista)
    }
    return lista;
}


let num = [1,2,3,4,5,6]
inverter_lista(num);