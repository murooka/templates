const Vue = require('vue');
const Hello = require('./components/hello.vue');

new Vue({
    el: document.querySelector('#container'),
    components: {
        hello: Hello,
    },
});
