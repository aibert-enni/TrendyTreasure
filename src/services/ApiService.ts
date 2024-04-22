import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignInResponse, User } from "../models/apiModels";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (build) => ({
    createUser: build.mutation<User, User>({
      query: (user: User) => ({
        url: '/auth/signup',
        method: "POST",
        credentials: 'include',
        body: user
    })
    }),
    fetchUser: build.query<SignInResponse, User>({
      query: (user: User) => ({
        url: '/auth/signin',
        method: "POST",
        body: user
    }),
    transformResponse(data: SignInResponse, meta) : SignInResponse{
      const flag = meta?.response?.headers.get("flag")
      return {
        token: data.token,
        username: data.username,
        authorized: flag == 'true' ? true : false
      }
    }
    })
})
});
