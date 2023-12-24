import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'c10dc39c47mshac97a12c05a665fp1a5816jsn5a70ee79f0a8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (conut) => createRequest(`/coins?limit=${conut}`)

        })
    })
})

export const { useGetCryptosQuery } = cryptoApi;

export default cryptoApi;
