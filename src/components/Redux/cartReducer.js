const initialState = {
    cart: [],
};


const cartReducer = (state = initialState, action) => {
    const updatedCart = state.cart.filter(item => item.id !== action.payload);
    switch (action.type) {
      case "UPDATE_DATA":
        return { ...state, cart: [...state.cart, action.payload] };
      case "REMOVE_DATA":
       
        return { ...state, cart: updatedCart };
      case "EMPTY_CART":
        return { ...state, cart: [] };
      default:
        return state;
    }
  };
  
  export default cartReducer;

