import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/apiModels";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  endpoints: (build) => ({
    createUser: build.mutation<User, User>({
      query: (user: User) => ({
        url: '/auth/signup',
        method: "POST",
        credentials: 'include',
        body: user
    })
    }),
    fetchUser: build.query<User, User>({
      query: (user: User) => ({
        url: '/auth/signup',
        method: "POST",
        body: user
    }),
    transformResponse(data: User, meta) : User{
      const flag = meta?.response?.headers.get("flag")
      return {
        username: data.username,
        password: data.password,
        authorized: flag == 'true' ? true : false
      }
    }
    })
})
});
