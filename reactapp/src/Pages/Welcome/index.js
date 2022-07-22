import { Distance } from '../../Components/Distance';
import { Header } from '../../Components/Header';
import { Menu } from '../../Components/Menu';
import "./index.css"

export function Welcome() {
  return (
    <div>
        
        <div style={{height:"30vh"}}><Distance /></div> 
        <div style={{height:"30vh"}}><Header /></div> 
 
    </div>
  );
}



