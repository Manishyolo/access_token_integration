import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Public = () => {

  const {user,isLoading}= useSelector((store)=>store.auth);
  console.log(user)

   
  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(user){
    return <Navigate to={"/home"}/>
  }

  return (
      <Outlet/>
  )
}

export default Public