import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faGlobeAmericas,
  faUniversity,
  faTools,
  faCoffee,
  faAward,
  faLightbulb,
  faBriefcase,
  faUsers,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

library.add(
  faEnvelope,
  faGlobeAmericas,
  faUniversity,
  faTools,
  faCoffee,
  faAward,
  faLightbulb,
  faBriefcase,
  faUsers,
  faLaptopCode
);
library.add(faGithub, faLinkedinIn);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
