import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDisptach } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDisptach,
    ThunkExtraArg,
    ThunkConfig,
};
