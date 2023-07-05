import "./modifig.css"
import {Component} from "react";
import imgcar from "../../../IMG/Маторики/Размер машины 2d.png"
import wheels from "../../../IMG/Маторики/шина.png"
import block1 from "../../../IMG/Маторики/block.png"
import block2 from "../../../IMG/Маторики/block 2.png"
import infoimg from "../../../IMG/Маторики/eeeeeeeee.jpg"

class Modification extends Component{
    state={
      car:null
    };
    componentDidMount() {

    }


    render() {
        const {database,activ}=this.props;
        return(
            <div className={"modification-background-block"} >
                <div className={"modification-block"}>
                    <img src={block1} className={"block-img1"} alt="img"/>
                    <img src={block2} className={"block-img2"} alt="img"/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         className="bi bi-x-lg icon-x" viewBox="0 0 16 16" onClick={()=>{this.props.exit()}}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    <br/>
                    <h1>{activ.name}</h1>
                    <br/>
                    <div className={"block-modification-content"}>
                        <div className={"modification-img-block"}>
                            <div className={"img-blog"}>
                                <img src={imgcar} alt="img"/>
                                <div className={"vysota"}>
                                    10005
                                </div>
                                <span className={"dlina"}>522</span>
                            </div>
                            <br/>
                            <div className={"text-modification-info"}>
                                <div>
                                    <center>
                                        <span>Обём</span>
                                        <h2>3.5л</h2>
                                    </center>
                                </div>
                                <div>
                                    <center>
                                        <span>Мощность</span>
                                        <h2>318 л.с.</h2>
                                    </center>
                                </div>
                                <div>
                                    <center>
                                        <span>Обёмзадний</span>
                                        <h2>2318 л.с.</h2>
                                    </center>
                                </div>
                                <div>
                                    <center>
                                        <span>Топливо</span>
                                        <h2>АИ-95</h2>
                                    </center>
                                </div>
                                <div>
                                    <center>
                                        <span>Привод</span>
                                        <h2>задний</h2>
                                    </center>
                                </div>
                                <div>
                                    <center>
                                        <span>Расход</span>
                                        <h2>9.7 л</h2>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"wheels-block"}>
                        <h1>225/45/R17</h1>
                        <div>
                            <img src={wheels} alt="img"/>
                        </div>

                    </div>

                    <div className={"info-activCar-modification-block"}>
                    <img src={infoimg}/>
                        <div className={"text-information-car"}>
                            <p> <h4>Общая информация</h4></p>
                            <div><span>Задний привод</span><h5>318 л.с.</h5></div>
                            <div><span>Класс автомобиля</span><h5>J</h5></div>
                            <div><span>Количество дверей</span><h5>5</h5></div>
                            <div><span>Количество мест</span><h5>7</h5></div>
                            <div><span>Максимальная скорость, км/ч</span><h5>230</h5></div>
                            <div><span>Разгон до 100 км/ч, с</span><h5>230</h5></div>
                            <div><span>Объем багажника мин/макс,л</span><h5>66</h5></div>
                            <div><span>Объём топливного бака, л</span><h5>230</h5></div>
                            <div><span>Полная масса, кг</span><h5>2170</h5></div>
                        </div>
                        <div  className={"text-information-car2"}>
                            <p><h4>Двигатель</h4></p>
                            <div><span>Тип двигателя</span><h5>бензиновый</h5></div>
                            <div><span>Расположение двигателя</span><h5>переднее</h5></div>
                            <div><span>Максимальная мощность, л.с./кВт при об/мин</span><h5>318/233 при 6400</h5></div>
                            <div><span>Максимальный крутящий момент, Н*м при об/мин</span><h5>378 при 4800</h5></div>
                            <div><span>Количество цилиндров</span><h5>6</h5></div>
                            <div><span>Объём топливного бака, л</span><h5>230</h5></div>
                            <div><span>Полная масса, кг</span><h5>2170</h5></div>

                        </div>
                    </div>
                    <div className={"bottom-activ-syte-modification"}>
                        {database.map((item,index)=>{
                            return(
                                <div key={index}><h2>{item.name}</h2></div>
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
export default Modification;