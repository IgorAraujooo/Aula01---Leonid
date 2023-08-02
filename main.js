'use strict'

// 3 - var -> Mutavel -> Global
// 2 - let -> Mutavel -> Bloco
// 1 - const -> Imutavel -> Bloco


function cadastrar (){ // Função serve para definir uma função que será executada


const cadastrar = document.getElementById('cadastrar') // getElement serve para pegar o id do html


const nomeDigitado = prompt('Digite um Nome ') // Prompt serve para aparecer a caixinha para digitar o que você quer 
const idadeDigitado = prompt('Digite uma Idade')
const cidadeDigitado = prompt('Digite uma Cidade')

if(nomeDigitado == ''){
    nomeDigitado = 'Escola SENAI 1.27'
}

nome.textContent = nomeDigitado
idade.textContent = idadeDigitado
cidade.textContent = cidadeDigitado
}

const botaoCadastrar = document.getElementById('cadastrar') 

botaoCadastrar.addEventListener('click', cadastrar)


