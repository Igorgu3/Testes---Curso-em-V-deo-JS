function tabuada(){
    var n = window.document.getElementById('numero');
    var tab = window.document.getElementById('seltab');
        
    if(n.value.length == 0){
        window.alert('Por favor, digite um número!');
    }
    
    else{
        var numero1 = Number(n.value);
        tab.innerHTML = '';
        for (var t = 1; t <= 10; t++){
            let item = document.createElement('option');
            item.text = `${numero1} x ${t} = ${numero1*t}`;
            item.value = `tab${t}`;
            tab.appendChild(item);
        }
    }
}

