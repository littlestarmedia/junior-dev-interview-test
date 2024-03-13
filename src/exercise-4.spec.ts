import {findActiveUsersWithPhoneNumbers, User} from './exercise-4';

test('finds active users with phone numbers and formats their names', () => {
    const users: User[] = [
        { name: 'Alice', isActive: true, phone: '123-456-7890' },
        { name: 'Bob', isActive: false, phone: '123-456-7890' },
        { name: 'Charlie', isActive: true, phone: null },
        { name: 'Dave', isActive: true, phone: '098-765-4321' }
    ];
    expect(findActiveUsersWithPhoneNumbers(users)).toEqual(['Alice (123-456-7890)', 'Dave (098-765-4321)']);
});