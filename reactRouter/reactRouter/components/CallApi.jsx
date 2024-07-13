import React from 'react'
import { useParams } from 'react-router-dom'

const CallApi = () => {

    const {id} =useParams()

  return (
    
    <div>CallApi: the id is, {id} </div>
  )
}

export default CallApi