import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductsPaginationResponse, SignInResponse, User } from "../models/apiModels";
import { getCookie } from "../utils/getCookie";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api',
  prepareHeaders: (headers) => {
    headers.set('token', getCookie('token'))
    headers.set("Content-Type", 'application/json')
  }
})

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  endpoints: (build) => ({
    createUser: build.mutation<User, User>({
      query: (user: User) => ({
        url: '/auth/signup',
        method: "POST",
        body: user
    })
    }),
    fetchUser: build.query<SignInResponse, User>({
      query: (user: User) => ({
        url: '/auth/signin',
        body: user
      }),
      transformResponse(data: SignInResponse, meta) : SignInResponse{
        const flag = meta?.response?.headers.get("flag")
        return {
          token: data.token,
          username: data.username,
          authorized: flag == 'true' ? true : false
        }
      },
    }),
    createProduct: build.mutation<Product, Product>({
      query: (product: Product) => ({
        url: '/createProduct',
        method: 'POST',
        body: product
      })
    }),
    fetchProductsPagination: build.query<ProductsPaginationResponse, {page: number, size: number}>({
      query: ({page, size}) => ({
        url: '/findByPage',
        params: {
          page,
          size
        }
      }),
      transformResponse(data: Product[], meta) : ProductsPaginationResponse {
        const pageSize = meta?.response?.headers.get('pageSize')
        return {
          products: data,
          pageSize: pageSize ? Number(pageSize) : 1
        }
      }
    })
})
});
