import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'fsdfsfs' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' });
    });
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'fsdfsfs' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
    test('set pending status', () => {
        const state: DeepPartial<LoginSchema> = { isLoading: false };
        expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({ isLoading: true });
    });
});
