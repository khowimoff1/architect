import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App