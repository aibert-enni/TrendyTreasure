export enum ROUTER_PATHS {
    HOME = "/",
    SINGUP = "/signUp",
    LOGIN = "/login",
    CREATE_PRODUCT = "/createProduct",
    PRODUCTS = "/products"
}

export interface IRoute {
    path: ROUTER_PATHS;
    element: JSX.Element;
  }