
let layoutJogador;
let campoCartas;
let textoCard;
let animarCampoDanoCasteloMuro;
let campoRecursos;
let campoFornecedores;


function gerarVariaveisGlobais() {
layoutJogador = document.getElementById("layout-jogador");
campoCartas = document.getElementById("campo-cartas");
textoCard = document.querySelector('.card-body');
campoCastelo = document.querySelector('.status-player');
campoRecursos = document.querySelector('.recursos-player');
campoFornecedores = document.querySelector('.fornecedores-player');
}

gerarVariaveisGlobais();


function mostrarInfoJogador(){



    adicionarDestaque(campoCastelo, 'borda-destaque');

    layoutJogador.classList.remove("invisivel");
    campoCartas.classList.add("invisivel");
    textoCard.innerHTML = `
            <h3><strong>Seu Status</strong></h3>
            <p class="text-tutorial">Este é o seu <strong>Castelo</strong> , que é protegido pelo <strong>Muro</strong>.</p>
            <p class="text-tutorial">Se o seu castelo chegar em 100, você ganha</p>
            <p class="text-tutorial">Se o inimigo fizer ele chegar a 0 , você perde</p>
            <button class="btn btn-marrom" onclick="mostrarInfoRecursos()">Próximo</button>
    `;


}

function mostrarInfoRecursos(){
    adicionarDestaque(campoRecursos, 'borda-destaque');
    retirarDestaque(campoCastelo, 'borda-destaque');
    textoCard.innerHTML = `
            <h3><strong>Seu Status</strong></h3>
            <p class="text-tutorial">Estes são os seus <strong>Recursos</strong> , que são usados para jogar cartas.</p>
            <p class="text-tutorial">Ter recursos é importante para manter seu castelo de pé, ou para fins destrutivos.</p>
            <button class="btn btn-marrom" onclick="mostrarInfoFornecedores()">Próximo</button>
    `;
}


function mostrarInfoFornecedores(){
    adicionarDestaque(campoFornecedores, 'borda-destaque');
    retirarDestaque(campoRecursos, 'borda-destaque');
    textoCard.innerHTML = `
            <h3><strong>Seu Status</strong></h3>
            <p class="text-tutorial">Estes são os seus <strong>Fornecedores</strong> , que são usados para gerar <strong>recursos</strong>.</p>
            <p class="text-tutorial">Sempre que seu turno começar, você recebe os recursos dos respectivos <strong>fornecedores</strong>.</p>
            <button class="btn btn-marrom" onclick="mostrarTextoExtraFornecedores()">Próximo</button>
    `;
}


function mostrarTextoExtraFornecedores(){
    textoCard.innerHTML = `
            <h3><strong>Seu Status</strong></h3>
            <p class="text-tutorial">🧱Tijolos são aumentados por 🔨Construtores</p>
            <p class="text-tutorial">⚔️Armas são aumentadas por 🛡️Soldados</p>
            <p class="text-tutorial">💎Cristais são aumentados por 🧙Magos</p>
            <button class="btn btn-marrom" onclick="mostrarInfoCampoCartas()">Próximo</button>
    `;
}



function mostrarInfoCampoCartas(){
    campoCartas.classList.remove("invisivel");
    const arrayCartas = document.querySelectorAll('.card-player');
    arrayCartas.forEach((carta) => {
        carta.classList.add("borda-destaque");
        carta.classList.remove("border-warning");
    });

    retirarDestaque(campoFornecedores, 'borda-destaque');
    textoCard.innerHTML = `
            <h3><strong>Seu Status</strong></h3>
            <p class="text-tutorial">Este é o seu <strong>Campo de Cartas</strong> , onde você pode selecionar qual carta quer ver mais detalhes.</p>
            <p class="text-tutorial">Ao clicar na imagem da carta, ele aparecerá aqui neste campo, o <strong>tabuleiro</strong>, e você poderá analisá-la.</p>
            <button class="btn btn-marrom" onclick="mostrarInfoCarta()">Próximo</button>
    `;
}

function mostrarInfoCarta(){
    campoCartas.classList.add("invisivel");
    layoutJogador.classList.add("invisivel");
    textoCard.innerHTML = `
    <div class="card-tabuleiro card"">
      <img src="/assets/img/tamandua/tamandua.webp" class="card-img-top" alt="tamandua">
      <div class="card-body">
          <h5 class="card-title"><strong>Tamanduá</strong></h5>
          <p class="card-text-tabuleiro"><strong>Causa 25 de dano</strong></p>
          <p class="card-text-tabuleiro"><strong>Custa 21 de 💎</strong></p>
          <button class="btn btn-card text-white bg-success" id="btn-jogar">Jogar</button>
          <button class="btn btn-card text-white bg-danger" id="btn-trocar">Trocar</button>
          <p class="card-text-tabuleiro">A carta aparecerá com o <strong>Nome</strong>, <strong>Efeito</strong> e <strong>Custo</strong>.</p>
          <p class="card-text-tabuleiro">Você pode clicar em Jogar se tiver o recurso suficiente, ou clicar em <strong>Trocar</strong>.</p>
          <p class="card-text-tabuleiro">Ao Trocar, você recebe +1 de <strong>TODOS</strong> os recursos, troca a carta por outra e passa a vez.</p>
          <button class="btn btn-marrom" onclick="mostrarInfoFinal()">Próximo</button>
      </div>
    
    </div>
    
    `;

}


function mostrarInfoFinal(){
    textoCard.innerHTML = `
            <p class="text-tutorial">Parabéns! Você agora sabe como jogar!</p>
            <p class="text-tutorial">Lembre-se: Você enfrentará um Bot , e ele pode ganhar pelas mesmas condições que você.</p>
            <p class="text-tutorial">Volte ao Início e clique em "Jogar"!</p>
            <a href="index.html"<button class="btn btn-marrom">Voltar</button>
    `;
}


function adicionarDestaque(el,classe){
    el.classList.remove('border-warning');
    el.classList.add(`${classe}`);
}

function retirarDestaque(el,classe){
    el.classList.remove(`${classe}`);
    el.classList.add('border-warning');
}