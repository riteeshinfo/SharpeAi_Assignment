import React from 'react'

import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Transaction  from './Transaction';
import Data from './Data'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/transaction' element={<Transaction />} />
        <Route path="/data" element={<Data />} />
      </Routes>
      
    </div>
  );
}

export default App;
