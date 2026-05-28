import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/Store.jsx'
import './index.css'

import AppRoutes from './routing/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <AppRoutes/>
  </Provider>

)
