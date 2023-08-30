function on(){

    document.getElementById('lamp').src = "imagens-lamp/lampada-on.png";
}

function off(){

    document.getElementById('lamp').src ="imagens-lamp/lampada-off.png";
}

/* A lâmpada vai piscar 9 vezes a cada 03 segundos*/

function flick(){
    var intervalo = 0;
    var contador = 0;

     while (contador <10){
        intervalo += 300;  /* enquanto contador for menor que 0, acrescente 300ms à variável intervalo*/
        setTimeout("document.getElementById('lamp').src ='imagens-lamp/lampada-on.png';",intervalo);

        intervalo += 300;  /* enquanto contador for menor que 0, acrescente 300ms à variável intervalo*/
        setTimeout("document.getElementById('lamp').src ='imagens-lamp/lampada-off.png';",intervalo);
        contador++;
}

    }

