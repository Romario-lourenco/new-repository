function insert(num){
    numero = document.querySelector("#painel").innerHTML;
    document.querySelector("#painel").innerHTML = numero + num;
}

function limpar(){
    document.querySelector("#painel").innerHTML = '';
}

function apagar(){
    numero = document.querySelector("#painel").innerHTML;
    document.querySelector("#painel").innerHTML = numero.substring(0,numero.length-1);
}

function igual(){
    numero = document.querySelector("#painel").innerHTML;
    document.querySelector("#painel").innerHTML = eval(numero);
}