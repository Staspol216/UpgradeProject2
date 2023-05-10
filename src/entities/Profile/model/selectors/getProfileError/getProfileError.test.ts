import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error text',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error text');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});