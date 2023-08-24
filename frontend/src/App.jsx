import React from 'react'
import AppRoutes from './components/routes/AppRoutes';
import AppNavbar from './components/extras/AppNavbar';
import Categories from './components/misc/Categories';

function App() {
  return (
    <>
      <AppNavbar />
      <Categories />
      <AppRoutes />
    </>
  )
}

export default App
