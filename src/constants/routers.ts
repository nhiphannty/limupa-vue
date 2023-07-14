import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Shop from "../pages/Shop.vue";
import ProductCatalog from "../pages/ProductCatalog.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
import LoginRegister from "../pages/LoginRegister/LoginRegister.vue";
import MyAccount from "../pages/MyAccount.vue";
import Checkout from "../pages/Checkout.vue";
import { useAuthStore } from "../stores/useAuthStore";

export const routeName = {
    Home: "Home",
    Shop: "Shop",
    ProductCatalog: "Product Catalog",
    ShoppingCart: "Shopping Cart",
    LoginRegister: "Login | Register",
    MyAccount: "My Account",
    Checkout: "Checkout",
};

const routes = [
    {
        path: "/",
        name: routeName.Home,
        component: Home,
        isRequiredAuth: false,
    },
    {
        path: "/shop",
        name: routeName.Shop,
        component: Shop,
        isRequiredAuth: false,
    },
    {
        path: "/product/:id",
        name: routeName.ProductCatalog,
        component: ProductCatalog,
        isRequiredAuth: false,
    },
    {
        path: "/shoppingcart",
        name: routeName.ShoppingCart,
        component: ShoppingCart,
        isRequiredAuth: false,
    },
    {
        path: "/loginregister",
        name: routeName.LoginRegister,
        component: LoginRegister,
        isRequiredAuth: false,
    },
    {
        path: "/myaccount",
        name: routeName.MyAccount,
        component: MyAccount,
        isRequiredAuth: true,
    },
    {
        path: "/checkout",
        name: routeName.Checkout,
        component: Checkout,
        isRequiredAuth: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

router.beforeEach((to) => {
    const requiredAuthPages = routes.filter((r) => r.isRequiredAuth);
    const authRequired = requiredAuthPages.find((r) => r.name == to.name);
    const auth = useAuthStore();

    if (authRequired && auth.user == null) {
        auth.returnUrl = to.fullPath;
        return { name: routeName.LoginRegister };
    }
});

export default router;
