import React, {Component} from "react";
import '../Models.css'
import imgInfoCar from "../../../IMG/Маторики/info car img.png"
import complictionCar from "../../../IMG/Маторики/complection car img.png"

class Characteristic extends Component{
    constructor(props) {
        super(props);
    }
    state= {

        };
    render() {
        const {infoDataBase}= this.props;
        let equipment = infoDataBase.equipment.map(item =>{
            return(<h4 key={item.text}>{item.text}</h4>)
        });
        return(
            <>
                <div className={"border-infoCar m-top-150"}>
                    <div> <h1 className={"text-models-body "}>ОБЗОР</h1></div>
                    <div style={ {display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}><p className={"info-characteristic-car"}>Выберите машину и информация по ниже будет изменятся</p></div>
                </div>
                <div className={"border-infoCar-text"}>
                    <div>
                        <h1>Двигитель/Трансмиссия</h1>
                        <h4>топлива________________________{infoDataBase.fuelType}</h4>
                        <h4>обём_____________________________{infoDataBase.volume+"л"}</h4>
                        <h4>максимальная скор._________{infoDataBase.maxSpeed+" км/ч"}</h4>
                        <h4>мощность двигателя________{infoDataBase.engineCapacity+".об.мин"}</h4>
                        <h4>тип привода___________________{infoDataBase.typeOfDrive}</h4>
                        <h4>Каробка передач______________{infoDataBase.transmission}</h4>
                        <h4>размер шин____________________{infoDataBase.tireSize}</h4>
                    </div>
                    <div>
                        <img className={"img"} src={imgInfoCar} alt="img"/>
                    </div>
                </div>
                <div className={"border-infoCar-text "}>
                    <div className={"img1-infoCar"}>
                        <img className={"img"} src={complictionCar} alt="img"/>
                    </div>
                    <div className={"textInfocar"}>
                            <h1>Основные особенности/Комплектатция</h1>
                        {equipment}
                    </div>
                    <div className={"img2-infoCar"}>
                        <img className={"img"} src={complictionCar} alt="img"/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <hr/>
            </>
        )
    }
}

export default Characteristic;
