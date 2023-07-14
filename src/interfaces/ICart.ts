export default interface ICart {
    Product: {
        Id: number;
        Title?: string;
        Image?: string;
        Price: number;
    };
    Quantity: number;
}
