
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
            <h3>Seu Status</h3>
            <p class="text-tutorial">Este é o seu Castelo , que é protegido pelo Muro.</p>
            <p class="text-tutorial">Se o seu castelo chegar em 100, você ganha</p>
            <p class="text-tutorial">Se o inimigo fizer ele chegar a 0 , você perde</p>
            <button class="btn btn-marrom" onclick="mostrarInfoRecursos()">Próximo</button>
    `;


}

function mostrarInfoRecursos(){
    adicionarDestaque(campoRecursos, 'borda-destaque');
    retirarDestaque(campoCastelo, 'borda-destaque');
    textoCard.innerHTML = `
            <h3>Seu Status</h3>
            <p class="text-tutorial">Estes são os seus Recursos , que são usados para jogar cartas.</p>
            <p class="text-tutorial">Ter recursos é importante para manter seu castelo de pé, ou para fins destrutivos.</p>
            <button class="btn btn-marrom" onclick="mostrarInfoFornecedores()">Próximo</button>
    `;
}


function mostrarInfoFornecedores(){
    adicionarDestaque(campoFornecedores, 'borda-destaque');
    retirarDestaque(campoRecursos, 'borda-destaque');
    textoCard.innerHTML = `
            <h3>Seu Status</h3>
            <p class="text-tutorial">Estes são os seus Fornecedores , que são usados para gerar recursos.</p>
            <p class="text-tutorial">Sempre que seu turno começar, você recebe os recursos dos respectivos fornecedores.</p>
            <button class="btn btn-marrom" onclick="mostrarTextoExtraFornecedores()">Próximo</button>
    `;
}


function mostrarTextoExtraFornecedores(){
    textoCard.innerHTML = `
            <h3>Seu Status</h3>
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
            <h3>Suas Cartas</h3>
            <p class="text-tutorial">Este é o seu Campo de Cartas , onde você pode selecionar qual carta quer ver mais detalhes.</p>
            <p class="text-tutorial">Ao clicar na imagem da carta, ele aparecerá aqui neste campo, o tabuleiro, e você poderá analisá-la.</p>
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
          <h5 class="card-title">Tamanduá</h5>
          <p class="card-text-tabuleiro">Causa 25 de dano</p>
          <p class="card-text-tabuleiro">Custa 21 de 💎</p>
          <button class="btn btn-card text-white bg-success" id="btn-jogar">Jogar</button>
          <button class="btn btn-card text-white bg-danger" id="btn-trocar">Trocar</button>
          <br>
          <br>
          <p class="card-text-tabuleiro">A carta aparecerá com o Nome, Efeito e Custo.</p>
          <p class="card-text-tabuleiro">Você pode clicar em Jogar se tiver o recurso suficiente, ou clicar em Trocar.</p>
          <p class="card-text-tabuleiro">Ao Trocar, você recebe +1 de TODOS os recursos, troca a carta por outra e passa a vez.</p>
          <button class="btn btn-marrom" onclick="mostrarInfoFinal()">Próximo</button>
      </div>
    
    </div>
    
    `;

}


function mostrarInfoFinal(){
    textoCard.innerHTML = `
            <p class="text-tutorial">Parabéns! Você agora sabe como jogar!</p>
            <br>
            <p class="text-tutorial">Lembre-se: Você enfrentará um Bot , e ele pode ganhar pelas mesmas condições que você.</p>
            <br>
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