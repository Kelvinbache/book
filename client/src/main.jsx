import { createRoot } from 'react-dom/client'

import './css/index.css'
import App from './App.jsx'

const mainRoot = createRoot(document.getElementById('root')); 
mainRoot.render(<App />)

