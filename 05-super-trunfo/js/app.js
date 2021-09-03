const naruto = {
    nome: "Naruto",
    imagem: "img/naruto.png",
    atributo: {
        ataque: 8,
        defesa: 7,
        magia: 3
    }
}

const batman = {
    nome: "Batman",
    imagem: "img/batman.jpg",
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 0
    }
};

const cartas = [naruto , batman];
let cartaJogador, cartaMaquina;

function SortearCarta(){
    const numeroDeCartas = 2;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];

    //para mostrar no console antes
    //console.log(cartaJogador, cartaMaquina)
    ExibirCartaJogador();
}

function ExibirCartaJogador(){
    console.log(cartaJogador);
    let divCartaJogador = document.querySelector("#carta-jogador");
    //Forma antiga do JS
    //divCartaJogador.style.backgroundImage = 'url(' + cartaJogador.imagem + ')';
    //Forma Nova
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-persongem-jogador").innerText = cartaJogador.nome;
    cartaJogador.nome;

}

const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () => {
    SortearCarta();
}