export default interface IUser {
    Id: number;
    Username: string;
    Token?: string;
    Name?: {
        FirstName: string;
        LastName: string;
    };
}
