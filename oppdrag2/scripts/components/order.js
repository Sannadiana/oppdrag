Vue.component('order', {
    name: 'Order',
    template: `<div class="order-box">
        <h1 id="title">{{ title }}</h1>
        <p>{{ desc }} </p>
        <p>{{ date }} </p>
        <img v-bind:src="renderPicture(location)" />
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
                    return "./images/banner/afganistan.png"
                    break;
                case "Amerikas forente stater":
                    return "./images/banner/usa.jpg"
                    break;
                case "Russland":
                    return "./images/banner/russland.jpg"
                    break;
                case "Syria":
                    return "./images/banner/syria.png"
                    break;

            }
        }
    }
})