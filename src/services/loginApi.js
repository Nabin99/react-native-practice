import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoutes, BASE_URL} from '../config/config';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    login: builder.mutation({
      query: data => {
        console.log(data, BASE_URL, apiRoutes.login);
        return {
          url: apiRoutes.login,
          method: 'POST',
          body: {...data},
        };
      },
    }),
  }),
});

export const {useLoginMutation} = loginApi;
