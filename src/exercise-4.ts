export interface User {
    name: string;
    isActive: boolean;
    phone: string | null;
}

export const findActiveUsersWithPhoneNumbers = (users: User[]): User[] => {
    // Write your answer here
};
