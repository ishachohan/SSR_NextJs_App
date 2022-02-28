import { configureStore } from "@reduxjs/toolkit";
import reducer from "./movies";
import api from "./Middleware/api";
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"

const middleware = [thunk]

const makeStore = () => configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => [...middleware, api]});

export const wrapper = createWrapper(makeStore)