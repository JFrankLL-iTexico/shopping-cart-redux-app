const defaultState = {
  products: [],
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_FULFILLED':
      state = {
        ...state,
        products: action.payload,
      };
      break;
    default: break;
  }
  return state;
};

export default productsReducer;
