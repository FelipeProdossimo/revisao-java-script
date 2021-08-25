function CarregarAnimes() {
    let objetoAnimes = [
        {
            foto: "black-clover.jpg",
            nome: "Black Clover"
        },
        {
            foto: "boku-no-hero.jpg",
            nome: "Boku No Hero Academy"
        },
        {
            foto: "nanatsu.jpg",
            nome: "Nanatsu No Taizai"
        },
        {
            foto: "tokyo.jpg",
            nome: "Tokyo Ghoul"
        },
        {
            foto: "naruto-ship.jpg",
            nome: "Naruto Shippuuden"
        },
        {
            foto: "one-piece.jpg",
            nome: "One Piece"
        }
    ]
    let listaAnimes = document.querySelector(".lista-animes");
    let cartao = "";
    for (let i = 0; i < objetoAnimes.length; i++) {
        cartao += "<button>";
        cartao += "<div class='cartao'>";
        cartao += "<img src='img/" + objetoAnimes[i].foto + "'>";
        cartao += objetoAnimes[i].nome;
        cartao += "</div>"
        cartao += "</button>";
    }
    listaAnimes.innerHTML = cartao;
}

window.onload = function () {
    CarregarAnimes();
}