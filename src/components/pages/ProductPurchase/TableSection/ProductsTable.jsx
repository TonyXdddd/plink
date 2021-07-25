import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TableRow } from "./TableRow/TableRow";
import {
  sortByHddAC,
  sortByPriceAC,
  sortByProductAC,
  sortByRamAC,
  sortBySkuAC,
  setItemToBuyAC,
} from "../../../../redux/productPurchasePageReducer";
import { sortModeToggleReSelector } from "../../../../redux/selectors";
import { tableSortModeToggleTK } from "../../../../redux/thunks";
import classNames from "classnames";
import styles from './ProductsTable.module.scss'

export const ProductsTable = ({ className }) => {
  const tableItems = sortModeToggleReSelector(useSelector(state => state.productsPurchase));
  const { tableTitles, tableContentFadeIn, tableContentFadeOut } = useSelector(state => state.productsPurchase);
  const dispatch = useDispatch();

  //Hm, maybe not cool mapping
  const mapTitlesToActions = {
    [tableTitles[0]]: (sortType) => dispatch(tableSortModeToggleTK(sortByProductAC, sortType)),
    [tableTitles[1]]: (sortType) => dispatch(tableSortModeToggleTK(sortBySkuAC, sortType)),
    [tableTitles[2]]: (sortType) => dispatch(tableSortModeToggleTK(sortByRamAC, sortType)),
    [tableTitles[3]]: (sortType) => dispatch(tableSortModeToggleTK(sortByHddAC, sortType)),
    [tableTitles[4]]: (sortType) => dispatch(tableSortModeToggleTK(sortByPriceAC, sortType)),
  };

  return (
      <div
        className={classNames(
          styles.tableWrap,
          className,
        )}
      >
        <table className={styles.table}>
          <thead>
            <tr className={styles.titleTr}>
              { Object.keys(mapTitlesToActions).map((title) => {
                return (
                  <th className={styles.th} key={title}>
                    <div
                      className={styles.decreaseSortTab}
                      onClick={() => mapTitlesToActions[title]('Decrease')}
                    >
                  </div>
                    { title }
                    <div
                      className={styles.increaseSortTab}
                      onClick={() => mapTitlesToActions[title]('Increase')}
                    >
                    </div>
                  </th>
                )
              })  }
            </tr>
          </thead>
          <tbody className={classNames(
            styles.tableBody,
            {[styles.tableBoyFadeIn]: tableContentFadeIn},
            {[styles.tableBodyFadeOut]: tableContentFadeOut},
          )}
          >
          {tableItems.map(item => {
            return (
              <TableRow
                onClick={() => dispatch(setItemToBuyAC(item))}
                parentTrStyles={styles.tr}
                parentTdStyles={styles.td}
                productData={item}
                key={item.price}
              />
            )
          })}
          </tbody>
        </table>
      </div>
  )
};
