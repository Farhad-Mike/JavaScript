'use strict';

Vue.component('item', {
    props: ['param'],
    template: '<li>{{ param.text }}</li>'
})

new Vue({
    el: '#app',
    data: {
        messages: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'My' },
            { id: 3, text: 'Name' }
        ]
    }
})
