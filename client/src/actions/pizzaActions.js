// import axios from 'axios';

// // Define an async function getAllPizzas that returns a function which dispatches actions
// export const getAllPizzas = () => async dispatch =>{
//      // Dispatch an action to indicate the request has started
//     dispatch({type:'GET_PIZZAS_REQUEST'})

//     try {
//          // Make a GET request to the specified endpoint to fetch pizzas data
//          const response = await axios.get('http://localhost:9000/api/pizzas/getAllPizzas');


//         // Log the response to the console (for debugging purposes)
//         console.log(response)
//          // Dispatch an action to indicate the request was successful, 
//         // with the payload being the data received from the response
//         dispatch({type:'GET_PIZZAS_SUCCESS',payload : response.data})

//     } catch (error) {
//         // If there's an error, dispatch an action to indicate the request failed,
//         // with the payload being the error encountered
//         dispatch({type:'GET_PIZZAS_FAILED',payload :error})
//     }
// }

import axios from 'axios'

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' });

    try {
        const response = await axios.get('http://localhost:9001/api/pizzas/getAllPizzas');
        console.log('Response:', response.data);
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error fetching pizzas:', error.response ? error.response.data : error.message);
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error.response ? error.response.data : error.message });
    }
};
