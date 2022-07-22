import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Welcome } from './Pages/Welcome';
import { Festivals } from './Pages/Festivals';
import { Menu } from './Components/Menu';
import { FamousPlaces } from './Pages/FamousPlaces';
import { Foods} from './Pages/Foods';



function App() {
  return (
    <div>
      <HashRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/foods" element={<Foods/>} />
          <Route path="/festivals" element={<Festivals/>} />
          <Route path="/famous_places" element={<FamousPlaces/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
