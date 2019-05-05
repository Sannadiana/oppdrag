let miliApp = new Vue({
    el: '#solider-app',
    data: {
        soliders: [{
                soliderId: 1,
                name: "Mikkel",
                soliderImage: "./images/soldier/mikkel.jpg",
                soliderLocation: "Afganistan"
            },
            {
                soliderId: 2,
                name: "Nils",
                soliderImage: "./images/soldier/nils.jpg",
                soliderLocation: "Russland"
            }, {
                soliderId: 3,
                name: "Felix",
                soliderImage: "./images/soldier/felix.jpg",
                soliderLocation: "Amerikas forente stater"
            },
            {
                soliderId: 4,
                name: "Per",
                soliderImage: "./images/soldier/per.jpg",
                soliderLocation: "Syria"
            }
        ]
    }
})