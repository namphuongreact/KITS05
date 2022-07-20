import "./index.css"
import { useState } from 'react';

export function Distance() {
  //  const [status, setStatus] = useState(true); // LEFT: move from left

    function imageClick() {
        //console.log("Hello", window.innerWidth);     //get the current viewport's width.
        let train = document.getElementById("train");

        var status = true;

        var timer = setInterval(function () {


            var left = new Number(train.style.left.replace("px", "")) //cast from String to Number (0px -> 0)

            console.log(left);
            console.log(window.innerWidth );
            if (left > window.innerWidth ) {//ĐK: đường đi của train <= width của browser (có nghĩa chỉ đi hết màn hình là dừng)
                
                train.style.transform = "scaleX(-1)"
                status = false;

                console.log(status);
                //                177 là width của train image
            }  

            if(left < 0) {status = true;
                train.style.transform = "scaleX(1)"
            }
            
           
            
            if(status){
                left += 10;
            }else{
                left -= 10;
            }
            
            train.style.left = left + "px"; //Xuất phát từ bên trái --> phải
                                            //train.style.left: thuộc tính left của HTML element with id=train (trong file index.css)           
        }, 20);//*/
    }

    return (
        <div className="distance">
            <img id="train" src="https://js.cx/clipart/train.gif" onClick={() => imageClick()}></img>

        </div>
    )
}
