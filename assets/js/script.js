let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let resultado = document.querySelector('.resultado')
let container = document.querySelector('.container')

function Calcular() {
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    altura = altura / 100;

    let imc = peso/(altura * altura);

    if(altura === '' && altura === '') return;

    if(imc < 18.5) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Cuidado!! Você está abaixo do peso`;
        container.style.height = '480px';
    } else if(imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Parabens!! Você está no peso ideal`;
        container.style.height = '480px';
    } else if(imc >= 24.9 && imc < 29.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Você está com sobrepeso`;
        container.style.height = '480px';
    } else if(imc >= 29.9 && imc < 34.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Cuidado!! Você está com Obesidade Grau I`;
        container.style.height = '520px';
    } else if(imc >= 34.9 && imc < 39.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Cuidado!! Você está com Obesidade Grau II`;
        container.style.height = '520px';
    } else if(imc >= 39.9) {
        resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>Cuidado!! Você está com Obesidade Grau III`;
        container.style.height = '520px';
    }

}
function Clear() {
    resultado.innerHTML = '';

    altura = document.querySelector('#altura').value = '';
    peso = document.querySelector('#peso').value = '';
    container.style.height = '400px';
}