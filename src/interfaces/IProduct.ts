import { Sort } from "../constants/APIInfomation";

export default interface IProduct {
    Id: number;
    Name: string;
    Price: number;
    Image: string;
    Manufacturer?: string;
    Rating?: number;
}

export interface IProductFakeStore {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    image: string;
    rating: {
        count: number;
        rate: number;
    };
}

export interface IProductsAPIParams {
    Limit?: number;
    Sort?: Sort;
}