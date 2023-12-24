import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoHeaders = {
    'X-RapidAPI-Key': 'c10dc39c47mshac97a12c05a665fp1a5816jsn5a70ee79f0a8',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}
const baseUrl = 'https://crypto-news16.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoHeaders })
const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (conut) => createRequest(`/news${conut}`)

        })
    })
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi
export default cryptoNewsApi