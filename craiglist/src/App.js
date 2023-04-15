import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Explore from './pages/explore/Explore';
import Product from './pages/product/Product';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Landing/>}></Route>
        </Routes>
        <Routes>
          <Route exact path='/explore' element={< Explore/>}></Route>
        </Routes>
        <Routes>
          <Route exact path='/product' element={< Product/>}></Route>
        </Routes>
     </div>
    </Router>
  );
}

export default App;
