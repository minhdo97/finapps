import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import EntryLayout from '../layouts/EntryLayout.vue'
import {useAuthStore} from "../stores/auth";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '',
            component: AuthLayout,
            meta: {
                requiredAuth: true
            },
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: HomeView,
                    meta: {
                        requiresAuth: true
                    }
                },
            ]
        },
        {
            path: '',
            component: EntryLayout,
            children: [
                {
                    path: '/login',
                    name: 'Login',
                    component: LoginView,
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: RegisterView,
                }
            ]
        },

    ]
});


router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    const requiresAuth = to.matched.some((route) => route.meta && route.meta.requiresAuth);
    if (requiresAuth) {
        if (auth.isAuthenticated) {
            if (["Login", "Register"].includes(to.name)) {
                next({name: "Home"});
            }
            next();
        } else {
            next({name: "Login"});
        }
    } else {
        if (auth.isAuthenticated) {
            next({name: "Home"});
        } else {
            next();
        }
    }

})
router.afterEach(() => {
    setTimeout(function () {
        JqueryDev('.loader-wrap').fadeOut('slow');
    }, 500);
})
export default router
