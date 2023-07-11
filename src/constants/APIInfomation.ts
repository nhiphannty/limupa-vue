const APIs = {
    Product: {
        All: "/products",
        ProductsLimit: (limit: number) => `/products?limit=${limit}`,
        SingleProduct: (id: number) => `/products/${id}`,
        ByCategory: (category: string) => `/products/category/${category}`,
    },
    Category: {
        Categories: "/products/categories",
    },
    Auth: {
        Login: "/auth/login",
        Register: "/users",
    },
};

export default APIs;
