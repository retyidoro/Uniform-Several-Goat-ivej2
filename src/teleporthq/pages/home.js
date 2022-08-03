import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Uniform Several Goat</title>
        <meta property="og:title" content="Uniform Several Goat" />
      </Helmet>
    </div>
  )
}

export default Home
