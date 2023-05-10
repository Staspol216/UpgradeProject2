import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    ProfileSchema, ValidateProfileError, profileActions, profileReducer, updateProfileData,
} from 'entities/Profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'qwerty',
    first: 'test',
    city: 'zxc',
    currency: Currency.RUB,
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('cancel edit profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
            form: {},
            data,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
