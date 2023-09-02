import { useState } from 'react'
import FormPage from '../src/pages/Form page/Index';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home page/components/Index/Index';


function App() {

  return (
    <>
    <Routes>
      <Route path='/registration' Component={FormPage} />
      <Route path='/' exact Component={HomePage} />
    </Routes>
    </>
  )
}

export default App
