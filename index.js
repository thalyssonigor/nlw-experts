const perguntas = [
    {
      Pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Documento Orientado ao Modelo",
        "Documento de Objeto de Modelo",
        "Modelo de Objeto do Documento",
      ],
      correta: 2
    },
    {
      Pergunta: "Qual destes é um operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro"
      ],
      correta: 1
    },
    {
      Pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "Número não disponível",
        "Nada é Nada",
        "Não é um número",
      ],
      correta: 2
    },
    {
      Pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()"
      ],
      correta: 0
    },
    {
      Pergunta: "Em JavaScript, qual dessas declarações é usada para criar uma função?",
      respostas: [
        "function myFunction()",
        "new Function()",
        "createFunction()"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()"
      ],
      correta: 0
    },
    {
      Pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento usando um seletor CSS"
      ],
      correta: 2
    },
    {
      Pergunta: "Qual é o operador de módulo em JavaScript?",
      respostas: [
        "/",
        "%",
        "%%"
      ],
      correta: 1
    }
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set() 
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta 
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    
    
    
    quizItem.querySelector('dl dt').remove()
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }