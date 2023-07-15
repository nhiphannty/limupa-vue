import { IProductFakeStore } from "./IProduct";

export default interface ITab {
    Key: number;
    Title: string;
    Products?: IProductFakeStore[];
}
