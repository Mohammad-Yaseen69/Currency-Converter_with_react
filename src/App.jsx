import { useState } from 'react'
import useCurrency from './Hooks/useCurrency.js'
import InputBox from './Components/InputBox.jsx'

function App() {
  const [amountStateto, setAmountto] = useState(0)
  const [amountStatefor, setAmountfor] = useState(0)
  const [from, setfrom] = useState('USD')
  const [to, setTo] = useState('PKR')

  const data = useCurrency(from.toLowerCase())
  const convert = () => {
    const exchangeRate = data[to.toLowerCase()] * amountStatefor
    setAmountto(exchangeRate.toFixed(2))
  }


  const swap = () => {
    setfrom(to)
    setTo(from)
    setAmountfor(amountStateto)
    setAmountto(amountStatefor)
  }



  return (
    <div className='w-[60vw] bg-[#FFFFFF99]  border-white border-2 rounded-md h-[60vh] flex flex-col justify-center items-center'>
      <InputBox label='from'
        amount={amountStatefor}
        selectedCurr={from}
        onAmountChange={(e) => {
          const amount = parseFloat(e);
          setAmountfor(isNaN(amount) ? 0 : amount);
        }}
        onCurrencyChange={(currency) => {
          setfrom(currency)
          setAmountfor(0)
          setAmountto(0)
        }}
      />

      <button onClick={swap} className='bg-blue-600 px-3 py-1 rounded text-white'>SWAP</button>

      <InputBox label='to'
        inputDisabled
        amount={amountStateto}
        selectedCurr={to}
        onCurrencyChange={(currency) => {
          setTo(currency)
          setAmountfor(0)
          setAmountto(0)
        }} />

      <button onClick={convert} className='bg-blue-900 mt-7 text-white py-2 px-10 rounded'>Convert {from} to {to}</button>
    </div>
  )
}

export default App
