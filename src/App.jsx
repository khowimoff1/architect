import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import ScrollIndicator from './assets/components/ScrollIndicator'

const App = () => {
  return (
    <div>
      <ScrollIndicator />
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App