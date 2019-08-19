let array = [9, 8, 1, 3, 2];

function bubbleSort(lista) {
    let swapp;
    let tam_list = lista.length - 1;
    let aux_list = lista;
    do {
        swapp = false;
        for (let i = 0; i < tam_list; i++) {
            if (aux_list[i] > aux_list[i + 1]) {
                let temp = aux_list[i];

                aux_list[i] = aux_list[i + 1];
                aux_list[i+1] = temp;
                swapp = true
            }
        }
    }while(swapp);
    console.log(aux_list)
    
}

bubbleSort(array);
