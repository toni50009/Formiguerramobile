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
  imagem: '/assets/img/babilonia/babilonia.webp',  },
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
  imagem: '/assets/img/catapulta/catapulta.webp',
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
  imagem: '/assets/img/conjurararmas/conjurararmas.webp',
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
  imagem: '/assets/img/conjurarcristais/conjurarcristais.webp',
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
  imagem: '/assets/img/conjurartijolos/conjurartijolos.webp',
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
  imagem: '/assets/img/contrabando/contrabando.webp',
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
  imagem: '/assets/img/demolirarmas/demolirarmas.webp',
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
  imagem: '/assets/img/demolircristais/demolircristais.webp',
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
  imagem: '/assets/img/demolirtijolos/demolirtijolos.webp',
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
  imagem: '/assets/img/fortaleza/fortaleza.webp',
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
      tipo: 'removertudo',
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
  imagem: '/assets/img/incendiar/incendiar.webp',
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
  imagem: '/assets/img/maldicao/maldicao.webp',
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
  imagem: '/assets/img/merlin/merlin.webp',
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
  imagem: '/assets/img/montagrilos/montagrilos.webp',
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
  imagem: '/assets/img/muralha/muralha.webp',
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
  imagem: '/assets/img/murodebarro/murodebarro.webp',
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
  imagem: '/assets/img/pixies/pixies.webp',
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
  imagem: '/assets/img/musgorigido/musgorigido.webp',
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
  imagem: '/assets/img/primeiropiso/primeiropiso.webp',
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
  imagem: '/assets/img/surpreender/surpreender.webp',
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
  imagem: '/assets/img/tamandua/tamandua.webp',
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
  imagem: '/assets/img/torredevigia/torredevigia.webp',
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
  imagem: '/assets/img/universidade/universidade.webp',
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
  let indicesDisponiveis = Array.from(cartas.keys());

  maoJogador.forEach(el => {
    let indiceAleatorio = Math.floor(Math.random() * indicesDisponiveis.length);
    const indiceCarta = indicesDisponiveis[indiceAleatorio];
    const cartaAleatoria = cartas[indiceCarta];

    indicesDisponiveis.splice(indiceAleatorio, 1); // Remove o índice já utilizado

    el.dataset.cartaId = indiceCarta;

    el.innerHTML = `
          <img src="${cartaAleatoria.imagem}" class="card-img-top mao" alt="${cartaAleatoria.nome}">
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

      case 'adicionar':
      return `+ ${quantidade} de ${Array.isArray(alvo) ? alvo.join(', ') : alvo}`;

      case 'remover':
      return `- ${quantidade} de ${alvo} do inimigo`;

      case  'removertudo':
      return `- ${quantidade} de todos os recursos do inimigo`;

      case 'gangorra':
      if(Array.isArray(alvo)){
        return `Rouba ${quantidade} de todos os recursos do inimigo`;

      }
      return `+8 de castelo e -4 de castelo inimigo`; 


      case 'gangorratudo':
        return `Rouba 1 de tudo do inimigo`;

        default:
  return "Tipo de efeito desconhecido";

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
    <div class="card-tabuleiro card" data-carta-id="${cartaId}">
      <img src="${carta.imagem}" class="card-img-top" alt="${carta.nome}">
      <div class="card-body">
          <h5 class="card-title">${carta.nomecompleto}</h5>
          <p class="card-text-tabuleiro">${gerarDescricao(carta)}</p>
          <p class="card-text-tabuleiro">${gerarTextoCusto(carta)}</p>
          <button class="btn btn-card text-white bg-success" id="btn-jogar" onclick="jogarCarta(this)">Jogar</button>
           <button class="btn btn-card text-white bg-danger" id="btn-trocar" onclick="confirmarTroca(this)">Trocar</button>
      </div>
    
    </div>
  `;
}


function confirmarTroca() {
  const textBox = document.createElement('div');
  const pai = document.querySelector('.tabuleiro');
  textBox.className = 'txtBox';
  textBox.innerHTML = `
  <p class="card-text-tabuleiro">Trocar e ganhar +1 de todos os recursos?</p>
  <button class="btn btn-card text-white bg-success" onclick="trocarCarta()">Sim</button>
  <button class="btn btn-card text-white bg-danger" onclick="cancelarTroca()">Não</button>`;
  pai.appendChild(textBox);
}

function cancelarTroca() {
  const textBox = document.querySelector('.txtBox');
  textBox.remove();
}

function trocarCarta() {
  const cardEl = document.querySelector('.card-tabuleiro');
  const cartaId = cardEl.dataset.cartaId;
  const cartaDaMao = document.querySelector(`.card-player[data-carta-id="${cartaId}"]`);

  // Adiciona +1 de cada recurso ao jogador atual
  document.getElementById('p1-tijolos').classList.add('brilho-animado');
  document.getElementById('p1-armas').classList.add('brilho-animado');
  document.getElementById('p1-cristais').classList.add('brilho-animado');
  const player = players[currentPlayer];
  player.armas += 1;
  player.tijolos += 1;
  player.cristais += 1;
  attUI(); // Atualiza os dados na interface
  setTimeout(() => {
    document.getElementById('p1-tijolos').classList.remove('brilho-animado');
    document.getElementById('p1-armas').classList.remove('brilho-animado');
    document.getElementById('p1-cristais').classList.remove('brilho-animado');
  }, 1000);
      // Substitui carta da mão
  novaCarta(cartaDaMao);

  // Esconde tabuleiro
  document.getElementById('tabuleiro').innerHTML = ``;
  proximaRodada();

}




function novaCarta(el) {
  let indicesDisponiveis = Array.from(cartas.keys());
  
  // Remove os IDs das cartas que já estão nas mãos
  document.querySelectorAll('.card-player').forEach(cartaEl => {
    const idAtual = parseInt(cartaEl.dataset.cartaId);
    const pos = indicesDisponiveis.indexOf(idAtual);
    if (pos > -1) indicesDisponiveis.splice(pos, 1);
  });

  // Gera nova carta aleatória entre os disponíveis
  let indiceAleatorio = Math.floor(Math.random() * indicesDisponiveis.length);
  const indiceCarta = indicesDisponiveis[indiceAleatorio];
  const cartaAleatoria = cartas[indiceCarta];

  // Atribui a nova carta ao elemento
  el.dataset.cartaId = indiceCarta;
  el.innerHTML = `
    <img src="${cartaAleatoria.imagem}" class="card-img-top" alt="${cartaAleatoria.nome}">
  `;
}


//ATUALIZAR DADOS INTERFACE
function attUI(){

  for(let i = 1; i <= 2; i++){
    document.getElementById(`p${i}-castelo`).innerHTML = `Castelo: ${players[i].castelo}`;
    document.getElementById(`p${i}-muro`).innerHTML = `Muro: ${players[i].muro}`;
    document.getElementById(`p${i}-tijolos`).innerHTML = `🧱Tijlos: ${players[i].tijolos}`;
    document.getElementById(`p${i}-construtores`).innerHTML = `🔨Construtores: ${players[i].construtores}`;
    document.getElementById(`p${i}-soldados`).innerHTML = `🛡️Soldados: ${players[i].soldados}`;
    document.getElementById(`p${i}-armas`).innerHTML = `⚔️Armas: ${players[i].armas}`;
    document.getElementById(`p${i}-cristais`).innerHTML = `💎Cristais: ${players[i].cristais}`;
    document.getElementById(`p${i}-magos`).innerHTML = `🧙Magos: ${players[i].magos}`;
    atualizarBarras(players[i].castelo, players[i].muro, `barra-p${i}-castelo`, `barra-p${i}-muro`);
  }
}


function atualizarBarras(castelo, muro, idCastelo, idMuro) {
  const casteloPorcentagem = Math.min(Math.max((castelo / 100) * 100, 0), 100);
  const muroPorcentagem = Math.min(Math.max((muro / 100) * 100, 0), 100);

  document.getElementById(idCastelo).style.width = `${casteloPorcentagem}%`;
  document.getElementById(idMuro).style.width = `${muroPorcentagem}%`;
}



function centralizarTabuleiro(){
  const tabuleiro = document.querySelector('.tabuleiro');
  tabuleiro.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// CHAMADA SEMPRE QUE UMA SELECIONAVEL FOR CLICADA
function aplicarEfeito(nomeCarta){
  const carta = cartas.find(c => c.nome === nomeCarta);
  console.log(nomeCarta);

  let njogadorAlvo = currentPlayer === 1 ? 2 : 1;

  const jogador = players[currentPlayer];
  const jogadorAlvo = players[njogadorAlvo];
  const efeito = carta.efeito;
  const recurso = carta.custo.recurso;


  checarDados(jogador,efeito,jogadorAlvo);

  if(typeof efeito.alvo === 'string' && efeito.alvo != 'cristais' || efeito.tipo === 'remover'){
    animarCampoRecursoPerdido(recurso);
    checarNegativo(jogador,recurso);
    attUI();
  }else{
  checarNegativo(jogador,recurso);
  attUI();
  }
}


//CHECAR OS DADOS
function checarDados(jogador,efeito,jogadorAlvo){
  switch (efeito.tipo) {
    case 'adicionar':
      adicionar(jogador,efeito);
      break;

    case 'dano':
      dano(jogadorAlvo,efeito);
      break;

    case 'remover':
      remover(jogadorAlvo,efeito);
      break;

    case 'removertudo':
      remover(jogadorAlvo,efeito);
      break;

    case 'gangorra':
      gangorra(jogador,jogadorAlvo,efeito);
      break;

    case 'gangorratudo':
      gangorraTudo(jogador,jogadorAlvo,efeito);
      break;
  }
}

//CHECAR SE É NEGATIVO
function checarNegativo(jogadorAlvo,coisa){
  if(jogadorAlvo[coisa] < 0) jogadorAlvo[coisa] = 0;
}



//FUNCOES DE EFEITOS DAS CARTAS
function adicionar(jogador, efeito){
  jogador[efeito.alvo] += efeito.quantidade;
  console.log(`Elemento após ser adicionado: ${jogador[efeito.alvo]}`);
  animarCampoAdicionar(efeito.alvo);
  attUI();
}


function dano(jogadorAlvo, efeito){
  let dano = efeito.quantidade;
  let muroAtual = jogadorAlvo.muro;

  if(muroAtual > 0){
    jogadorAlvo.muro -= dano;
    animarCampoDanoMuro();

    if(jogadorAlvo.muro < 0){
       let overkill = Math.abs(jogadorAlvo.muro);
       jogadorAlvo.muro = 0;
       jogadorAlvo.castelo -= overkill;
       if(jogadorAlvo.castelo < 0) jogadorAlvo.castelo = 0;
       animarCampoDanoCasteloMuro();
    }
  }else{
    jogadorAlvo.castelo -= dano;
    animarCampoDanoCastelo();
  }
  attUI();
}


function remover(jogadorAlvo,efeito){

  if(typeof efeito.alvo === 'string'){
    jogadorAlvo[efeito.alvo] -= efeito.quantidade;
    checarNegativo(jogadorAlvo,efeito.alvo);
    animarCampoRemover(efeito.alvo);
  
  }else if(Array.isArray(efeito.alvo)){
    efeito.alvo.forEach(recurso => {
      jogadorAlvo[recurso] -= efeito.quantidade;
      checarNegativo(jogadorAlvo,recurso);
      animarCampoRemoverVarios(recurso);
    })
  }
  attUI();
}


function gangorra(jogador,jogadorAlvo,efeito){

  if(typeof efeito.alvo === 'string'){
    jogador[efeito.alvo] += efeito.quantidade[0];
    jogadorAlvo[efeito.alvo] -= efeito.quantidade[1];
    checarNegativo(jogadorAlvo,efeito.alvo);
    animarCampoRemover(efeito.alvo);
    animarCampoAdicionar(efeito.alvo);

  
  }else if(Array.isArray(efeito.alvo)){
    efeito.alvo.forEach(recurso =>{
      if(jogadorAlvo[recurso] >= 5){
        jogador[recurso] += efeito.quantidade;
        jogadorAlvo[recurso] -= efeito.quantidade;
      }else if(jogadorAlvo[recurso] > 0 && jogadorAlvo[recurso] < 5){
        jogador[recurso] += jogadorAlvo[recurso];
        jogadorAlvo[recurso] = 0;

      }else{
        jogadorAlvo[recurso] = 0;
      };
      animarCampoAdicionar(recurso);
      animarCampoRemover(recurso);
    });
  }
  attUI();
}


function gangorraTudo(jogador,jogadorAlvo,efeito){

  efeito.alvo.forEach(recurso =>{
    if(jogadorAlvo[recurso] === 0 && recurso === 'tijolos' || 
      jogadorAlvo[recurso] === 0 && recurso === 'armas' ||
      jogadorAlvo[recurso] === 0 && recurso === 'cristais'){
      jogador[recurso] ++;
      jogadorAlvo[recurso] = 0;
    }else if(jogadorAlvo[recurso] === 1 && recurso === 'construtores' || 
      jogadorAlvo[recurso] === 1 && recurso === 'soldados' ||
      jogadorAlvo[recurso] === 1 && recurso === 'magos'
    ){
      jogador[recurso] ++;
      jogadorAlvo[recurso] = 1;

    }else{
      jogador[recurso] ++;
      jogadorAlvo[recurso] --;
    };
    animarCampoGangorraTudo();
  attUI();
});

}




function jogarCarta(el){


  const cartaId = el.closest('.card-tabuleiro').dataset.cartaId;
  const nomeCarta = cartas[cartaId].nome;
  const carta = cartas[cartaId];
  const custo = carta.custo.quantidade;
  const recurso = carta.custo.recurso;

  if (players[currentPlayer][recurso] >= custo) {
    players[currentPlayer][recurso] -= custo;
    desabilitarSelecao();
    document.getElementById("btn-jogar").classList.add('invisivel');
    document.getElementById("btn-trocar").classList.add('invisivel');
    document.querySelector('.card-tabuleiro').classList.add('animar-carta-jogada-primeira');
    document.getElementById('somflip').play();
  
    setTimeout(() =>{
      tocarSom(nomeCarta);
      aplicarEfeito(nomeCarta);
    },1000);
  
    setTimeout(() =>{
      document.querySelector('.card-tabuleiro').classList.remove('animar-carta-jogada-primeira');
      const maoJogador = document.querySelectorAll('.card-player');
      maoJogador.forEach(cartaEl => {
        if (cartaEl.dataset.cartaId === cartaId) {
          novaCarta(cartaEl); // substitui pela nova carta
        }
      });
      proximaRodada();

  },2000);  
  } else {
  const textBox = document.createElement('div');
  const pai = document.querySelector('.tabuleiro');
  textBox.className = 'txtBox';
  textBox.innerHTML = `
  <p class="card-text-tabuleiro">Sem recurso suficiente!</p>
  <button class="btn btn-card text-white bg-success" onclick="cancelarTroca()">Ok</button>`;
  pai.appendChild(textBox);
  }
}





// Função genérica para animar um elemento
function animarElemento(player, recurso, classe) {
  const id = `p${player}-${recurso}`;
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.classList.add(classe);
    setTimeout(() => {
      elemento.classList.remove(classe);
    }, 1000);
  }
}

// Funções específicas utilizando a genérica
function animarCampoRecursoPerdido(recurso) {
  animarElemento(currentPlayer, recurso, 'dark-animado-recurso');
}

function animarCampoAdicionar(efeito) {
  animarElemento(currentPlayer, efeito, 'brilho-animado');
}

function animarCampoDanoMuro() {
  const alvo = currentPlayer == 1 ? 2 : 1;
  animarElemento(alvo, 'muro', 'dark-animado');
}

function animarCampoDanoCastelo() {
  const alvo = currentPlayer == 1 ? 2 : 1;
  animarElemento(alvo, 'castelo', 'dark-animado');
}

function animarCampoDanoCasteloMuro() {
  const alvo = currentPlayer == 1 ? 2 : 1;
  animarElemento(alvo, 'castelo', 'dark-animado');
  animarElemento(alvo, 'muro', 'dark-animado');
}

function animarCampoRemover(efeito) {
  const alvo = currentPlayer == 1 ? 2 : 1;
  animarElemento(alvo, efeito, 'dark-animado');
}

function animarCampoRemoverVarios(recurso) {
  animarCampoRemover(recurso); // mesma lógica
}

// Otimização da gangorra tudo
function animarCampoGangorraTudo() {
  const recursos = ['tijolos', 'armas', 'cristais', 'construtores', 'soldados', 'magos'];
  const inimigo = currentPlayer == 1 ? 2 : 1;
  const jogador = currentPlayer;

  recursos.forEach(recurso => {
    animarElemento(inimigo, recurso, 'dark-animado');
    animarElemento(jogador, recurso, 'brilho-animado');
  });
}


//TOCAR O SOM CORRESPONDENTE
function tocarSom(el){
  const nomeCarta = el;
  const carta = cartas.find(c => c.nome === nomeCarta);
  const efeito = carta.efeito;

  switch (efeito.tipo) {
    case 'adicionar':
      if (efeito.alvo === 'castelo' || efeito.alvo === 'muro') {
        document.getElementById("somcastelo").play();
      } else {
        document.getElementById("somadicionar").play();
      }
      break;
  
    case 'dano':
      document.getElementById("somdano").play();
      break;
  
    case 'gangorra':
      document.getElementById("somgangorra").play();
      break;

      case 'gangorratudo':
        document.getElementById("sommaldicao").play();
        break;
  
    case 'remover':
      document.getElementById("somremover").play();
      break;
  }
}


//COMEÇAR A VEZ DO PLAYER E DO BOT
function comecarVez(){
  const textBox = document.createElement('div');
  const pai = document.querySelector('.tabuleiro');
  textBox.className = 'txtBox';
  if(currentPlayer === 1){
  textBox.textContent = 'Sua Vez';
  }else{
    textBox.textContent = 'Vez do Bot';	
    console.log('Vez do Bot');
  }
  pai.appendChild(textBox);
  desabilitarSelecao();

  if(currentPlayer === 1){
    document.getElementById('p1-tijolos').classList.add('brilho-animado');
    document.getElementById('p1-armas').classList.add('brilho-animado');
    document.getElementById('p1-cristais').classList.add('brilho-animado');
    setTimeout(() =>{
      document.getElementById('p1-tijolos').classList.remove('brilho-animado');
      document.getElementById('p1-armas').classList.remove('brilho-animado');
      document.getElementById('p1-cristais').classList.remove('brilho-animado');
      textBox.remove();
      habilitarSelecao();
    },1000);
  }else{
    {
      document.getElementById('p2-tijolos').classList.add('brilho-animado');
      document.getElementById('p2-armas').classList.add('brilho-animado');
      document.getElementById('p2-cristais').classList.add('brilho-animado');
      setTimeout(() =>{
        document.getElementById('p2-tijolos').classList.remove('brilho-animado');
        document.getElementById('p2-armas').classList.remove('brilho-animado');
        document.getElementById('p2-cristais').classList.remove('brilho-animado');
        textBox.remove();
      },1000);
    }
  }
}



//DESABILITAR SELECAO 
function desabilitarSelecao(){
  const classeCampo = document.querySelector('.main');
  classeCampo.classList.add('naoclicavel');
}


//HABILITAR NOVAMENTE
function habilitarSelecao(){
  const classeCampo = document.querySelector('.main');
  classeCampo.classList.remove('naoclicavel');
}



//Começa o jogo
comecarVez();
attUI();
gerarCartas();
centralizarTabuleiro();



//VERIFICAR QUAL JOGADOR RECEBE RECURSOS AO FINAL DA RODADA
function verificarJogador(){
  if(currentPlayer === 1){
    const p = players[2];
    p.tijolos += p.construtores;
    p.armas += p.soldados;
    p.cristais += p.magos;
    }else{
      const p = players[1];
      p.tijolos += p.construtores;
      p.armas += p.soldados;
      p.cristais += p.magos;
    }
}


//CHAMA PROXIMA RODADA
function proximaRodada(){

  if(checarCondicaoVitoria() == true){
    return;
  }

  verificarJogador();
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  if(currentPlayer === 1){
    habilitarSelecao();
  }

  if(currentPlayer === 2){
    comecarVez();
    setTimeout(() => {
      botJoga();
    }, 1000);
  }
  attUI();
}


//FAZER O BOT JOGAR
function botJoga() {
  const bot = players[currentPlayer];
  let cartaBot;
  let custo;
  let recurso;
  let tentativas = 0;
  const maxTentativas = cartas.length;

  while (tentativas < maxTentativas) {
    const indiceCartaBot = Math.floor(Math.random() * cartas.length);
    cartaBot = cartas[indiceCartaBot];
    custo = cartaBot.custo.quantidade;
    recurso = cartaBot.custo.recurso;

    if (bot[recurso] >= custo) {
      break; // encontrou uma carta válida, sai do loop
    }

    tentativas++;
  }

  if (tentativas < maxTentativas) {
    bot[recurso] -= custo;
    mostrarCartaBot(cartaBot);
    document.getElementById("somflip").play();
    document.querySelector('.card-tabuleiro').classList.add('animar-carta-jogada-primeira');
    setTimeout(() => {
      tocarSom(cartaBot.nome);
      aplicarEfeito(cartaBot.nome);
    }, 1000);
    setTimeout(() => {
      document.querySelector('.card-tabuleiro').classList.remove('animar-carta-jogada-primeira');
      proximaRodada();
      comecarVez();
    }, 2000);
  } else {
    console.log("Bot não possui recursos suficientes para jogar nenhuma carta.");
    setTimeout(() => {
      proximaRodada();
      comecarVez();
    }, 1000);
  }
}


//Mostrar Carta do Bot
function mostrarCartaBot(cartaBot){
  const cartaId = cartaBot.nome;
  const tabuleiro = document.getElementById('tabuleiro');
  
  tabuleiro.innerHTML = `
    <div class="card-tabuleiro card" data-carta-id="${cartaId}">
      <img src="${cartaBot.imagem}" class="card-img-top" alt="${cartaBot.nome}">
      <div class="card-body">
          <h5 class="card-title">${cartaBot.nomecompleto}</h5>
          <p class="card-text-tabuleiro">${gerarDescricao(cartaBot)}</p>
          <p class="card-text-tabuleiro">${gerarTextoCusto(cartaBot)}</p>
      </div>
    </div>
  `;
}



//CONDICOES DE VITORIA E DERROTA

function vencer(){
  habilitarSelecao();
  const tela = document.createElement('div');
  const pai = document.querySelector('.main');
  tela.className = ('txtBox');
  tela.innerHTML = `Você venceu! Clique no botão para jogar novamente.
    <button class="button" onclick="reiniciarJogo()">Recomeçar</button> `;
  pai.appendChild(tela);
  document.querySelector('.hand').classList.add('naoclicavel');
}


function perder(){
  habilitarSelecao();
  const tela = document.createElement('div');
  const pai = document.querySelector('.main');
  tela.className = ('txtBox');
  tela.innerHTML = `Você perdeu! Clique no botão para jogar novamente.
    <button class="button" onclick="reiniciarJogo()">Recomeçar</button> `;
  pai.appendChild(tela);
  document.querySelector('.hand').classList.add('naoclicavel');
}


function checarCondicaoVitoria(){
  if(players[1].castelo <= 0 || players[2].castelo >= 100){
    perder();
    return true;
  }

  if(players[2].castelo <= 0 || players[1].castelo >= 100){
    vencer();
    return true;
  }
}



//REINICIAR
function reiniciarJogo() {
  document.querySelector('.hand').classList.remove('naoclicavel');
  document.querySelector('.txtBox').remove();

  players[1] = {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  };
  players[2] = {
    castelo: 30,
    muro: 10,
    tijolos: 5,
    armas: 5,
    cristais: 5,
    construtores: 2,
    soldados: 2,
    magos: 2
  };

  currentPlayer = 1;
  gerarCartas();
  centralizarTabuleiro();
  attUI();
  habilitarSelecao();
  comecarVez();
}



function mensagemVoltarInicio(){
  const textBox = document.createElement('div');
  const pai = document.querySelector('.tabuleiro');
  textBox.className = 'txtBox';
  textBox.innerHTML = `
  <p class="card-text-tabuleiro">Voltar ao Início?</p>
  <a href="index.html"><button class="btn btn-card text-white bg-success">Sim</button></a>
  <button class="btn btn-card text-white bg-danger" onclick="cancelarTroca()">Não</button>`;
  pai.appendChild(textBox);
}