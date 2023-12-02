import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='text-white  justify-between items-center h-24 max-w-[1240px] mx-auto px-4 relative'>
        <div className='flex'>
      <h1 className='w-full text-3xl font-bold text-orange-400 ' >Crypto</h1>
      <ul className='flex '>
        <Link to='/' className='p-4 '>
            Home
        </Link>
        <Link to='/transaction' className='p-4 '>
            Transaction
        </Link>
        <Link to ='./data'className='p-4 '>
            Data
        </Link>
      </ul>
      </div>
     <div className='text-white mt-48 max-w-md justify-between item-center'>
        <h1 className='text-6xl leading-normal'>
           Welcome to Crypto tracker
        </h1>
        <p>Do you need assistance with cryptocurrency investigations or monitoring tools? Are you looking for cryptocurrency training at your fingertips?</p>
        </div> 
     <div>
        
     </div>
      
      
      
      
    </div>
    
  )
} 

export default Home
