import { Route, Routes } from 'react-router-dom'
import { IRoute, ROUTER_PATHS } from '../router/types'
import Header from '../components/header/Header'
import Home from './Home'

export const routes: IRoute[] = [
  {
    path: ROUTER_PATHS.HOME,
    element: <Home />
  }
]

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(route => <Route path={route.path} element={route.element} />)}
      </Routes>
    </>
  )
}

export default App
