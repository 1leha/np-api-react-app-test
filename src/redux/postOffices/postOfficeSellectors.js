import { createSelector } from 'reselect';
import { PAGE_LIMIT } from 'utils/options';

export const sellectCity = state => state.city.items;
export const sellectCityIsLoading = state => state.city.isLoading;
export const sellectCityError = state => state.city.error;

export const sellectPostOffice = state => state.postOffice.items;
export const sellectPostOfficeIsLoading = state => state.postOffice.isLoading;
export const sellectPostOfficeError = state => state.postOffice.error;

export const sellectHitsPerPage = state => state.postOffice.hitsPerPage;
export const sellectTotalHits = state => state.postOffice.totalHits;

export const sellectPage = state => state.postOffice.currentQuery.page;
export const sellectCargoCapacity = state => state.postOffice.cargoCapacity;
export const sellectCityRef = state => state.postOffice.currentQuery.cityRef;

export const sellectSearchString = state =>
  state.postOffice.currentQuery.searchString;

export const sellectCurrentQuery = createSelector(
  [sellectPage, sellectCityRef, sellectSearchString],
  (serverPage, cityId = '', searchString = '') => {
    const cityRef = cityId === 'all' ? '' : cityId;

    return {
      CityRef: cityRef,
      Page: serverPage,
      Limit: PAGE_LIMIT,
      Language: 'UA',
      FindByString: searchString,
    };
  }
);

export const sellectSortedPostOffice = createSelector(
  [sellectPostOffice, sellectCargoCapacity],
  (postOffices, cargoCapacity) => {
    switch (cargoCapacity) {
      case 1:
        return postOffices.filter(
          ({ TotalMaxWeightAllowed }) => TotalMaxWeightAllowed <= 30
        );

      case 2:
        return postOffices.filter(
          ({ TotalMaxWeightAllowed }) =>
            TotalMaxWeightAllowed > 30 && TotalMaxWeightAllowed < 1000
        );

      case 3:
        return postOffices.filter(
          ({ TotalMaxWeightAllowed }) => TotalMaxWeightAllowed >= 1000
        );

      default:
        break;
    }
  }
);
