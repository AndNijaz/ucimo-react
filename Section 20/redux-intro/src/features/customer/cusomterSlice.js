import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createAccount: {
      prepare(fullName, nationalID) {
        return { payload: { fullName, nationalID } };
      },

      reducer(state, action) {
        state.fullName = action.fullName;
        state.nationalID = action.nationalID;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createAccount, updateName } = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAT: action.payload.createdAT,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

export function createAccount(fullName, nationalID) {
  return {
    type: "customer/createAccount",
    payload: { fullName, nationalID, createdAT: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
*/
