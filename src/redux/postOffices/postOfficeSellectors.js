import { createSelector } from 'reselect';

export const sellectCity = state => state.city.items;
export const sellectCityIsLoading = state => state.city.isLoading;
export const sellectCityError = state => state.city.error;

export const sellectPostOffice = state => state.postOffice.items;
export const sellectPostOfficeIsLoading = state => state.postOffice.isLoading;
export const sellectPostOfficeError = state => state.postOffice.error;

export const sellectTotalHits = state => state.postOffice.totalHits;

export const sellectPage = state => state.postOffice.currentQuery.page;
export const sellectHitsPerPage = state =>
  state.postOffice.currentQuery.hitsPerPage;
export const sellectCargoCapacity = state => state.postOffice.cargoCapacity;
export const sellectCityRef = state => state.postOffice.currentQuery.cityRef;

export const sellectSearchString = state =>
  state.postOffice.currentQuery.searchString;

export const sellectCurrentQuery = createSelector(
  [sellectPage, sellectCityRef, sellectSearchString, sellectHitsPerPage],
  (serverPage, cityId = '', searchString = '', hitsPerPage = 10) => {
    const cityRef = cityId === 'all' ? '' : cityId;

    return {
      CityRef: cityRef,
      Page: serverPage,
      Limit: hitsPerPage,
      Language: 'UA',
      FindByString: searchString,
    };
  }
);
