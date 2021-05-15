import App from "./components/App.vue";
import { createApp } from "vue";
import {store} from "./store";
import registerListeners from "./storeIPCMutator";

const app = createApp(App);

app.use(store);
app.mount('#app');

registerListeners();
