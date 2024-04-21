export enum ROUTER_PATHS {
    HOME = "/",
    SINGUP = "/signUp",
    LOGIN = "/login",
}

export interface IRoute {
    path: ROUTER_PATHS;
    element: JSX.Element;
  }