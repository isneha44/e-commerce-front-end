import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not-found-container'>
      <div className='details-not-found'>
        <h1>Awww...Don't...Cry</h1>
        <p>It's just a 404 Error!</p>
        <Link to={"/"}>
          Go Back To Home
        </Link>
      </div>
      <div className='baby-cry'/>
     </div>
  )
}
export default PageNotFound