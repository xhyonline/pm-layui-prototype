import { createApp } from "vue";
import layui from "@layui/layui-vue";
import "@layui/layui-vue/lib/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(layui);
app.mount("#app");
