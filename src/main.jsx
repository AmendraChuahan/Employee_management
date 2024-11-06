import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth from './context/Auth.jsx'
import Task from './context/Task.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    

<Auth>

<Task>
<App/>
</Task>
</Auth>

    
    
  </StrictMode>,
)
