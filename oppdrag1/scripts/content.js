let cardApp = new Vue({
    el: "#flow-app",
    data: {
        cardList: [{
            name: "Design registration page:",
            task: "-Use fonts xyz and colorpalet æøå",
            responsable: "Knut Iversen",
            image: "img/knutIversen.png"

        }, {
            name: "Design logo:",
            task: "-For web, tablet and mobile",
            responsable: "Anne Aur",
            image: "img/anneAur.png"
        }, {
            name: "Design login page:",
            task: "-Login by mail, phone nr. or SoMe",
            responsable: "Knut Are",
            image: "img/knutAre.png"
        }, {
            name: "Design content page:",
            task: "-News, updates, menu",
            responsable: "Lise Charlotte",
            image: "img/liseChar.png"
        }]
    }
});