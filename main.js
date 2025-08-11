'use strict'


const imagens = [
  {
    nome: 'Jogos Mistos',
    url: './img/1.jpg'
  },
  {
    nome: 'Battlefield 3',
    url: './img/2.jpeg'
  },
  {
    nome: 'Tomb Raider',
    url: './img/3.jpeg'
  },
  {
    nome: 'Rainbow Six',
    url: './img/4.jpg'
  },
  {
    nome: 'Mortal Kombat',
    url: './img/5.jpg'
  },
  {
    nome: 'Black Flag',
    url: './img/6.jpg'
  },
  {
    nome: 'Controle Quebrado',
    url: './img/7.jpg'
  },
  {
    nome: 'Modern Warfare',
    url: './img/8.jpg'
  },
  {
    nome: 'Black Ops 2',
    url: './img/9.jpg'
  },
  {
    nome: 'Dragão Dourado',
    url: './img/10.jpg'
  }
]

function criarImagem(srcImagem) {
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url
    galeria.appendChild(imagem)
}


function carregarImagens() {
    imagens.forEach(criarImagem)
}
carregarImagens()