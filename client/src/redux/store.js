import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  // Import your userReducer here

export const store = configureStore({
  reducer: {
    user: userReducer,  // Use the userReducer, not useReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});