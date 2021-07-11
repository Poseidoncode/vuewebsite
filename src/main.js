import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Primevue from "primevue/config";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import OverlayPanel from "primevue/overlaypanel";
import RadioButton from "primevue/radiobutton";
import ProgressSpinner from "primevue/progressspinner";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
// import "primevue/resources/themes/saga-blue/theme.css";
// import "primevue/resources/themes/fluent-light/theme.css";
// import "primevue/resources/themes/luna-blue/theme.css";
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./assets/tailwind.css";

const app = createApp(App);

app
  .use(router)
  .use(VueAxios, axios)
  .use(Primevue)
  .use(ToastService)
  .mount("#app");

app.component("Calendar", Calendar);
app.component("Button", Button);
app.component("InputSwitch", InputSwitch);
app.component("OverlayPanel", OverlayPanel);
app.component("RadioButton", RadioButton);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Checkbox", Checkbox);
app.component("Textarea", Textarea);
app.component("InputNumber", InputNumber);
app.component("Toast", Toast);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
