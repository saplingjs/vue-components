/* Load Vue */
window.Vue = require("vue");

Vue.component("login", require("./components/Login.vue").default);
Vue.component("signup", require("./components/Signup.vue").default);
Vue.component("recovery", require("./components/Recovery.vue").default);
Vue.component("user-menu", require("./components/UserMenu.vue").default);

new Vue({
	el: "#app"
});