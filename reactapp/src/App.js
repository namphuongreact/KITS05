import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from './Pages/Welcome';
import { Foods } from './Pages/Foods';
import { Festivals } from './Pages/Festivals';
import { Menu } from './Components/Menu';
import { FamousPlaces } from './Pages/FamousPlaces';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/foods" element={<Foods/>} />
          <Route path="/festivals" element={<Festivals/>} />
          <Route path="/famous_places" element={<FamousPlaces/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
