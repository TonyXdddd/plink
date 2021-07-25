import React from 'react';
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from './Summary.info.module.scss'

export const SummaryInfo = ({ className }) => {
  const { selectedProduct, fieldsData } = useSelector(state => state.productsPurchase);
  return (
    <div
      className={classNames(
        styles.summaryContainer,
        className,
    )}>
      <div className={styles.orderInfo}>your order n.15051 is completed.</div>

      <ul>
        Product information:
        <li>{ `Product: : ${selectedProduct.productName}` }</li>
        <li>{ `HDD: ${selectedProduct.hdd}` }</li>
        <li>{ `RAM: ${selectedProduct.ram}` }</li>
        <li>{ `SKU: ${selectedProduct.sku}` }</li>
        <li>{ `total price: ${selectedProduct.price}` }</li>
      </ul>
      <ul>
        Recipient information:
        <li>{ `FullName: ${fieldsData.fullName}` }</li>
        <li>{ `Email: ${fieldsData.email}` }</li>
        <li>{ `Country: ${fieldsData.country}` }</li>
        <li>{ `City: ${fieldsData.city}` }</li>
        <li>{ `Address: ${fieldsData.address}` }</li>
      </ul>
    </div>
  )
};
