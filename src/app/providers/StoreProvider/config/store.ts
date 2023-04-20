import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        preloadedState: initialState,
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDisptach = ReturnType<typeof createReduxStore>['dispatch']
