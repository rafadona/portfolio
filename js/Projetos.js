
const Projetos = [
  {
    id: 1,
    nome: "Ação Solidária Adventista",
    href: "asa",
    img: "../img/asa1.jpg",
    site: "https://asa-indaiatuba-central.vercel.app",
    github: ""
  },
  {
    id: 2,
    nome: "Loja Virtual",
    href: "lojaVirtual",
    img: "../img/lojaVirtual1.jpg",
    site: "https://ecommerce-rafadona.vercel.app/",
    github: "https://github.com/rafadona/ecommerce"
  },
  {
    id: 3,
    nome: "Site de Receitas",
    href: "receitas",
    img: "../img/receitas1.jpg",
    site: "https://rafael-dona-receitas.vercel.app",
    github: "https://github.com/rafadona/receitas"
  },
  {
    id: 4,
    nome: "RAFABANK",
    href: "rafabank",
    img: "../img/rafabank1.jpg",
    site: "https://rafadona.github.io/rafabank/",
    github: "https://github.com/rafadona/rafabank"
  },

  {
    id: 5,
    nome: "Portfólio (Este Site)",
    href: "portfolio",
    img: "../img/portfolio1.jpg",
    site: "https://rafael-dona.vercel.app",
    github: "https://github.com/rafadona/portfolio"
  },


];



const portfolio = document.querySelector(".portfolio");
const paginaAtual = location.pathname;
const locationSplit = location.pathname.slice(9).split(".")[0];
const locationSplitLive = location.pathname.slice(9).split(".")[0];
const outrosFiltrado = Projetos.filter((projeto) => projeto.href != locationSplit);



function outrosProjetos(Projetos) {

  return `
    ${Projetos.map((projeto) => {
    return `<div>
              <div class="container">
                <a href=${paginaAtual === "/index.html" || "/" ? `../projeto/${projeto.href}.html` : `./${projeto.href}.html`} class="portfolio__item">
                  <img
                    src="${projeto.img}"
                    alt="${projeto.nome}"
                    class="portfolio__img"
                  />
                </a>
              </div>
        
              <a class="social-list__link btn__portfolio__item" href="../projeto/${projeto.href}.html">
                <i class="fas fa-globe-americas fa-lg">
                  ${projeto.nome}
                </i>
              </a>
            </div>
          </div>`;
  }).join(``)}`;
}

portfolio.insertAdjacentHTML("afterbegin", outrosProjetos(outrosFiltrado));





