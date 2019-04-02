Vue.component('make-order', {
    name: 'MakeOrder',
    template: `<div>
        <form id="make-order">
            <label>Tittel</label>
            <input type="text" v-model="title">

            <label>Beskrivelse</label>
            <input type="text" v-model="desc">          

            <label>Dato</label>
            <input type="text" autocomplete="off" id="datepicker" v-model="date">

            <label>Lokasjon</label>
            <select type="text" v-model="location">
                <option value="Afganistan">Afganistan</option>
                <option value="Amerikas forente stater">Amerikas forente stater</option>
                <option value="Russland">Russland</option>
                <option value="Syria">Syria</option>
            </select>
            
            
        
        </form>
        <input type="button" value="Slett">
        <input type="button" value="Send ordre" v-on:click="submitOrder">
    </div>
    `,
    data() {
        return {
            title: "",
            desc: "",
            date: "",
            location: ""
        }
    },
    methods: {
        submitOrder() {
            const orderData = {
                title: this.title,
                desc: this.desc,
                date: this.date,
                location: this.location
            }
            this.$emit('new-order', orderData)
            this.title = ""
            this.desc = ""
            this.date = ""
            this.location = ""
        }
    },
    mounted() {
        $("#datepicker").datepicker({
            onSelect: (dateText) => {
                this.date = dateText
            }
        });
    },
    beforeDestory() {
        $("#datepicker").datepicker('destroy');
    }
})