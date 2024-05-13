export interface UserResponse {
    page:       number;
    perPage:    number;
    total:      number;
    totalPages: number;
    data:       User[];
    support:    Support;
}

export interface User {
    id:        number;
    email:     string;
    firstName: string;
    lastName:  string;
    avatar:    string;
}

export interface Support {
    url:  string;
    text: string;
}

//sssssss
export interface SingleUserResponse {
    data:    User;
}
