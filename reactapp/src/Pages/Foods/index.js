import './index.css'
import { FoodHeader } from "./header";
import { Menu } from '../../Components/Menu';

export function Foods(){
    return(
        <div> 
            <div><FoodHeader/></div>
            

            <div className="foods-item">
                <div className="foods-item-image1"><img src="https://top10bacgiang.vn/wp-content/uploads/2021/07/banh-da-ke-o-bac-giang-3-min.jpg" width="1000px"/></div>
                <div className="foods-item-name1"><h1>Bánh đa kế</h1></div>
            </div>

            {/*--------------------------------------------------------------------- */}
            <div className="foods-item" >               
                <div className="foods-item-image1"><img src="https://cdn-daddp.nitrocdn.com/AqRHufPgyIbIWzetwtHaAplbmLwjtqGp/assets/static/optimized/rev-f33a662/-ffo6gjFE4k8/VtpRH4F67HI/AAAAAAAAA4c/43fbzICzHGw/s1600/nem-bui-ninh-xa-dac-san-bac-ninh-02.jpg" width="1000px"/></div>
                <div className="foods-item-name1"><h1>Nem bùi Ninh Xá</h1></div>
            </div>

            {/*--------------------------------------------------------------------- */}
            <div className="foods-item">
                <div className="foods-item-image1"><img src="https://i.ytimg.com/vi/vML1jNKOl4I/maxresdefault.jpg" width="1000px"/></div>
                <div className="foods-item-name1"><h1>Bánh phu thê</h1></div>
            </div>
            {/*--------------------------------------------------------------------- */}
            <div className="foods-item">
                <div className="foods-item-image1"><img src="https://www.ruoulangvoc.com/images/lang-van-4.jpg"/></div>
                <div className="foods-item-name1"><h1>Rượu Làng Vân</h1></div>
            </div>
        </div>
    )
}