import './index.css'
import { useNavigate} from "react-router-dom";

export function Item({image, name}){
    const navigate = useNavigate();
    
    const viewDetail = ()=>{
        if(name === "Foods"){
            navigate(`/foods`);
        }
        else if(name=="Festivals"){
            navigate(`/festivals`);
        }
        else {
            navigate(`/famous_places`);
        }
    }

    return(
        <div className="welcome-menu-item-container">
            <div><img src={image} width="115px" height="115px" onClick={viewDetail}/></div>
            <div onClick={viewDetail}>{name}</div>
        </div>
    )
}