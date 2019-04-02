let adminView = new Vue({
    el: '#admin-view',
    name: 'AdminView',
    data() {
        return {
            orders: []
        }
    },
    methods: {
        onNewOrderCreated(orderData) {
            this.orders.push(orderData)
        }
    }
})