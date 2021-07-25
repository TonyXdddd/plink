import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ProductsTable } from "./ProductPurchase/TableSection/ProductsTable";
import { UserDataForm } from "./ProductPurchase/FormSection/UserDataForm";
import { SummaryInfo } from "./ProductPurchase/SummaryInfoSection/SummaryInfo";
import { CSSTransition } from "react-transition-group";
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/transition.css';
import styles from './ProductsPurchasePage.module.scss';

export const ProductsPurchasePage = () => {

  const { content } = useSelector(state => state.productsPurchase);

  //***
  //Just for preventing some warning in console of wrong way using React Transition Group without uniq
  //nodeRef on each transition component.

  // const transitionRef1 = useRef(null);
  // const transitionRef2 = useRef(null);
  // const transitionRef3 = useRef(null);

  // const errorPreventingRefs = [transitionRef1, transitionRef2, transitionRef3];

  //But with this nodeRefs transition component not work correctly. So i decide to not appoint this refs.
  //***

  //Instead of use WithTransition HOC. Cause of have some trouble with right animation work in HOC.
  const mapComponentsToTitles = {
    ['Products table']: <ProductsTable className={styles.withFadeIn} />,
    ['Form section']: <UserDataForm className={styles.withFadeIn} />,
    ['Summary info']: <SummaryInfo className={styles.withFadeIn} />,
  };

  return (
    <div className={styles.productsPurchasePage}>
      <ToastContainer />
      <h1 className={styles.title}>{ content }</h1>
      { Object.keys(mapComponentsToTitles).map((item, i) => {
        console.log(item);
        return (
          <CSSTransition
            // nodeRef={errorPreventingRefs[i]}
            key={item}
            in={content === item}
            timeout={500}
            classNames='section'
           unmountOnExit
          >
            { mapComponentsToTitles[item] }
          </CSSTransition>
        )
      })
      }
    </div>
  )
};
