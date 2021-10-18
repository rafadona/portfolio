const Conhecimentos = [
    {
        id: 1,
        nome: "HTML5",
        img: "../img/logos/w3_html5-icon.svg",

    },
    {
        id: 2,
        nome: "CSS3",
        img: "../img/logos/w3_css-icon.svg",

    },
    {
        id: 3,
        nome: "JavaScript",
        img: "../img/logos/Unofficial_JavaScript_logo_2.svg",

    },
    {
        id: 4,
        nome: "NodeJS",
        img: "../img/logos/nodejs-icon.svg",

    },
    {
        id: 5,
        nome: "Firebase",
        img: "../img/logos/firebase-icon.svg",

    },
    {
        id: 6,
        nome: "Git",
        img: "../img/logos/git-scm-icon.svg",

    },
    {
        id: 7,
        nome: "NodeJS",
        img: "../img/logos/reactjs-icon.svg",

    },
    {
        id: 8,
        nome: "Tailwind CSS",
        img: "../img/logos/tailwindcss-icon.svg",

    },

];


const conhecimentos = document.querySelector(".conhecimentos");


function renderConhecimentos(Conhecimentos) {

    return `
      ${Conhecimentos.map((conhecimento) => {
        return `<div class="icone_conhecimento">
        <h3>${conhecimento.nome}</h3>
        <img src="${conhecimento.img}" alt=${conhecimento.nome} />
    </div>`;
    }).join("")}`;
}

conhecimentos.insertAdjacentHTML("afterbegin", renderConhecimentos(Conhecimentos));