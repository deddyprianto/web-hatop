import { stateawal } from "./const";

export const initialState = {
  app: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case stateawal.STATE_AWAL:
      return { ...state, app: action.payload };
    default:
      return state;
  }
};
