//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App.tsx'
import { Provider } from 'react-redux'
import AppStore from './redux/appstore.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
)
