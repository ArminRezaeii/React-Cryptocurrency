import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "../services/cryptoApi";
import cryptoNewsApi from "../services/cryptoNewsApi";
import cryptoExchange from "../services/cryptoExchangeApi";
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoExchange.reducerPath]: cryptoExchange.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, cryptoExchange.middleware),

})