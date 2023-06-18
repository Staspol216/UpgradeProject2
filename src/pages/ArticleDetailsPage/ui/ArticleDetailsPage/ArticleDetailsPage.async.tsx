import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // TODO remove
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
