import { toggleTableContentAnimationAC } from "./productPurchasePageReducer";

export const tableSortModeToggleTK = (sortModeToggleAction, sortType) => (dispatch) => {
  dispatch(toggleTableContentAnimationAC());
  setTimeout(() => dispatch(sortModeToggleAction(sortType)), 400);
  setTimeout(() => dispatch(toggleTableContentAnimationAC()), 410);
};

