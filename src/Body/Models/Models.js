import React, {Component} from "react";
import "./Models.css"

import logo from "../../IMG/Маторики/Logo.png"
import noCar from "../../IMG/Маторики/No car.png"
import Characteristic from "./Characteristic/characteristicCar";

class Models extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        cardCar: false,
        textcenterCard: "Dasheng",
        activDatabase: this.props.database[0].car,
        colorCars: "white",
    };
    componentDidMount() {
        const {database} = this.props;
        const {textcenterCard, activDatabase}=this.state;
        database.map(item => {
            if (item.car.name === textcenterCard){
                this.setState({activDatabase:item.car})
            }
        })
    }
    carActiv=(text)=>{
        const {database} = this.props;
        let databaseCar = [];
        database.map(item =>{
           if (item.car.name === text){
                databaseCar.push(item.car)
           }
        });
        this.setState({textcenterCard:text,
            activDatabase: databaseCar[0],});
    };
    render(){
        const {database} = this.props;
        const {textcenterCard,activDatabase,colorCars}=this.state;
        const img = this.state.activDatabase.img;
        let colorImgCar = colorCars === "white" ? img.white : colorCars === "red" ? img.red : colorCars === "blue" ? img.blue : colorCars === "grey" ? img.grey : colorCars === "purple" ? img.purple : colorCars === "black" ? img.black : null;
        return(
            <>
                <h1  className={"text-models-body"}>МОДЕЛИ</h1>
                <div  className={"body-models-border"}>
                    <div className={"name-car-blok"} id={"main_models"}>
                        <div className={"model-img-logo"}>
                            <span className={"name-car"}>
                                <img alt={"logo"} src={logo}/>
                                {textcenterCard}</span>
                        </div>
                        <div className={"models-text-backraund"}>
                            <p>Уверенность</p>
                            <p>в каждом</p>
                            <p>пути</p>
                        </div>
                    </div>

                        <a href={"#heder_syte1"}>
                            <img className={"main-models-img-car"} src={colorImgCar === undefined ? noCar : colorImgCar } alt={"car"} onClick={() => this.props.activCar(textcenterCard,activDatabase)} />
                        </a>
                    <div className={"slider-bok"}>
                        {database.map(item => {
                            return(
                                <CardSlaiders {...item} key={item.car.name} onActive={textcenterCard} carActiv={this.carActiv}/>
                            )
                        })}
                    </div>
                    <div className={"border-colorCar"}>
                        {activDatabase.img.white ? <div style={{backgroundImage: "linear-gradient(#FFFFFF, #949494)"}} onClick={() => {
    this.setState({colorCars: "white"})
}}/>: null        }
                        {activDatabase.img.red ? <div style={{backgroundImage: "linear-gradient(#FE6363, #600000)"}} onClick={() => {
    this.setState({colorCars: "red"})
}}/>: null        }
                        {activDatabase.img.blue ? <div style={{backgroundImage: "linear-gradient(#698AFF, #1A276E)"}} onClick={() => {
    this.setState({colorCars: "blue"})
}}/>: null        }
                        {activDatabase.img.grey ? <div style={{backgroundImage: "linear-gradient(#CFCFCF, #3F3F3F)"}} onClick={() => {
    this.setState({colorCars: "grey"})
}}/>: null        }
                        {activDatabase.img.purple  ? <div style={{backgroundImage: "linear-gradient(#7B6184, #3D1B49)"}} onClick={() => {
    this.setState({colorCars: "purple"})
}}/>: null        }
                        {activDatabase.img.black ? <div style={{backgroundImage: "linear-gradient(#555555, #000000)"}} onClick={() => {
    this.setState({colorCars: "black"})
}}/>: null        }
                        {colorImgCar === undefined?
                            <span className={"warning"}>
                                Выберите другой цвет!
                            </span>: null}
                    </div>
                </div>
                <Characteristic infoDataBase={activDatabase}/>
            </>
        )
    }
}

class CardSlaiders extends Component{
    state = {
        cardslaider: true,
    };
    activ = (key) =>{
        this.props.carActiv(key);
        if (this.props.onActive !== key){
            this.setState({cardslaider: false});

        }
    };
    componentDidUpdate(prevProps) {
        const {car} = this.props;
        this.state.cardslaider = car.name !== this.props.Active;
    }

    render() {
        const {mainImg,car} = this.props;
        const {cardslaider}= this.state;
        return(<div
                key={car.name}
                id={"carModel"}
                className={"models-slider-img-border"}>
                <img src={mainImg}
                 className={cardslaider?"":" bottom-border-animation"}
                 onClick={()=>this.activ(car.name)}
                     id="image"
                 alt={car.name}/>
        </div>
        )
    }
}

export default Models;