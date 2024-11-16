import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const newParam = useParams();
  return (
    <div>
      <h3>Welcome ! {newParam.id}</h3>
    </div>
  )
}

export default User
