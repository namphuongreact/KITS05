import './index.css'
import { Item } from './item'
export function Menu(){
    return(
        <div className='welcome-menu-container'>
            <div>
                <Item
                      image = "https://media.truyenhinhdulich.vn/upload/news/450_nhung_mon_ngon_nuc_tieng_o_bac_ninh.jpg"
                      name = "Foods"
                />
            </div>
            
            <div>
                <Item
                      image = "https://media.baoquangninh.com.vn/dataimages/201702/original/images909980_g.JPG"
                      name = "Festivals"
                />
            </div>
            
            <div>
                <Item
                      image = "https://upload.wikimedia.org/wikipedia/commons/c/c4/Newone_-_tam_quan_%C4%91%E1%BB%81n_b%C3%A0_ch%C3%BAa_kho_B%E1%BA%AFc_Ninh.jpg"
                      name = "Famous Places"
                />
            </div>
        </div>   
    )
}