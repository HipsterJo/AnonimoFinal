export interface User{
    _id: string;
    email: string;
    isVerified: boolean;
    role: string[];
    favorites: string[];
    planning: string[];
    watching: string[];
    waifu: string[];
    topAnime: string[]
}


export interface UserScheme{
    authData?: User;
};


export interface UserProps{
    user: User;
}