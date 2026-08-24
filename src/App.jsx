import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Layout from './layout/layout';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Work from './pages/Work';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//Query Client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/work' element={<Work />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App;