//I'm not sure if this is correct, but I decided not to use separate routes/pages to display the table, form inputs,
// block of resulting information.
// Instead, it implements all components on the same route. The appearance of the required component occurs
// sequentially, with the removal of the previous one, taking into account the actions of the user.

//STACK - React FC/Hooks, Redux, React-Redux, Reselect, Formic, React-Toastify

export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_SKU = 'SORT_BY_SKU';
export const SORT_BY_RAM = 'SORT_BY_RAM';
export const SORT_BY_HDD = 'SORT_BY_HDD';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SET_ITEM_TO_BUY = 'SET_ITEM_TO_BUY';
export const TOGGLE_TABLE_CONTENT_ANIMATION = 'TOGGLE_TABLE_CONTENT_ANIMATION';
export const SET_VALID_USER_FORM_DATA = 'SET_VALID_USER_FORM_DATA';

const initialState = {
  tableTitles: ['Product', 'SKU', 'RAM', 'HDD', 'Price'],
  tableItems: [
    {
      productName: 'Lenovo IC-512',
      sku: 'ZC11501',
      ram: 4,
      hdd: 512,
      price: 550,
    },
    {
      productName: 'HP Megabook 14',
      sku: 'ZC12001',
      ram: 2,
      hdd: 240,
      price: 420,
    },
    {
      productName: 'Lenovo IC-520',
      sku: 'ZC22004',
      ram: 8,
      hdd: 1024,
      price: 600,
    },
    {
      productName: 'Asus ThinkPad 15-1554',
      sku: 'ZC15030',
      ram: 16,
      hdd: 1024,
      price: 700,
    },
    {
      productName: 'Asus ThinkPad 14-254',
      sku: 'ZX5467',
      ram: 8,
      hdd: 240,
      price: 520,
    },
    {
      productName: 'HP Elitebook 15',
      sku: 'ZXC5460',
      ram: 12,
      hdd: 512,
      price: 889,
    },
  ],
  sortType: 'byNameIncrease',
  content: 'Products table',
  tableContentFadeIn: true,
  tableContentFadeOut: false,
  selectedProduct: null,
  fieldsData: null,
};

export const productPurchasePageReducer  = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return {
        ...state,
        sortType: `byName${action.payload}`
      };

    case SORT_BY_SKU:
      return {
        ...state,
        sortType: `bySku${action.payload}`
      };

    case SORT_BY_RAM:
      return {
        ...state,
        sortType: `byRam${action.payload}`
      };

    case SORT_BY_HDD:
      return {
        ...state,
        sortType: `byHdd${action.payload}`
      };

    case SORT_BY_PRICE:
      return {
        ...state,
        sortType: `byPrice${action.payload}`
      };

    case SET_ITEM_TO_BUY:
      return {
        ...state,
        selectedProduct: action.payload,
        content: 'Form section',
      };

    case TOGGLE_TABLE_CONTENT_ANIMATION:
      return {
        ...state,
        tableContentFadeIn: !state.tableContentFadeIn,
        tableContentFadeOut: !state.tableContentFadeOut,
      };

    case SET_VALID_USER_FORM_DATA:
      return {
        ...state,
        fieldsData: action.payload,
        content: 'Summary info',
      };

    default: return state;
  }
};

//ACTIONS CREATORS
//in order to avoid creating a lot of actions (for sorting in ascending and descending order)，
// I pass the sorting entity in the type, and in the payload I indicate whether it is ascending or descending.

export const sortByProductAC = (payload) => ({
  type: SORT_BY_NAME,
  payload,
});

export const sortBySkuAC = (payload) => ({
  type: SORT_BY_SKU,
  payload,
});

export const sortByRamAC = (payload) => ({
  type: SORT_BY_RAM,
  payload,
});

export const sortByHddAC = (payload) => ({
  type: SORT_BY_HDD,
  payload,
});

export const sortByPriceAC = (payload) => ({
  type: SORT_BY_PRICE,
  payload,
});

export const setItemToBuyAC = (payload) => ({
  type: SET_ITEM_TO_BUY,
  payload,
});

export const toggleTableContentAnimationAC = () => ({
  type: TOGGLE_TABLE_CONTENT_ANIMATION,
});

export const setValidUserFormDataAC = (payload) => ({
  type: SET_VALID_USER_FORM_DATA,
  payload,
});


