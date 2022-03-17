export const initialState = {
  app: false,
};
// action state
export const stateawal = {
  STATE_AWAL: "STATE_AWAL",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case stateawal.STATE_AWAL:
      return { ...state, app: action.app };
    default:
      return state;
  }
};
