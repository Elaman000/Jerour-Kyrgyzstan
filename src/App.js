import React, {Component} from "react";
import Head from "./Head/Head";
import Main from "./Main/Main";
import Assembly from "./Body/Assembly";
import Activcar from "./Body/Activ/activCar"


//Картинки машин
import dashingBlack from "./IMG/dashing/Black.png"
import dashingWhite from "./IMG/dashing/car5.png"
import dashingBlue from "./IMG/dashing/car2.png"
import dashingRed from "./IMG/dashing/car3.png"
import dashingGrey from "./IMG/dashing/car4.png"
import x70Blue from "./IMG/X70/car-blue.png"
import x70Brown from "./IMG/X70/car-brown.png"
import x70Red from "./IMG/X70/car-red.png"
import x70White from "./IMG/X70/car-white.png"
import x70pGrey from "./IMG/X70 plus/灰色grey.png"
import x70pWhite from "./IMG/X70 plus/白色white.png"
import x70pViolet from "./IMG/X70 plus/紫色violet.png"
import x70pRed from "./IMG/X70 plus/红色red.png"
import x70pBlue from "./IMG/X70 plus/蓝色blue.png"
import x70pBlack from "./IMG/X70 plus/黑色black.png"
import x90Black from "./IMG/X90/X90_black.png"
import x90White from "./IMG/X90/X90_white.png"
import x90WBlue from "./IMG/X90/X90_blur.png"
import x90pBlack from "./IMG/X90 plus/black.png"
import x90pBlue from "./IMG/X90 plus/blue.png"
import x90pGrey from "./IMG/X90 plus/grey.png"
import x90pViolet from "./IMG/X90 plus/violet.png"
import x90pWhite from "./IMG/X90 plus/white.png"
import x95Black from "./IMG/X95/Black.png"
import x95Grey from "./IMG/X95/X95Grey.png"
import x95Blue from "./IMG/X95/X95Blue.png"
import x95Violet from "./IMG/X95/X95Violet.png"
import x95White from "./IMG/X95/X95White.png"
import dshing from "./IMG/Main img car/Group 12 1.png"
import x70 from "./IMG/Main img car/x70 1.png"
import x70Plus from "./IMG/Main img car/banner-removebg-preview 1.png"
import x90 from "./IMG/Main img car/Mask group 1.png"
import x90Plus from "./IMG/Main img car/x70s 1.png"
import x95 from "./IMG/Main img car/x95 1.png"
import Guarantee from "./Body/Guarantee/guarantee";
import dashingCard from './IMG/Маторики/dasing card.png'
import x70Card from './IMG/Маторики/x70 card.png'
import x70plusCard from './IMG/Маторики/x70plus card.png'
import x90Card from './IMG/Маторики/x90 card.png'
import x90plusCard from './IMG/Маторики/x90plus card.png'
import x95Card from './IMG/Маторики/x95 card.png'
import kredit from "./IMG/Events/Кридит.png"
import tridIn from "./IMG/Events/Трейд ин.png"
import remont from "./IMG/Events/Ремонт.png"
import FormApplications from "./Head/Form/form";

import dashingPraisList from "./IMG/dashing/prais list.pdf"
import x70plusPraisList from "./IMG/X70 plus/prais list.pdf"
import x90plusPraisList from "./IMG/X90 plus/prais list.pdf"
import Contact from "./Contacts/contact";


const Database = [  {mainImg: dshing,InStock:true, car: {prisList: dashingPraisList, price:35500,cardImg:dashingCard,name:"Dashing",skitka:5,volume:1.5, year:2023,power:165,engineCapacity:1.498,doors:"5 дверный SUV",maxSpeed:185, typeOfDrive:"Передний привод",transmission:"Автомат 8ст-Гидромеханическая",state:"Новый",fuelType:"Бензин",Torque:210,frontSuspension:"Макферсон",rearSuspension:"Независимая многорычажная",curbWeight:1545,tireSize:"215/60 R17",engine:"E4T15B", groundClearance:210,
                            img : {black: dashingBlack, white: dashingWhite, blue: dashingBlue, red: dashingRed, grey : dashingGrey},
                            config: {dlina:4590,shirina:1900,vysota:1685,},
                            equipment: [{text:"Панарамная камера 360°"},
                            {text: "Камера заднего вида"},
                            {text: "Круиз-контроль"},
                            {text: "Электронный кондиционер"},
                            {text: "Панарамная крыша"},
                            {text: "Передный и задний парктроники",text2:"Управление аудиосистемой на руле"},
                            {text: "Голосовой помошник🤖"}]}},
                    {mainImg: x70,InStock:true,car:    {prisList: x70plusPraisList, price:26500,cardImg:x70Card,name:"X70",skitka:5,volume:1.5,year:2023, power:147,engineCapacity:1.498,doors:"5 дверный SUV",maxSpeed:185, typeOfDrive:"Передний привод",transmission:"Автомат 8ст-Гидромеханическая",state:"Новый",fuelType:"Бензин","Torque":210,frontSuspension:"Макферсон",rearSuspension:"Независимая многорычажная",curbWeight:1545,tireSize:"215/60 R17",engine:"E4T15B", groundClearance:210,
                            img :{blue: x70Blue, brown: x70Brown, red: x70Red, white: x70White},
                            equipment: [{text:"Панарамная камера 360°"},
                                {text: "Камера заднего вида"},
                                {text: "Встроенный видео регистратор"},
                                {text: "Круиз-контроль"},
                                {text: "Электронный кондиционер"},
                                {text: "Система мониторинга 'слепых' зон "},
                                {text: "Панарамная крыша"},
                                {text: "Датчик давления в шинах"},
                                {text: "Передный и задний парктроники"}]}},
                    {mainImg: x70Plus,InStock:true,car:{ prisList:x70plusPraisList ,price:29500,cardImg:x70plusCard,name:"X70 Plus",skitka:5,volume:"1.5/1.6", year:2023,power:186,engineCapacity:1.498,doors:"5 дверный SUV",maxSpeed:185, typeOfDrive:"Передний привод",transmission:"Автомат 8ст-Гидромеханическая",state:"Новый",fuelType:"Бензин",Torque:210,frontSuspension:"Макферсон",rearSuspension:"Независимая многорычажная",curbWeight:1545,tireSize:"215/60 R17",engine:"E4T15B",groundClearance:210,
                            img: {grey: x70pGrey, white:x70pWhite, purple: x70pViolet, red: x70pRed, blue: x70pBlue, black: x70pBlack},
                            equipment: [{text:"Панарамная камера 360°"},
                                {text: "Камера заднего вида"},
                                {text: "Круиз-контроль"},
                                {text: "Электронный кондиционер"},
                                {text: "Панарамная крыша"},
                                {text: "Передный и задний парктроники"}]}},
                    {mainImg: x90,InStock:false,car:    { prisList: x90plusPraisList, price:28000,cardImg:x90Card,name:"X90",skitka:5,volume:1.6, year:2023,     power:165,engineCapacity:1.498,doors:"5 дверный SUV",maxSpeed:185, typeOfDrive:"Передний привод",transmission:"Автомат 8ст-Гидромеханическая",state:"Новый",fuelType:"Бензин",Torque:210,frontSuspension:"Макферсон",rearSuspension:"Независимая многорычажная",curbWeight:1545,"tireSize":"215/60 R17",engine:"E4T15B",groundClearance:210,
                            img: {black:x90Black, white:x90White, blue:x90WBlue},
                            equipment: [{text:"Панарамная камера 360°"},
                                {text: "Камера заднего вида"},
                                {text: "Круиз-контроль"},
                                {text: "Электронный кондиционер"},
                                {text: "Панарамная крыша"},
                                {text: "Передный и задний парктроники"}]}},
                    {mainImg: x90Plus,InStock:true,car:{ prisList:x90plusPraisList ,price:35500 ,cardImg:x90plusCard,name:"x90 Plus",skitka:5,volume:1.6, year:2023,power:197,engineCapacity:1.498,doors:"5 дверный SUV",maxSpeed:185, typeOfDrive:"Передний привод",transmission:"Автомат 8ст-Гидромеханическая",state:"Новый",fuelType:"Бензин",Torque:210,frontSuspension:"Макферсон",rearSuspension:"Независимая многорычажная",curbWeight:1545,tireSize:"215/60 R17",engine:"E4T15B",groundClearance:210,
                            img:{black:x90pBlack, blue:x90pBlue, grey:x90pGrey, purple: x90pViolet, white:x90pWhite},
                            equipment: [{text:"Панарамная камера 360°"},
                                {text: "Камера заднего вида"},
                                {text: "Круиз-контроль"},
                                {text: "Электронный кондиционер"},
                                {text: "Панарамная крыша"},
                                {text: "Передный и задний парктроники"}]}},
                    {mainImg: x95,InStock:false,car:    {prisList:x90plusPraisList ,price:36000,cardImg:x95Card,name:"x95",skitka:8,volume:2.0,year:2023,      power:165,engineCapacity:1.498,doors:"5 дверный SUV",maxSpeed:185, typeOfDrive:"Передний привод",transmission:"Автомат 8ст-Гидромеханическая",state:"Новый",fuelType:"Бензин",Torque:210,frontSuspension:"Макферсон",rearSuspension:"Независимая многорычажная",curbWeight:1545,tireSize:"215/60 R17",engine:"E4T15B",groundClearance:210,
                            img:{black:x95Black, blue:x95Blue, grey: x95Grey, purple: x95Violet, white:x95White},
                            equipment: [{text:"Панарамная камера 360°"},
                                {text: "Камера заднего вида"},
                                {text: "Круиз-контроль"},
                                {text: "Электронный кондиционер"},
                                {text: "Панарамная крыша"},
                                {text: "Передный и задний парктроники"}]}}
                    ];
const Events = [
    {
        img: kredit,
        title: "Получите Jetour X70 в кредит с" +
            "выгодными условиями от" +
            "официального дилера Jetour",
        info: "Jetour предоставляет своим клиентам уникальную" +
            "возможность приобрести автомобиль Jetour X70 в" +
            "кредит у официального дилера компании." +
            "Кредитные программы Jetour разработаны таким" +
            "образом, чтобы предоставить максимальный" +
            "комфорт и удобство при покупке автомобиля в" +
            "кредит.   Специалисты кредитного...",
        data:'25.03.2020',
        url:''
    },
    {
        img: tridIn,
        title: "Обменяйте свой старый" +
            "автомобиль на новый в Jetour с" +
            "программой Trade-in",
        info: "Jetour, ведущий автодилер, рад предложить своим" +
            "клиентам программу Trade-in, которая" +
            "предоставляет возможность обменять старый" +
            "автомобиль на новый. Эта программа" +
            "предоставляет полный комплекс услуг, связанных с" +
            "оценкой, выкупом и продажей автомобилей с" +
            "пробегом всех марок и брендов....",
        data:'15.03.2020',
        url:''
    },
    {
        img: remont,
        title: "Jetour предоставляет гарантию" +
            "качества",
        info: "Jetour предоставляет гарантию качества на новые" +
            "легковые автомобили, приобретенные у" +
            "официальных дилеров.   Владельцы автомобилей" +
            "могут рассчитывать на полное покрытие рисков," +
            "связанных с возможными дефектами и" +
            "неисправностями, на протяжении 2 лет или 100 000" +
            "километров пробега....",
        data:'09.03.2023',
        url:''
    }
];


class App extends Component{
    state = {
        activ:'main',
        activDatabase:null,
        form: "",
    };

    render() {
        const form = this.state.form ===  "applications"? <FormApplications form={(text)=>{this.setState({form:text})} } />:null;
        return (
            <>
                {form}
                <Head  activ={this.state.activ} onclickMain={(text)=>{this.setState({activ:text})}}  databaseCars={Database} onclockCars={(item, text)=>{this.setState({activDatabase:item,activ:text})}} form={(text)=>{this.setState({form:text})}}  ObzorCar={()=>{this.setState({activ:"activCar", activDatabase: Database[0].car })}} onActiv={(activ)=>{this.setState({activ})}}/>
                {this.state.activ !== "main"?null: <>
                            <Main/>
                            <Assembly database={Database} activCar={(w,activDatabase,activ)=> {this.setState({activDatabase ,activ})}}/>
                            <Guarantee EventsDatabase={Events}/>
                         </>}
                {this.state.activ !== "activCar"?null: <div>
                        <Activcar allCars={Database} database={this.state.activDatabase}/>
                    </div>}
                {this.state.activ !== "contact"?null:
                    <Contact/>}
            </>
        );
    }
    }
export default App;
