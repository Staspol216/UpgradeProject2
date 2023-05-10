import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
    test('should return profile readonly', () => {
        const errors = [
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
