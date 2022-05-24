import App from "./App.vue";
import UI from "./components/register.vite";

Vue.use(UI)

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  render: (h) => h(App),
});
