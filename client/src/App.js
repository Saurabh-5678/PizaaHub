
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import{BrowserRouter,Router,Route,Routes} from 'react-router-dom'

import './App.css';
import Homescreen from './screens/Homescreen';
import VantaBackground from './components/vantaBackGround';
import Responsive from './components/Responsive';
import Cartscreen from './screens/Cartscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
       <Routes>
       <Route path='/' exact Component={Homescreen}/>
       <Route path='/cart'  Component={Cartscreen}/>
       </Routes>
      </BrowserRouter>
      
      <VantaBackground/>
      <Responsive/>
    </div>
  );
}

export default App;
