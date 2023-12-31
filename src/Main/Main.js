import React, {Component} from "react";
import "./Main.css"

import mp4VIDEO from "../IMG/dashing/dashing.mp4"
import imgLogoCenter from "../IMG/Маторики/JETOUR.png"
class Main extends Component{
    render() {
        return(
            <div className={"main-border"}>
                <div className={"main-img-logo-center"}>
                    <img src={imgLogoCenter} alt="img"/>
                    <center> <span>В КЫРГЫЗСТАНЕ</span></center>
                </div>
                <div className={"main-info-text-bottom"}>
                    <div className={"text-main"}>
                        <p>Элегантность</p>
                        <p>Инновация</p>
                        <p>Исключительность</p>
                    </div>
                    <div className={"Learn-more-button"} onClick={()=>{this.props.infoJetour()}}>
                        Подробнее 	&#8594;
                    </div>
                </div>
                <div className={"main-video-background"}>
                    <video autoPlay muted loop src={mp4VIDEO}/>
                </div>

            </div>
        )
    }


}
export default Main;