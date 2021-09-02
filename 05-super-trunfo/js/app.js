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

const cartas = [naruto, batman];

function SortearCarta() {
    const numeroDeCartas = 2;
    const numeroCartaJogador = parseInt(Math.random() * numeroDeCartas);
    const numeroCartaMaquina = parseInt(Math.random() * numeroDeCartas);
    console.log(numeroCartaJogador, numeroCartaMaquina)
}
SortearCarta();