import { createSelector } from 'reselect';

export const sellectTtn = state => state.ttn.items;
export const sellectIsLoading = state => state.ttn.isLoading;
export const sellectError = state => state.ttn.error;

export const sellectTtnFilter = state => state.ttnFilter;

export const sellectFiltredTtn = createSelector(
  [sellectTtn, sellectTtnFilter],
  (ttnList, filter) => {
    return ttnList.filter(ttn => ttn.Number.includes(filter));
  }
);

export const sellectIsTtnListEmpty = createSelector([sellectTtn], ttnList => {
  return ttnList.length === 0;
});

export const sellectIsFilteredTtnListEmpty = createSelector(
  [sellectFiltredTtn],
  sellectFiltredTtn => {
    return sellectFiltredTtn.length === 0;
  }
);
