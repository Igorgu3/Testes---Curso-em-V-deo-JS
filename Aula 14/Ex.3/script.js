function contar() {
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');
    var contar = window.document.getElementById('contar1');

    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contar1.innerHTML = "Impossível contar! Digite novamente!";
        window.alert('[ERRO] Faltam dados!');
    }

    else {
        contar1.innerHTML = 'Contando: <br> '

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1!');
            p = 1;
        }
            
        if (i < f) {
            for (var aux = i; aux <= f; aux += p) {
                contar1.innerHTML += ` ${aux} \u{1F449}`;
            }
        }

        else {
            for (var aux = i; aux >= f; aux -= p) {
                contar1.innerHTML += ` ${aux} \u{1F449}`;
            }
        }

        contar1.innerHTML += '\u{1F3C1}';

        i = '';
        f = '';
        p = '';
    }

}

