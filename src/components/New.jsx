import React from 'react'
import Button from './Button';

const New = () => {
    const logout = ()=>{
        localStorage.removeItem("formData");
      }
  return (
    <Button onClick={logout} className="bg-red-500 my-4" label="Logout"/>
  )
}

export default New