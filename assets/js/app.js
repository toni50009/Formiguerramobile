// ARRAY DE CARTAS
const cartas = [
  {
    nome: 'alistamento',
    nomecompleto: 'Alistamento',
    efeito:{
      tipo: 'adicionar',
      alvo: 'soldados',
      quantidade: 1
    },
    custo: {
      recurso: 'armas',
      quantidade: 8
  },
  imagem: '/assets/img/alistamento/alistamento.webp',
},
  {
    nome: 'arqueiro',
    nomecompleto: 'Arqueiro',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 2
    },
    custo:{
      recurso: 'armas',
      quantidade: 1
    },
    imagem: '/assets/img/arqueiro/arqueiro.webp'
  },
  {
    nome: 'ataquedireto',
    nomecompleto: 'Ataque Direto',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 3
    },
    custo: {
      recurso: 'armas',
      quantidade: 2
  },
  imagem: '/assets/img/ataquedireto/ataquedireto.webp',
  },
  {
    nome: 'ataquetriplo',
    nomecompleto: 'Ataque Triplo',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 6
    },
    custo: {
      recurso: 'armas',
      quantidade: 4
  },
  imagem: '/assets/img/ataquetriplo/ataquetriplo.webp',
  },
  {
    nome: 'babilonia',
    nomecompleto: 'Babilônia',
    efeito:{
      tipo: 'adicionar',
      alvo: 'castelo',
      quantidade: 32
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 39
  },
  imagem: '/assets/img/babilonia/babilonia.png',  },
  {
    nome: 'catapulta',
    nomecompleto: 'Catapulta',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 12
    },
    custo: {
      recurso: 'armas',
      quantidade: 10
  },
  imagem: '/assets/img/catapulta/catapulta.png',
  },
  {
    nome: 'conjurararmas',
    nomecompleto: 'Conjurar Armas',
    efeito:{
      tipo: 'adicionar',
      alvo: 'armas',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/conjurararmas/conjurararmas.png',
  },
  {
    nome: 'conjurarcristais',
    nomecompleto: 'Conjurar Cristais',
    efeito:{
      tipo: 'adicionar',
      alvo: 'cristais',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/conjurarcristais/conjurarcristais.png',
  },
  {
    nome: 'conjurartijolos',
    nomecompleto: 'Conjurar Tijolos',
    efeito:{
      tipo: 'adicionar',
      alvo: 'tijolos',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/conjurartijolos/conjurartijolos.png',
  },
  {
    nome: 'contrabando',
    nomecompleto: 'Contrabando',
    efeito:{
      tipo: 'gangorra',
      alvo: ['tijolos',
        'armas',
        'cristais'
      ],
      quantidade: 5
    },
    custo: {
      recurso: 'armas',
      quantidade: 15
  },
  imagem: '/assets/img/contrabando/contrabando.png',
  },
  {
    nome: 'demolirarmas',
    nomecompleto: 'Demolir Armas',
    efeito:{
      tipo: 'remover',
      alvo: 'armas',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/demolirarmas/demolirarmas.png',
  },
  {
    nome: 'demolircristais',
    nomecompleto: 'Demolir Cristais',
    efeito:{
      tipo: 'remover',
      alvo: 'cristais',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/demolircristais/demolircristais.png',
  },
  {
    nome: 'demolirtijolos',
    nomecompleto: 'Demolir Tijolos',
    efeito:{
      tipo: 'remover',
      alvo: 'tijolos',
      quantidade: 8
    },
    custo: {
      recurso: 'cristais',
      quantidade: 4
  },
  imagem: '/assets/img/demolirtijolos/demolirtijolos.png',
  },
  {
    nome: 'fortaleza',
    nomecompleto: 'Fortaleza',
    efeito:{
      tipo: 'adicionar',
      alvo: 'castelo',
      quantidade: 20
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 18
  },
  imagem: '/assets/img/fortaleza/fortaleza.png',
  },
  {
    nome: 'hannya',
    nomecompleto: 'Hannya',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 32
    },
    custo: {
      recurso: 'armas',
      quantidade: 28
  },
  imagem: '/assets/img/hannya/hannya.webp',
  },
  {
    nome: 'incendiar',
    nomecompleto: 'Incendiar',
    efeito:{
      tipo: 'remover',
      alvo: ['tijolos',
        'armas',
        'cristais'
      ],
      quantidade: 4
    },
    custo: {
      recurso: 'armas',
      quantidade: 12
  },
  imagem: '/assets/img/incendiar/incendiar.png',
  },
  {
    nome: 'injustica',
    nomecompleto: 'Injustiça',
    efeito:{
      tipo: 'gangorra',
      alvo: 'castelo',
      quantidade: [8,4]
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 10
  },
  imagem: '/assets/img/injustica/injustica.webp',
  },
  {
    nome: 'maldicao',
    nomecompleto: 'Maldição',
    efeito:{
      tipo: 'gangorratudo',
      alvo: [
         'tijolos',
         'armas',
         'cristais',
         'construtores',
         'soldados',
         'magos'
      ],
      quantidade: 1
    },
    custo: {
      recurso: 'cristais',
      quantidade: 25
  },
  imagem: '/assets/img/maldicao/maldicao.png',
  },
  {
    nome: 'merlin',
    nomecompleto: 'Merlin',
    efeito:{
      tipo: 'adicionar',
      alvo: 'magos',
      quantidade: 1
    },
    custo: {
      recurso: 'cristais',
      quantidade: 8
  },
  imagem: '/assets/img/merlin/merlin.png',
  },
  {
    nome: 'montagrilos',
    nomecompleto: 'Montagrilos',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 4
    },
    custo: {
      recurso: 'armas',
      quantidade: 2
  },
  imagem: '/assets/img/montagrilos/montagrilos.png',
  },
  {
    nome: 'muralha',
    nomecompleto: 'Muralha',
    efeito:{
      tipo: 'adicionar',
      alvo: 'muro',
      quantidade: 22
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 12
  },
  imagem: '/assets/img/muralha/muralha.png',
  },
  {
    nome: 'murodebarro',
    nomecompleto: 'Muro de Barro',
    efeito:{
      tipo: 'adicionar',
      alvo: 'muro',
      quantidade: 3
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 1
  },
  imagem: '/assets/img/murodebarro/murodebarro.png',
  },
  {
    nome: 'pixies',
    nomecompleto: 'Pixies',
    efeito:{
      tipo: 'adicionar',
      alvo: 'castelo',
      quantidade: 22
    },
    custo: {
      recurso: 'cristais',
      quantidade: 22
  },
  imagem: '/assets/img/pixies/pixies.png',
  },
  {
    nome: 'musgorigido',
    nomecompleto: 'Musgo Rígido',
    efeito:{
      tipo: 'adicionar',
      alvo: 'castelo',
      quantidade: 8
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 6
  },
  imagem: '/assets/img/musgorigido/musgorigido.png',
  },
  {
    nome: 'ponteprotegida',
    nomecompleto: 'Ponte Protegida',
    efeito:{
      tipo: 'adicionar',
      alvo: 'muro',
      quantidade: 6
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 10
  },
  imagem: '/assets/img/ponteprotegida/ponteprotegida.webp',
  },
  {
    nome: 'primeiropiso',
    nomecompleto: 'Primeiro Piso',
    efeito:{
      tipo: 'adicionar',
      alvo: 'castelo',
      quantidade: 2
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 1
  },
  imagem: '/assets/img/primeiropiso/primeiropiso.png',
  },
  {
    nome: 'surpreender',
    nomecompleto: 'Surpreender',
    efeito:{
      tipo: 'remover',
      alvo: 'castelo',
      quantidade: 10
    },
    custo: {
      recurso: 'armas',
      quantidade: 18
  },
  imagem: '/assets/img/surpreender/surpreender.png',
  },
  {
    nome: 'tamandua',
    nomecompleto: 'Tamanduá',
    efeito:{
      tipo: 'dano',
      alvo: 'castelo',
      quantidade: 25
    },
    custo: {
      recurso: 'cristais',
      quantidade: 21
  },
  imagem: '/assets/img/tamandua/tamandua.png',
  },
  {
    nome: 'torredevigia',
    nomecompleto: 'Torre de Vigia',
    efeito:{
      tipo: 'adicionar',
      alvo: 'castelo',
      quantidade: 5
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 5
  },
  imagem: '/assets/img/torredevigia/torredevigia.png',
  },
  {
    nome: 'universidade',
    nomecompleto: 'Universidade',
    efeito:{
      tipo: 'adicionar',
      alvo: 'construtores',
      quantidade: 1
    },
    custo: {
      recurso: 'tijolos',
      quantidade: 8
  },
  imagem: '/assets/img/universidade/universidade.png',
  }
];


// Arrays dos players:
const players = {
  1: {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  },
  2: {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  }
};

//GLOBAIS
let currentPlayer = 1;


//Gerar carta aleatória
function gerarCartas(){
  const maoJogador = document.querySelectorAll('.card-player');
  maoJogador.forEach(el => {
    let indice = Math.floor(Math.random() * cartas.length);
    const cartaAleatoria = cartas[indice];

    el.dataset.cartaId = indice;

    el.innerHTML = `
          <img src="${cartaAleatoria.imagem}" class="card-img-top" alt="${cartaAleatoria.nome}">
          <div class="card-body">
            <p class="card-text"><strong>${cartaAleatoria.nomecompleto}</strong></p>
          </div>
    `;

  });


}



//Começar gerando a descrição da carta baseado em seu tipo
function gerarDescricao(carta){
  const efeito = carta.efeito;
  const tipo = efeito.tipo;
  const alvo = efeito.alvo;
  const quantidade = efeito.quantidade;

  switch (tipo){
    case 'dano':
      return `Causa ${quantidade} de dano`;
      break;

      case 'adicionar':
      return `+ ${quantidade} de ${alvo}`;
      break;

      case 'remover':
      return `- ${quantidade} de ${alvo} do inimigo`;
      break;

      case  'removertudo':
      return `- ${quantidade} de todos os recursos do inimigo`;
      break;

      case 'gangorra':
      return `Rouba ${quantidade} de todos os recursos do inimigo`;
      break;


      case 'gangorracastelo':
        return `+8 de castelo e -4 de castelo inimigo`;
        break;

      case 'gangorratudo':
        return `Rouba 1 de todos os recursos e fornecedores do inimigo`;
        break;

  }

}


function gerarTextoCusto(carta){
  return `Custo: ${carta.custo.quantidade} de ${iconeRecurso(carta.custo.recurso)}`;

}


function iconeRecurso(recurso){
  const icones = {
    armas: '⚔️',
    tijolos: '🧱',
    cristais: '💎',
  }

  return icones[recurso] || recurso;

}



function mostrarCarta(el){

  const cartaId = el.dataset.cartaId;
  const carta = cartas[cartaId];

  const tabuleiro = document.getElementById('tabuleiro');
  
  tabuleiro.innerHTML = `
    <div class="card-tabuleiro card">
      <img src="${carta.imagem}" class="card-img-top" alt="${carta.nome}">
      <div class="card-body">
          <h5 class="card-title"><strong>${carta.nomecompleto}</strong></h5>
          <p class="card-text"><strong>${gerarDescricao(carta)}</strong></p>
          <p class="card-text"><strong>${gerarTextoCusto(carta)}</strong></p>
          <button class="btn btn-card text-white bg-success">Jogar</button>
          <button class="btn btn-card text-white bg-danger">Trocar</button>
      </div>
    
    </div>
  `;
}


//Começa o jogo

gerarCartas();