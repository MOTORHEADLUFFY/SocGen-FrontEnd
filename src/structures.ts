
export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    department: string;
    dateOfBirth: Date;
}

export interface Response {
    responseCode: string,
    responseMessage: string
}