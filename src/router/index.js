//import nProgress from 'nprogress';
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/pages/home/Home.vue'),
    //import: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/auth-components/login/LoginComponent'),
  },
  {
    path: '/principal',
    name: 'principal',
    component: () => import('../components/auth-components/principal/PrincipalComponent'),
     meta: {
       requireAuth: true,
     },
  },
  {
    path: '/financeiro',
    name: 'financeiro',
    component: () => import('../components/auth-components/finaiceiro/FinanceiroComponent'),
     meta: {
       requireAuth: true,
     },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/auth-components/administrativo/AdminComponent'),
     meta: {
       requireAuth: true,
     },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/auth-components/register/RegisterComponent'),
  },
];


///====rota do swagger =============
//  http://localhost:3000/api-docs/
//==================================


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE-URL,
  routes
});
router.beforeResolve((to, from, next)=>{
  if(to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) =>{
  NProgress.done();
});

export default router;