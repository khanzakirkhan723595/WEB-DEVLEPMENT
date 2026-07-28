import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  

  return (
    <>
      <h1 className='bg-amber-600 text-3xl p-5 rounded-md'>Tailwind heading with style</h1>
      <Card pateern="oolta pattern"/>
      <Card pateern="seedha pattern"/>
      <Card/>
    </>
  )
}

export default App
