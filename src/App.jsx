import { useState } from 'react'
import useCurrency from './Hooks/useCurrency.js'
import InputBox from './Components/InputBox.jsx'

function App() {
  const [amountStateto, setAmountto] = useState(0)
  const [amountStatefor, setAmountfor] = useState(0)
  useCurrency('usd').then(data => console.log(data.irr))

  return (
    <div className='w-[60vw] bg-[#FFFFFF99]  border-white border-2 rounded-md h-[60vh] flex flex-col justify-center items-center'>
      <InputBox label='for' amount={amountStatefor} selectedCurr='usd' onAmountChage={(e) => setAmountfor(e)
      } />

      <button className='bg-blue-600 px-3 py-1 rounded text-white'>SWAP</button>

      <InputBox label='to' amount={amountStateto} selectedCurr='pkr' onAmountChage={(e) => setAmountto(e)} />

      <button className='bg-blue-900 mt-7 text-white py-2 px-10 rounded'>Convert</button>
    </div>
  )
}

export default App
