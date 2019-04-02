Vue.component('make-order', {
    name: 'MakeOrder',
    template: `<div>
        <form id="make-order">
            <label>Tittel</label>
            <input type="text" v-model="title">

            <label>Beskrivelse</label>
            <input type="text">

            <label>Dato</label>
            <input type="text">

            <div id="lokasjon">Lokasjon
                <input type="text">
            
            </div>
        </form>
        <input type="button" value="Slett">
        <input type="button" value="Send ordre" v-on:click="submitOrder">
    </div>
    `,
    data() {
        return {
            title: "",

        }
    },
    methods: {
        submitOrder() {
            const orderData = {
                title: this.title
            }
            this.$emit('new-order', orderData)
        }
    }
})