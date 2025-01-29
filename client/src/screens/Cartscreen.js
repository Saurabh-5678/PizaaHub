import React from 'react'
import { useSelector } from 'react-redux'

const Cartscreen = () => {
  const cartstate = useSelector(state=>state.cartReducer)
  const cartItems = cartstate.cartItems
  return (
    
    <div>
         
        
           <div className='row justify-content-center'>
             <div className='col-md-6'>
                <h2 style={{fontSize:'30px'}}>My Cart</h2>

                {cartItems.map(items=>{
                  return (
                  <div className='flex-container'>
                   <div className='text-left m-1 w-100'>
                      <h1>{items.name} [{items.variant}]</h1>
                      <h1>Price: {items.quantity} * {items.variant} = {items.price}</h1>
                      <h1 style={{display:'inline'}}>Quantity:</h1>
                      <i className="fas fa-plus"></i>
                        <b>{items.quantity}</b>
                        <i className="fas fa-minus"></i><hr/>
                   </div>
                   <div className='m-1 w-100 '>
                      <img src={items.image} alt='No Pics' style={{height:'80px' ,height:'80px'}}/>
                   </div>
                   <div className='m-1 w-100'>
                   <i className="fa-solid fa-trash mt-5" style={{color:'red'}} aria-hidden='true'></i>
                   </div>

                 </div>
                )
                })}
                 
                 
             </div>
             <div className='col-md-4'>

             </div>
             
           </div>
        
    </div>
  )
}

export default Cartscreen