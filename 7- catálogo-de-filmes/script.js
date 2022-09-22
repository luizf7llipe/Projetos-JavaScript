var lista_de_filmes = [
{
    nome:"Homem de Ferro",
    img: "https://static.wikia.nocookie.net/universocinematograficomarvel/images/4/45/P%C3%B4ster_em_BR_de_Homem_de_Ferro.jpg/revision/latest?cb=20190325210225&path-prefix=pt",
    trailer: "https://www.youtube.com/watch?v=Vo9l81vSZn0&ab_channel=FluxoEntretenimento",
},

{
    nome:"Homem de Ferro 2",
    img: "https://static.wikia.nocookie.net/marvel/images/0/0c/Homem_de_Ferro_2_p%C3%B4ster.jpg/revision/latest/scale-to-width-down/1000?cb=20170809144405&path-prefix=pt-br",
    trailer: "https://www.youtube.com/watch?v=wKtcmiifycU&ab_channel=Movieclips",
},

{
    nome:"Homem de Ferro 3",
    img: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/Poster_de_HdF_3.jpg/revision/latest/scale-to-width-down/1000?cb=20200704204728&path-prefix=pt-br",
    trailer: "https://www.youtube.com/watch?v=igfXmU1r_mc&ab_channel=MarvelBrasil",
},
]

window.onload = function(){

   for (let index = 0; index < lista_de_filmes.length; index++) {
    var filme =  `
    <a href="${lista_de_filmes[index].trailer}">
    <div id="filme">
    <img src="${lista_de_filmes[index].img}">
    <p>${lista_de_filmes[index].nome}</p>
    </div>
    </a>
    `

    document.getElementById("filmes").innerHTML += filme;
   }
}