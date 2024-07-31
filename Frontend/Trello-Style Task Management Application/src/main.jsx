import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from '../context copy/UserContextProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
      <UserContextProvider>
      <App />
      </UserContextProvider>
)
