import React from 'react'
import Featured from '../Featured/Featured'
import home from './home.scss'
import Navbar from '../NavBar/Navbar'
import List from '../List/List'

const Home = () => {
    return (
        <div className="home">
           <Navbar />
          <Featured  type="movie"/>
          <List />
          <List />
          <List />
        </div>
    )
}

export default Home
