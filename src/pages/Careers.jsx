import React from 'react';
import { useLoaderData,Link } from 'react-router-dom';

const Careers = () => {

    const careers = useLoaderData();

  return (
    <div className='careers'>
      {careers.map(career =>(
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Base in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Careers

 export const careerLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')
    return res.json();
}
