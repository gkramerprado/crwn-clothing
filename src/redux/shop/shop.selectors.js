import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const COLLECTION_BIND = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections,
);

export const selectColletion = collectionUrlParam => createSelector(
    [selectCollections],
    colletions => colletions.find(collection => collection.id === COLLECTION_BIND[collectionUrlParam]),
);