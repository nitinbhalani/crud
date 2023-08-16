import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './componet/create';
import Read from './componet/read'
import Edit from './componet/edit'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Create />}></Route>
        <Route path='/read' element={<Read />} ></Route>
        <Route path='/edit' element={<Edit />} >
        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
