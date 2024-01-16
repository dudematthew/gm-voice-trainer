import { createApp } from "vue";
import { createPinia } from "pinia";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import App from "./app.vue";
import router from "./router";

import "./assets/main.css";

import { CoVoiceOverRecord } from "oh-vue-icons/icons";

addIcons(CoVoiceOverRecord);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("v-icon", OhVueIcon);

app.mount("#app");
