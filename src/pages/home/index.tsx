import React from "react"
import { useQuery } from "@apollo/client"
import { TRACKS } from '../../queries/home'

const Home = () => {
  const { loading, error, data } = useQuery(TRACKS)
  
  return (<div>
    <h1>Home page</h1>
    {loading ?
      <p>Loading...</p> :
      <h1>Welcome, {data?.tracksForHome[0]?.author?.name}</h1>
    }
    {error &&
      <p>Something went wrong!!!</p>
    }
  </div> )
}

export default Home
