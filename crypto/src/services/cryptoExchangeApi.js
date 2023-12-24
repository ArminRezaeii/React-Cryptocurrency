import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://api.coingecko.com/api/v3/exchanges?per_page=20'
const createRequest = (url) => ({ url })
const cryptoExchange = createApi({
    reducerPath: "cryptoExchange",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchange: builder.query({
            query: () => createRequest()

        })
    })
})
export const { useGetCryptoExchangeQuery } = cryptoExchange
export default cryptoExchange