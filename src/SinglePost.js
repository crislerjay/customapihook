import React from 'react'
import UseFetch from './UseFetch'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

function SinglePost() {
  let { id } = useParams();
  let navigate = useNavigate();

  const { data, error, loading } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {loading && <h1>Loading...</h1>}
      {error && console.log(error)}
      <ul>
        {data && 
          <li key={data.id}>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </li>
        }
      </ul>
    </div>
  )
}

export default SinglePost