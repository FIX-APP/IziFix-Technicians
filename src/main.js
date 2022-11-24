import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Dropdown from 'primevue/dropdown';
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import i18n from './internationalization/locales/i18n.js'
import './assets/main.css'
// Add Theme and Styles
import 'primevue/resources/themes/md-light-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import TabMenu from 'primevue/tabmenu';
import DataView from 'primevue/dataview';
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import Paginator from 'primevue/paginator';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
// Add PrimeFlex
import 'primeflex/primeflex.css';
const app = createApp(App)
app.component('pv-column',Column);
app.component('pvcolumngroup',ColumnGroup);
app.component('pv-datatable',DataTable);
app.component('pv-dropdown',Dropdown)
app.component('pv-dialog',Dialog)
app.component('pv-paginator',Paginator)
app.component('pv-panel',Panel)
app.component('pv-menu-bar',Menubar)
app.component('pv-tab-menu',TabMenu)
app.component('pv-data-view',DataView)
app.component('pv-input-mask',InputMask)
app.component('pv-button',Button)
app.component('pv-password',Password)
app.component('pv-input-text',InputText)
app.component('pv-card',Card)
app.component('pv-toolbar',Toolbar)
app.use(PrimeVue);
app.use(i18n)
app.use(router);
app.mount('#app');