let adminView = new Vue({
    el: '#admin-view',
    name: 'AdminView',
    data: {
        orders: []
    },
    methods: {
        testCreated(entryTitle, entryDesc, entryDate, entryLocation) {
            let orderData = {
                title: entryTitle,
                desc: entryDesc,
                date: entryDate,
                location: entryLocation
            };
            if (typeof orderData.title === 'undefined' || typeof orderData.desc === 'undefined' || typeof orderData.date === 'undefined' || typeof orderData.location === 'undefined') {
                return false;
            } else {
                return true;
            }
        },
        onNewOrderCreated(orderData) {
            this.orders.push(orderData)
        }
    }
})