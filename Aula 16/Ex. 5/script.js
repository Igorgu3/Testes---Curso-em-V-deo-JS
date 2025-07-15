let num = [];
let res = document.getElementById('res');

function adicionar(){
    res.innerHTML = '';
    var n = window.document.getElementById('numero');
    var numero1 = Number(n.value);
    let item = document.createElement('option');
      

    if(numero1 < 1 || numero1 > 100 || num.indexOf(numero1) != -1){
        window.alert('Valor inválido ou já encontrado na lista!');
    }

    else{
        num.push(numero1);
        item.text = `Valor ${numero1} adicionado`;
        item.value = `tab${numero1}`;
        tab.appendChild(item);
    } 
}

function finalizar(){ 
    let tamanho = num.length;
    let menor = 1000;
    let maior = 0;
    let soma = 0;
    let media = 0;

    //menor
    for (var i = 0; i < tamanho; i++){
        if(num[i]<menor){
            menor = num[i];
        }
    }

    //maior
    for (var m = 0; m < tamanho; m++){
        if(num[m]>maior){
            maior = num[m];
        }
    }

    //soma
    for (var s = 0; s < tamanho; s++){
        soma += num[s];
    }

    //média
    media = soma/tamanho;

    res.innerHTML += `Ao todo, temos ${tamanho} números cadastrados. <br>
    O maior valor informado foi ${maior}. <br>
    O menor valor informado foi ${menor}. <br>
    Somando todos os valores, temos ${soma}. <br>
    A média dos valores digitados é ${media}.
    `;
}


