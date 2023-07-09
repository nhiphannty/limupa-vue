import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Shop from "../pages/Shop.vue";
import ProductCatalog from "../pages/ProductCatalog.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
import LoginRegister from "../pages/LoginRegister.vue";

export const routeName = {
    Home: "Home",
    Shop: "Shop",
    ProductCatalog: "Product Catalog",
    ShoppingCart: "Shopping Cart",
    LoginRegister: "Login | Register",
};

const routes = [
    {
        path: "/",
        name: routeName.Home,
        component: Home,
    },
    {
        path: "/shop",
        name: routeName.Shop,
        component: Shop,
    },
    {
        path: "/product/:id",
        name: routeName.ProductCatalog,
        component: ProductCatalog,
    },
    {
        path: "/shoppingcart",
        name: routeName.ShoppingCart,
        component: ShoppingCart,
    },
    {
        path: "/loginregister",
        name: routeName.LoginRegister,
        component: LoginRegister,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
