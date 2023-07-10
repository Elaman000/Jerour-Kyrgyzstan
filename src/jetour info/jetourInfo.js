import "./jetourInfo.css"
import video from "../IMG/VIDEO/34831524.mp4"
import img from "../IMG/Маторики/Аснователь.png"
import React from "react";

function JetourInfo() {
    return(
        <>
            <div className={"block-JetourInfo"}>
                <video autoPlay muted loop src={video}/>
                <div className={"backgroundColor"}/>
                <div>
                    <p>
                        наша команда готовы ответить на все вопросы
                        <span>
                            Добро пожаловать в мир мир люксовых машин, где ваша удовлетворенность - наша главная цель!
                      </span>
                        &mdash; JETOUR &mdash;
                    </p>
                </div>
            </div>
        </>
    )
}
export default JetourInfo;