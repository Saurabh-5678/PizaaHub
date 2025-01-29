import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Pizza from '../components/Pizza'

import { getAllPizzas } from '../actions/pizzaActions'
import {  getAllPizzasReducer} from '../reducer/pizzaReducer'

export default function Homescreen() {

  const pizzasState = useSelector(state => state.getAllPizzasReducer)

  const {pizzas,error,loading} = pizzasState;

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch( getAllPizzas())
  
  },[])
  
  return (
    <div className='row justify-content-center'>


      {loading ? (<h1> Loading...</h1> ) : error ? (<h1>Something Went Wrong</h1>) : (
        pizzas.map((pizza) =>{
            return (<div className='col-md-3 m-3' key={pizza._id} >
                <div >
                    <Pizza pizza={pizza}/>
                </div>
            </div>
            );
        })
      )}



        
    </div>
  )
}
