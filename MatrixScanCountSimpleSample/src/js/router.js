import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import ResultPage from "./ResultPage.vue";
import ScanPage from "./ScanPage.vue";

const routes = [
    { path: '/results', name: 'results', component: ResultPage },
    { path: '/', name: 'scan', component: ScanPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;