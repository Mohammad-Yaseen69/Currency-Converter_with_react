import { useState } from 'react'
import useCurrency from './Hooks/useCurrency.js'
import InputBox from './Components/InputBox.jsx'

function App() {
  

  useCurrency('usd').then(data => console.log(data.irr))

  return (
    <>
      <h1 className=''>Hello World</h1>
    </>
  )
}

export default App
