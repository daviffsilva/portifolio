const apagarTexto = (words, nextWord) => {
    let str = $(".typeWriter").text();
    if(str.length !== 0){
        str = str.substr(0, str.length - 1);
        $(".typeWriter").text(str);
        setTimeout(apagarTexto, 15, words, nextWord);
    }else{
        setTimeout(escreverTexto, 500, words[nextWord], words, nextWord);
    }
};

const escreverTexto = (str, palavras = ['Escrevendo...'], j = 0, i = 0) => {
    let element = $(".typeWriter")[0];
    element.innerText += str.charAt(i - 1) === ' ' ? ' ' + str.charAt(i) : str.charAt(i);
    if(element.innerText.indexOf(str, element.innerText.length - str.length - 1) === -1) {
        setTimeout(escreverTexto, 100, str, palavras, j, i + 1);
    }else{
        if(j !== palavras.length - 1){
            setTimeout(apagarTexto, 1500, palavras, j + 1);
        }else{
            setTimeout(apagarTexto, 5000, palavras, 0);
        }

    }
};

const iniciarEscrita = (config) => {
    if(config.apagarAntes){
        apagarTexto(config.palavras, 0);
    }else{
        escreverTexto(config.palavras[0], config.palavras);
    }
};