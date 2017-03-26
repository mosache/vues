const Vue = require('Vue');
const app = require('./index/app');
const cus_checkbox = require('./index/component/cus_checkbox');
new Vue({
    el:'#app',
    components: {
      app:app,
      'cus-checkbox':cus_checkbox
    }
});
