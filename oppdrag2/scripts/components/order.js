Vue.component('order', {
    name: 'Order',
    template: `<div class="order-box">
        <h1>{{ title }}</h1>
        <p>{{ desc }} </p>
        <p>{{ date }} </p>
        <p>{{ location }} </p>
        <button><i class="fas fa-map-marker-alt"></i></button>
        <img src="./images/afganistan.png"/>
    </div>
    `,
    props: {
        title: String,
        desc: String,
        date: String,
        location: String,
    },
    methods: {
        renderPicture(location) {
            switch (location) {
                case "Afganistan":
                    return "./images/afganistan.png"
            }
            console.log("Sanna is awesome")
        }
    }
})