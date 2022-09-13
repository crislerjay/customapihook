import React from 'react'
import UseFetch from './UseFetch'
import { Link } from "react-router-dom";

function AllPosts() {

  const { data, loading, error } = UseFetch('https://jsonplaceholder.typicode.com/posts/')
  
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && console.log(error)}
      <ul>
        {data && data.map(post => (
          <li key={post.id}>
            <Link to={`/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <p>{post.userId}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllPosts