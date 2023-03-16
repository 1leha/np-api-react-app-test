import { createSelector } from 'reselect';

export const sellectCity = state => state.city.items;
export const sellectIsLoading = state => state.city.isLoading;
export const sellectError = state => state.city.error;

// export const sellectTtnFilter = state => state.ttnFilter;
const arr = [
  { Description: 'aaaa' },
  { Description: 'bbb' },
  { Description: 'cc' },
  { Description: 'cc' },
];
export const sellectNormalisedCity = createSelector([sellectCity], cityList => {
  return arr.reduce((normalisedCityList, city) => {
    // console.log('city.Description :>> ', city.Description);
    const isCityInList = normalisedCityList.findIndex(el => {});
    // console.log('isCityInList :>> ', isCityInList);
    // console.log('normalisedCityList :>> ', normalisedCityList);
    // if (isCityInList) {
    //   return [...normalisedCityList];
    // }
    return [...normalisedCityList, city];
  }, []);
});

// export const sellectIsTtnListEmpty = createSelector([sellectTtn], ttnList => {
//   return ttnList.length === 0;
// });

// export const sellectIsFilteredTtnListEmpty = createSelector(
//   [sellectFiltredTtn],
//   sellectFiltredTtn => {
//     return sellectFiltredTtn.length === 0;
//   }
// );

// export const sellectCurrentTtn = createSelector([sellectTtn], sellectTtn => {
//   return sellectTtn[0];
// });
