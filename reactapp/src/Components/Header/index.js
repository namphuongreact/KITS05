import "./index.scss";

export function Header (){
    return(
        <div style={{height:"100%"}}>
            <div className="header-container">
                
                <h1>BẮC NINH</h1>
                
                {/*Chim bay ------------------------------------------------- */}
                <div className="header-bird-container header-bird-container--one">
                    <div className="header-bird header-bird--one"></div>
                </div>
                
                <div className="header-bird-container header-bird-container--two">
                    <div className="header-bird header-bird--two"></div>
                </div>
                
                <div className="header-bird-container header-bird-container--three">
                    <div className="header-bird header-bird--three"></div>
                </div>
                
                <div className="header-bird-container header-bird-container--four">
                    <div className="header-bird header-bird--four"></div>
                </div>

                {/*Chim đứng im------------------------------------------------ */}

                <div className="header-bird header-bird--one"></div>
                <div className="header-bird header-bird--two"></div>
                <div className="header-bird header-bird--three"></div>
                <div className="header-bird header-bird--four"></div>
            </div>
        </div>
    )
}