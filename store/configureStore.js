import { configureStore } from "@reduxjs/toolkit";
import reducer from "./movies";
import api from "./Middleware/api";

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api]
    });
}