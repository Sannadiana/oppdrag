let cardApp = new Vue({
    el: "#flow-app",
    data: {
        cardList: [{
                name: "Design registration page",
                task: "* Use fonts xyz and colorpalet æøå",
                responsable: "Knut Iversen",
                image: "images/knutIversen.png"

            }, {
                name: "Design logo",
                task: "* Make it for web, tablet and mobile",
                responsable: "Anne Aur",
                image: "images/anneAur.png"
            }, {
                name: "Design login page",
                task: "* Design for login by mail, phone nr. or SoMe",
                responsable: "Knut Are",
                image: "images/knutAre.png"
            }, {
                name: "Design content page",
                task: "* Be able to show news, updates and menu",
                responsable: "Lise Charlotte",
                image: "images/liseChar.png"
            },
            {
                name: "Design About page",
                task: "* Info about, vision, company, offices, history",
                responsable: "Nils Johan",
                image: "images/nilsJohan.png"
            },
            {
                name: "Design career page",
                task: "* Post cards about diffrent positions",
                responsable: "Reidun Lise",
                image: "images/reidunLise.png"
            }
        ]
    }
});