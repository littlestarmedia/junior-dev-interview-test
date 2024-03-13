export interface User {
    name: string;
    isActive: boolean;
    phone: string | null;
}

export const findActiveUsersWithPhoneNumbers = (users: User[]): string[] =>
    users.filter(user => user.isActive && user.phone).map(user => `${user.name} (${user.phone})`);