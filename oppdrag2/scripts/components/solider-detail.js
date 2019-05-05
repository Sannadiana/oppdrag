Vue.component('solider-detail', {
    template: `
    <div class="solider">
    <div class="solider-info">
        <h1>{{ name }}</h1>
    </div>
    <div class="solider-image">
        <img v-bind:src="image" alt="">
    </div>
</div>
    `
})