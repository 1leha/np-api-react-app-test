import { useMemo } from 'react';
import { createSelector } from 'reselect';

export const sellectCity = state => state.city.items;
export const sellectCityIsLoading = state => state.city.isLoading;
export const sellectCityError = state => state.city.error;

// export const sellectTtnFilter = state => state.ttnFilter;

// export const sellectCurrentTtn = createSelector([sellectTtn], sellectTtn => {
//   return sellectTtn[0];
// });
