import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='flex justify-center'>
        <div className='bg-red-100 sm:bg-green-200 md:bg-yellow-200' >hi</div>
        <div className='bg-pink-100 sm:bg-pink-200 md:bg-pink-300'>hi</div>
        <div className='bg-purple-100 sm:bg-purple-200 md:bg-purple-300'>hi</div>
        <div className='bg-gray-100 sm:bg-gray-200 md:bg-gray-300'>hi</div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='bg-red-100 sm:bg-green-200 md:bg-yellow-200 col-span-4' >hi</div>
        <div className='bg-pink-100 sm:bg-pink-200 md:bg-pink-300 col-span-4'>hi</div>
        <div className='bg-purple-100 sm:bg-purple-200 md:bg-purple-300 col-span-2'>hi</div>
        <div className='bg-gray-100 sm:bg-gray-200 md:bg-gray-300 col-span-2'>hi</div>
      </div>
      <br />
      <br />
      <div className='grid sm:grid-cols-2 gap-x-8 gap-y-5'>
        <div className='bg-red-100 sm:bg-green-200 md:bg-yellow-200 col-span-1' >hi</div>
        <div className='bg-pink-100 sm:bg-pink-200 md:bg-pink-300 col-span-1'>hi</div>
        <div className='bg-purple-100 sm:bg-purple-200 md:bg-purple-300 col-span-1'>hi</div>
        <div className='bg-gray-100 sm:bg-gray-200 md:bg-gray-300 col-span-1'>hi</div>
      </div>
    </div>
  ) 
}

export default App