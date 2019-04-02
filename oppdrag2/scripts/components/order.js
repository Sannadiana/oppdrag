Vue.component('order', {
    name: 'Order',
    template: `<div class="order-box">
        <h1>{{ title }}</h1>
        
        
    </div>
    `,
    props: {
        title: String
    }
})