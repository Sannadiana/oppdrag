Vue.component('order', {
    name: 'Order',
    template: `<div class="order-box">
        <h1>{{ title }}</h1>
        <p>{{ desc }} </p>
        <p>{{ date }} </p>
        <p>{{ location }}</p>
        
        
    </div>
    `,
    props: {
        title: String,
        desc: String,
        date: String,
        location: String
    }
})