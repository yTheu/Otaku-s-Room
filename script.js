const animeList = [
    { title: "Kimetsu no Yaiba", synopsis: "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio...", image: "assets/fundo-kimetsu-no-yaiba.jpg" },
    { title: "One Piece", synopsis: "Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger...", image: "assets/fundo-one-piece.jpg" },
    { title: "Chainsaw Man", synopsis: "Denji é um adolescente que mora com Pochita, o Demônio da Motosserra. Por conta das dívidas que herdou de seu pai...", image: "assets/fundo-chainsaw-man.jpg" }
];

let currentIndex = 0;

function changeAnime() {
    const anime = animeList[currentIndex];
    document.querySelector('.anime-title').textContent = anime.title;
    document.querySelector('.anime-desc').textContent = anime.synopsis;
    document.querySelector('.animes').style.backgroundImage = `url('${anime.image}')`;

    currentIndex = (currentIndex + 1) % animeList.length;
}

setInterval(changeAnime, 3000);
changeAnime();
