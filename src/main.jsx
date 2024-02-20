import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
//pages is here
import Home from './componet/Home.jsx'
import Sport from './componet/Sport'
import Catogory from './componet/Catogory.jsx'
import Health from './componet/Health.jsx'
import Enterainment from './componet/Entertainment'
import Technology from './componet/Technology'
import Science from './componet/Science'
import Business from './componet/Business'
import General from './componet/General.jsx'
import Search from './componet/Search.jsx'

const router = createBrowserRouter([
    {
        path:"",
        element:<Home/>,
        children:[
            {
                path:"",
                element:<Catogory/>
            },
            {
                path:"/health",
                element:<Health/>
            },
            {
                path:"/sport",
                element:<Sport/>
            },
            {
                path:"/entertainment" ,
                element:<Enterainment/>
            },
            {
                path:"/business" ,
                element:<Business/>
      
            },
            {
                path:"/science" ,
                element:<Science/>

            },
            {
                path:"/technology" ,
                element:<Technology/>
            },
            {
                path:"/general",
                element:<General/>
            },
            {
                path:"/:query",
                element:<Search/>
            }
    
        ]
        
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
    
)
