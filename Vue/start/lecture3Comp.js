const comItem = {
    name: 'com-item',
    template: '<p>item info</p>'
}

Vue.component('new-component', {
    props: ['title', ],
    data() {
        return {
            counter: 0,
        }
    },

    components: {
        'comp': comItem,
    },
    methods: {
        increase() {
            this.counter++;
        },
    },

    template: `
    <div>
        <h3>{{title}}</h3>
        <comp></comp>
        <p>counter click {{counter}}</p>
        <button @click="increase">+1</button>
    </div>`

});

// Vue.component('standard-comp', {

//     data() {
//         return { message: 'textMessage' }
//     },
//     methods: {
//         newInfo() {
//             console.log('hello methods');
//         },
//     },
//     computed: {
//         newComp() {
//             return this.message;
//         },
//     },
//     template: '<h2>standard template</h2>'
// })

Vue.component('change1', {
    template: `<h2>info change component </h2>`

});