// import "./assets/main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "aos";
import 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js';

import PureCounter from "@srexi/purecounterjs";

new PureCounter();

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
