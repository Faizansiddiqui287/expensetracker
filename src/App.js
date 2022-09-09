import React from 'react';
import AddMoney from './components/AddMoney';
import Navbar from './components/Navbar';
// import TableData from './components/form'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AddMoney/>
      <div>
      {/* <TableData /> */}
      </div>
    </div>
  );
}

export default App;

