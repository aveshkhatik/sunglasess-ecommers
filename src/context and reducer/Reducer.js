export const initialState = {
  total: 0,
  product: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        product: action.payload,
      };
    case "remove":
      return {
        ...state,
        product: action.payload,
      };
    case "update price":
      return {
        ...state,
        total: action.payload,
      };
      default: throw Error("cant match case")
  }
};


export default storeReducer