import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Public from './protected/Public'
import Protected from './protected/Protected'
import AxiosInstance from '../config/AxiosConfig'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../state/authReducer'

const AppRoutes = () => {
  
   const dispatch = useDispatch((store)=>store.auth);

  useEffect(()=>{
  

    (async()=>{
        try{
           const res = await AxiosInstance.get("/api/user/me");
           console.log(res.data.user);
           dispatch(addUser(res?.data?.user));
        }catch(error){ 
              console.log("error from me api", error);

        }
    })()



  })


   let router = createBrowserRouter([
           
        {
            path:'/',
            element:<Public/>,
            children:[
                {
                    path:"",
                    element: <AuthLayout/>,        
                    children:[

                        {
                            path:"",
                            element:<Login/>
                        },
                        {
                            path:"register",
                            element:<Register/>
                        }
                    ]        
                 
                }
             
            ]
        },
        {
            path:"/home",
            element:<Protected/>,
            children:[
                 {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"",
                            element:<Home/>
                        }
                    ]
                 }
            ]
        }

   ])

  return <RouterProvider router={router} />
}

export default AppRoutes