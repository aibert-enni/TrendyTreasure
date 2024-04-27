import { Route, Routes } from 'react-router-dom'
import { IRoute, ROUTER_PATHS } from '../router/types'
import Header from '../components/header/Header'
import Home from './Home'
import CreateProduct from './CreateProduct'
import Products from './Products'

export const routes: IRoute[] = [
  {
    path: ROUTER_PATHS.HOME,
    element: <Home />
  },
  {
    path: ROUTER_PATHS.CREATE_PRODUCT,
    element: <CreateProduct />
  },
  {
    path: ROUTER_PATHS.PRODUCTS,
    element: <Products />
  }
]

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
      </Routes>
    </>
  )
}

export default App
