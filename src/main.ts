import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from "vue";
import "./assets/styles/style.css";
import "./assets/styles/responsive.css";
import "./assets/styles/helper.css";
import "./assets/styles/animate.css";
import "./assets/styles/jquery-ui.min.css";
import "./assets/styles/magnific-popup.css";
import "./assets/styles/material-design-iconic-font.min.css";
import "./assets/styles/meanmenu.css";
import "./assets/styles/nice-select.css";
import "./assets/styles/owl.carousel.min.css";
import "./assets/styles/slick.css";
import "./assets/styles/venobox.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from "./App.vue";

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");