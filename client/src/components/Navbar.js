import React from 'react';
import './Navbar.css'; // Import the CSS file
import logo from '../components/logo/logo4.avif'
import {useSelector,useDispatch} from 'react-redux';
const Navbar = () => {
  //define card state object of card reducer
  const cartState = useSelector(state=>state.cartReducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <img src={logo} style={{height:'70px' , width:'100px'}}></img>
        <a className="navbar-brand" href="#">Pizaa-Hub</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Login <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a> 
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
