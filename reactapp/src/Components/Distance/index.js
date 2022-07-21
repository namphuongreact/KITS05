import "./index.css"
import { useEffect} from "react"

export function Distance() {

    function imageClick() {
        //console.log("Hello", window.innerWidth);     //get the current viewport's width.
        let train = document.getElementById("train");
        var status = true; //true: start from left

        var timer = setInterval(function () {
            var left = new Number(train.style.left.replace("px", "")) //cast from String to Number (0px -> 0)

            if (left + 200 > window.innerWidth ) { //ĐK: đường đi của train <= width của browser (có nghĩa đi sang bên phải và đã đi hết màn hình, thì quay hình lại và change status thành false)              
                                                   //200: chiều dài của train . NOTE: road là tính khi đuôi xe chạm màn hình
                train.style.transform = "scaleX(-1)"
                status = false;
            }  

            if(left < 0) { //ĐK: đường đi của train < 0 (có nghĩa đi sang bên trái và đã đi hết màn hình, thì quay hình lại và change status thành true)
                status = true;    
                train.style.transform = "scaleX(1)" 
            }
            
            //--------------------------------------
            if(status){ //Khi status = true : train vẫn đang đi sang bên phải (from left)
                left += 10; 
            }else{      
                left -= 10;
            }
            
            train.style.left = left + "px"; // Cập nhật lại đường đi của train 
                                            // train.style.left: thuộc tính left của 'HTML element with id=train' (trong file index.css). Vì vậy khi callback chạy lại sau 20ms, left ko bị mất.          
        }, 20);//*/
    }

    return (
        <div>
            <div className="distance">
                <img id="train" src="https://js.cx/clipart/train.gif" onLoad={()=>imageClick()}></img>
            </div>

            <div className="distance-bn-hn">
                <div className="distance-item"><b>HÀ NỘI</b></div>
                <div className="distance-center">40 kilometers</div>
                <div className="distance-item"><b>BẮC NINH</b></div>
            </div>
        </div>
        
    )
}
