import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import SearchProvider from './store/components/SearchContext.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
   <StrictMode>
      <SearchProvider>
         <Provider store={store}>
           <App />

         </Provider>
      </SearchProvider>
  
     </StrictMode>,
   </BrowserRouter>
   
 
)
