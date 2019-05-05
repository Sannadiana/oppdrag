Vue.component('solider-detail', {
    template: `
    <div class="solider">
    <div class="solider-info">
        <h1>{{ name }}</h1>
        
    </div>
    <div class="solider-image">
        <img v-bind:src="soliderImage" alt="">
    </div>
    <h1>{{ soliderLocation }}</h1>
</div>
    `,
    props: {
        soliderId: {
            type: Number,
        },
        name: {
            type: String,
        },
        soliderImage: {
            type: String,
        },
        soliderLocation: {
            type: String,
        }
    }
})