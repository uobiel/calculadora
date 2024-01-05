var resultado = document.querySelector('.resultado');
var dig1 = document.querySelector('.dig1');
var dig2 = document.querySelector('.dig2');
var dig3 = document.querySelector('.dig3');
var resultadoFinalElement = document.querySelector('.resultado-final'); // Renomeei a variável
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var num3 = document.querySelector('#num3');
var num4 = document.querySelector('#num4');
var num5 = document.querySelector('#num5');
var num6 = document.querySelector('#num6');
var num7 = document.querySelector('#num7');
var num8 = document.querySelector('#num8');
var num9 = document.querySelector('#num9');
var num0 = document.querySelector('#num0');
var limpar = document.querySelector('#limpar');
var soma = document.querySelector('#soma');
var multiplicacao = document.querySelector('#multiplicacao');
var divisao = document.querySelector('#divisao');
var resposta = document.querySelector('#resposta');
var subtracao = document.querySelector('#subtracao');

function validaDig2(numero) {
    if (dig2.innerHTML.trim() === '') {
        resultadoFinalElement.innerHTML = '';
        dig1.innerHTML += numero;
    } else {
        dig3.innerHTML += numero;
    }
}

for (let i = 0; i <= 9; i++) {
    let numButton = document.querySelector('#num' + i);
    numButton.addEventListener('click', function () {
        validaDig2(i);
    });
}

limpar.addEventListener('click', function () {
    dig1.innerHTML = '';
    dig2.innerHTML = '';
    dig3.innerHTML = '';
    resultadoFinalElement.innerHTML = '';
});

function verificarOperacao() {
    if (dig1.innerHTML.trim() === '' && dig2.innerHTML.trim() === '') {
        console.log('validou se está vazio');
        alert('Faça primeiro a operação!');
        return false;
    }
    return true;
}

soma.addEventListener('click', function () {
    if (verificarOperacao()) {
        dig2.innerHTML = '+';
        console.log('soma acionado');
    }
});

divisao.addEventListener('click', function () {
    if (verificarOperacao()) {
        dig2.innerHTML = '÷';
        console.log('divisao acionado');
    }
});

multiplicacao.addEventListener('click', function () {
    if (verificarOperacao()) {
        dig2.innerHTML = 'x';
        console.log('multiplicacao acionado');
    }
});

subtracao.addEventListener('click', function () {
    if (verificarOperacao()) {
        dig2.innerHTML = '-';
        console.log('subtracao acionado');
    }
});

resposta.addEventListener('click', function () {
    if (dig1.innerHTML.trim() !== '' && dig2.innerHTML.trim() !== '' && dig3.innerHTML.trim() !== '') {
        if (dig2.innerHTML === '+') {
            var resultado = parseInt(dig1.innerHTML.trim()) + parseInt(dig3.innerHTML.trim());
            resultadoFinalElement.innerHTML = resultado;
            dig1.innerHTML = '';
            dig2.innerHTML = '';
            dig3.innerHTML = '';
        }

        else if (dig2.innerHTML === '-') {
            var resultado = parseInt(dig1.innerHTML.trim()) - parseInt(dig3.innerHTML.trim());
            resultadoFinalElement.innerHTML = resultado;
            dig1.innerHTML = '';
            dig2.innerHTML = '';
            dig3.innerHTML = '';
        }

        else if (dig2.innerHTML === 'x') {
            var resultado = parseInt(dig1.innerHTML.trim()) * parseInt(dig3.innerHTML.trim());
            resultadoFinalElement.innerHTML = resultado;
            dig1.innerHTML = '';
            dig2.innerHTML = '';
            dig3.innerHTML = '';
        }

        else if (dig2.innerHTML === '÷') {
            var resultado = parseInt(dig1.innerHTML.trim()) / parseInt(dig3.innerHTML.trim());
            resultadoFinalElement.innerHTML = resultado;
            dig1.innerHTML = '';
            dig2.innerHTML = '';
            dig3.innerHTML = '';
        }
    }
});