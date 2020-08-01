'use strict';

let app = new Vue({
    el: '#vue-app',
    data: {
        name: 'Farhad',
        title: 'Maharramov',
        show: true,
        items: [
            {text: 'Hello'},
            {text: 'My'},
            {text: 'Name'}
        ]
    },

    methods: {
        showConsole(e) {
            console.log(e.target.textContent)
        }
    }
})