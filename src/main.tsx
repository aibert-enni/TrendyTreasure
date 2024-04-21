import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.ts'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ThemeProvider, colors, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0573f0'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
