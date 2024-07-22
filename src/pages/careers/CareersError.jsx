import React from 'react'
import { useRouteError } from 'react-router-dom/dist'
import { Link } from 'react-router-dom/dist'

const CareersError = () => {
    const error = useRouteError()
  return (
    <div>
      <h2>Error</h2>
      <p>{error.masage}</p>
      <Link to ="/">Back to home page</Link>
    </div>
  )
}

export default CareersError
