
// Define the reducer function getAllPizzasReducer which takes state and action as arguments
export const getAllPizzasReducer=(state={pizzas:[]},action)=>{
       // Use a switch statement to handle different action types

   switch (action.type) {

      // Handle the GET_PIZZAS_REQUEST action
    case 'GET_PIZZAS_REQUEST':
          // Return the current state (unchanged) when a request is initiated
    return{
        loading : true,
        ...state
    }
     // Handle the GET_PIZZAS_SUCCESS action
    case 'GET_PIZZAS_SUCCESS': return{
        // Return a new state with the pizzas data from the action payload
        loading:false,
        pizzas : action.payload
    }
    // Handle the GET_PIZZAS_FAILED action
    case 'GET_PIZZAS_FAILED': 
    // Return a new state with the error from the action payload
    return{
        error :action.payload,
        loading  :false ,
    }
        
      
   // Default case when the action type doesn't match any cases
    default:
         // Return the current state unchanged
       return state
   }
}