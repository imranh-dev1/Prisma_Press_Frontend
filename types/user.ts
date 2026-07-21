export interface Profile {
    profilePhoto?: string;
    bio?: string;
    phone?: string;
}

export interface UserInterface {
    id: string;
    name: string;
    email: string;
    role: string;
    activeStatus: string;
    createdAt: string;
    updatedAt: string;
    profile?: Profile;
}