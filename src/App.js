
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Choose from './pages/Choose';
import { useState } from 'react';

function App() {
  const [selectedItem, setSelectedItem] = useState()
  return (
   <BrowserRouter>
   <Routes>
    <Route path = "/" element= {< Choose setSelectedItem={setSelectedItem} selectedItem={selectedItem}/>}/>
   </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
