import { createSelector } from 'reselect';

export const sortModeToggleReSelector = createSelector(
  [(state) => state.tableItems, (state) => state.sortType],
  (items, sortType) => {
    switch (sortType) {
      case 'byNameIncrease':
        return items.sort((a, b) => a.productName > b.productName ? 1 : -1);
      case 'byNameDecrease':
        return items.sort((a, b) => a.productName < b.productName ? 1 : -1);
      case 'bySkuIncrease':
        return items.sort((a, b) => a.sku > b.sku ? 1 : -1);
      case 'bySkuDecrease':
        return items.sort((a, b) => a.sku < b.sku ? 1 : -1);
      case 'byRamIncrease':
        return items.sort((a, b) => a.ram - b.ram);
      case 'byRamDecrease':
        return items.sort((a, b) => b.ram - a.ram);
      case 'byHddIncrease':
        return items.sort((a, b) => a.hdd - b.hdd);
      case 'byHddDecrease':
        return items.sort((a, b) => b.hdd - a.hdd);
      case 'byPriceIncrease':
        return items.sort((a, b) => a.price - b.price);
      case 'byPriceDecrease':
        return items.sort((a, b) =>  b.price - a.price);
      default: return;
    }
  }
);
