import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter } from "react-router-dom";
import ContextProvider from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>

<ContextProvider>
<ChakraProvider>
 
 <App/>
</ChakraProvider>
</ContextProvider>
</BrowserRouter>
)
