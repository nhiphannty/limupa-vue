import { IProductsAPIParams } from "../interfaces/IProduct";

const APIs = {
    Product: {
        All: "/products",
        Products: (params: IProductsAPIParams) => {
            let api = "/products";
            if (params.Limit) {
                api += `?${ProductsAPIParams.Limit(params.Limit)}`;
            }
            if (params.Sort) {
                api += `${params.Limit ? "&" : "?"}${ProductsAPIParams.Sort(params.Sort)}`;
            }
            return api;
        },
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

export const ProductsAPIParams = {
    Limit: (litmit: number) => `limit=${litmit}`,
    Sort: (sort: Sort) => `sort=${sort}`,
};

export enum Sort {
    Desc = "desc",
}

export default APIs;
