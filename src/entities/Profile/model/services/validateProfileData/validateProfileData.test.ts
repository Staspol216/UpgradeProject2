import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'qwerty',
    first: 'test',
    city: 'zxc',
    currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', () => {
        const result = validateProfileData({ ...data, lastname: '', first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorect age', () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorect country', () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorect all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
