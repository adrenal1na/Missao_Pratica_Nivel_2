const swap = (vetor, pos1, pos2) => {
    const temp = vetor[pos1];
    vetor[pos1] = vetor[pos2];
    vetor[pos2] = temp;
};

const shuffle = (vetor, qtdTrocas) => {
    for(let i = 0; i < qtdTrocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

const bubble_sort = (vetor) => {
    for(let i = 0; i < vetor.length - 1; i++) {
        for(let j = 0; j < vetor.length - i - 1; j++) {
            if(vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selection_sort = (vetor) => {
    for(let i = 0; i < vetor.length - 1; i++) {
        let min = i;
        for(let j = i + 1; j < vetor.length; j++) {
            if(vetor[j] < vetor[min]) {
                min = j;
            }
        }
        if(min !== i) {
            swap(vetor, i, min);
        }
    }
};

const particionamento = (vetor, inicio, fim, pivot) => {
    let i = inicio;
    let j = fim;
    
    while(i <= j) {
        while(vetor[i] < pivot) i++;
        while(vetor[j] > pivot) j--;
        
        if(i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }
    return i;
};

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if(inicio < fim) {
        const pivot = vetor[Math.floor((inicio + fim) / 2)];
        const particao = particionamento(vetor, inicio, fim, pivot);
        quick_sort(vetor, inicio, particao - 1);
        quick_sort(vetor, particao, fim);
    }
}; 