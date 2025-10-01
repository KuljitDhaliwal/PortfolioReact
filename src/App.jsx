import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Layout from './layout/layout';
import Home from './pages/Home'
import Contact from './pages/Contact';
import { Work } from './pages/Work';

function App() {

  return (
    <>
      <Routes>
        <Route path='/PortfolioReact' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/PortfolioReact/about' element={<About/>} />
          <Route path='/PortfolioReact/contact' element={<Contact/>} />
          <Route path='/PortfolioReact/work' element={<Work/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;