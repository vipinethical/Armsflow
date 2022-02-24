import { createStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

export const store = createStore(userReducer)
