import React, { useState } from 'react'
 
function Transaction() {
    const [user,setuser] =useState(
        {
            Adress:'',Amount:''
        } 
    );
    let name,value;
    const data=(e)=>{


    
        
        name=e.target.name; 
        value=e.target.value;
        setuser({...user,[name]:value});
    };    
    const submitdata= async(event) =>{
    event.preventDefault();
    const {Adress,Amount}=user;
    const res=
    fetch('https://sharpeaiassignment-default-rtdb.firebaseio.com/userRecord.json',
       {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        baody:JSON.stringify({
            Adress,
            Amount,
        })

       }
    );
    if(res){
        alert('data stored');
    }
    else{
        alert('store the data')
    }
    };
    
  return (
    <div className=' flex justify-center item-center mt-60'>
        <div className='box-border h-128 w-128 p-12 max-w-lg'>
            <h3 className='text-white font-bold mr-2'> Enter the details</h3>
            <form action="Post" className=' px-5 py-6 bg-#f4f4f4 flex flex-col' >
                <input type='text' name='Adress' placeholder='Enter Your Wallet Adress'value={user.Adress} onChange={data} autoComplete='off' className='mx-2.5 my-5 px-2.5 py-2.5 bg-none border-none outline-none border-b-1-white '></input>
                <input type='text' name='Amount'placeholder='Amount' value={user.Amount} onChange={data} autoComplete='off' ></input> 
                <button className='mt-5 bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-4' onClick={submitdata}>submit</button>
            </form>

        </div>
    
    </div>
  )
}

export default Transaction
