import {Component} from "react";
import "./activCar.css";
import Form from "./Form/form";
import logo from "../../IMG/Маторики/Logo.png"
import noCar from "../../IMG/Маторики/No car.png"
import imgConfig from "../../IMG/Маторики/Конфигуратция.png"
import logotip from "../../IMG/Маторики/vehica-logo-dark-retina-2.png"
import pdfImg from "../../IMG/Маторики/pdf img.png"


import x90plusExternalDesign from '../../IMG/X90 plus/External Design.png'
import x70ExternalDesign from '../../IMG/X70/External Design.png'
import x90ExternalDesign from '../../IMG/X90/External Design.png'
import x70plusExternalDesign from '../../IMG/X70 plus/External Design.png'
import DashengExternalDesign from '../../IMG/dashing/External Design.png'

import DashingSalon from "../../IMG/dashing/Salon.png"
import X90plusSalon from "../../IMG/X90 plus/Salon.png"
import X90Salon from "../../IMG/X90/Salon.png"
import X70Salon from "../../IMG/X70/Salon.png"
import X70plusSalon from "../../IMG/X70 plus/Salon.png"

import x90plusSafety from "../../IMG/X90 plus/Safety.png"

import dashingimg1 from "../../IMG/dashing/image 1.png"
import dashingimg2 from "../../IMG/dashing/image 2.png"
import dashingimg3 from "../../IMG/dashing/image 3.png"
import dashingimg4 from "../../IMG/dashing/image 4.png"
import dashingimg5 from "../../IMG/dashing/image 5.png"
import dashingimg6 from "../../IMG/dashing/image 6.png"
import dashingimg7 from "../../IMG/dashing/image 7.png"
import dashingimg8 from "../../IMG/dashing/image 8.png"

import x70img1 from "../../IMG/X70/img 1.png"
import x70img2 from "../../IMG/X70/img 2.png"
import x70img3 from "../../IMG/X70/img 3.png"
import x70img4 from "../../IMG/X70/img 4.png"
import x70img5 from "../../IMG/X70/img 5.png"

import x70plusimg1 from "../../IMG/X70 plus/img 1.png"
import x70plusimg2 from "../../IMG/X70 plus/img 2.png"
import x70plusimg3 from "../../IMG/X70 plus/img 3.png"
import x70plusimg4 from "../../IMG/X70 plus/img 4.png"
import x70plusimg5 from "../../IMG/X70 plus/img 5.png"
import x70plusimg6 from "../../IMG/X70 plus/img 6.png"

import x90img1 from "../../IMG/X90/image 1.png"
import x90img2 from "../../IMG/X90/image 2.png"
import x90img3 from "../../IMG/X90/image 3.png"
import x90img4 from "../../IMG/X90/image 4.png"
import x90img5 from "../../IMG/X90/image 5.png"

import x90plus1 from "../../IMG/X90 plus/img 1.png"
import x90plus2 from "../../IMG/X90 plus/img 2.png"
import x90plus3 from "../../IMG/X90 plus/img 3.png"
import x90plus4 from "../../IMG/X90 plus/img 4.png"
import x90plus5 from "../../IMG/X90 plus/img 5.png"
import x90plus6 from "../../IMG/X90 plus/img 6.png"

import dashingPraisList from "../../IMG/dashing/prais list.pdf"
import x70plusPraisList from "../../IMG/X70 plus/prais list.pdf"
import x90plusPraisList from "../../IMG/X90 plus/prais list.pdf"

import dashingCard from '../../IMG/Маторики/dasing card.png'
import x70Card from '../../IMG/Маторики/x70 card.png'
import x70plusCard from '../../IMG/Маторики/x70plus card.png'
import x90Card from '../../IMG/Маторики/x90 card.png'
import x90plusCard from '../../IMG/Маторики/x90plus card.png'
import x95Card from '../../IMG/Маторики/x95 card.png'

import Modification from "./Modification/modifig"






const databaseCar =[
    {name:"Dashing", car:{
            ExternalDesign:"Jetour Dashing 2023 часто сравнивают с Lamborghini Urus, что объясняется похожей внешностью этих машин. Оба кроссовера имеют характерный «хищный» передок, но у «китайца» совсем иная – безрамочная радиаторная решетка, а также элегантная двухэтажная оптика.",
            salon:"Jetour Dasheng насыщен технологиями для максимального комфорта и безопасности. Связь, навигация, музыка, дорожная информация — благодаря идеальному сочетанию техники и эмоций Вы управляете автомобилем уверенно и безопасно.",
            bez:"Для Jetour Dasheng предлагается целый ряд ассистирующих систем, обеспечивающих исключительно высокий уровень безопасности.\n" +
                "Наивысшая оценка C-NCAP.",
            ExternalDesignImg: DashengExternalDesign,
            salonImg:DashingSalon,
            Safety:x90plusSafety,
        },
        cardImg:dashingCard,
        imgAll:[
            {img:dashingimg1},{img:dashingimg2},{img:dashingimg3},{img:dashingimg4},{img:dashingimg5},{img:dashingimg6},{img:dashingimg7},{img:dashingimg8},
        ],
        info:[
            {text2:"12.3 дюймовая светодиодная панель поиборов"}, {text2:"Аудиосистема с 10 дюимовым сенсорным дисплеем, touchscreen. 6 динамиков"}, {text2:"Датчик давления в шинах"}, {text: "Электронный кондиционер",text2:"Круиз-контроль"}, {text2:"Система мониторинга \"слепых\" зон"}, {text2:"Управление аудиосистемой на руле"},
            {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электроусилитель руля"},{text2:"2-х диапазонная регулировка сидения переднего пассажира"},{text2:"Возможность подключения телефона Mirror Link USB"},{text2:"Дефлектор климатической системы для второго ряда сидений"},
            {text2:"Наружные зеркала с электоро регулировкой и подогревом"},{text2:"Система помощи при парковке (передний и задний парк-троник)"},{text2:"Электрические стеклоподьемники передних и задних дверей с функцией антизажатия"},
            {text2:"Электропривод двери багажного отделения с функцией автоматического открытия"},{text2:"3-х диапазонная электро регулировка сиденья водителя"},{text2:"Встороенный видео регистратор"}, {text2:"Кожаная отделка руля"},{text2:"Панорамная камера 360°"},{text2:"Система предупреждения о выезде из полосы движения"},{text2:"Электронный кондиционер"},{text2:"Электропривод складывания наружных зеркал"}
        ],
        prisList:dashingPraisList
    },
    {name:"X70", car:{
            ExternalDesign:"Новый кроссовер JETOUR Х70 получил по-настоящему свежий и интересный дизайн, отвечающий всем современным требованиям и заметный в транспортном потоке. Этот дизайн точно должен прийтись по вкусу украинским покупателям авто!",
            salon:"Jetour x70 насыщен технологиями для максимального комфорта и безопасности. Связь, навигация, музыка, дорожная информация — благодаря идеальному сочетанию техники и эмоций Вы управляете автомобилем уверенно и безопасно.",
            bez:"Фронтальные подушки безопасности водителя и посожира, боковые подушки безопасности \n Штатная противоугонная сигнализатция. \n Крепления для детских сидений ISOFIX. \n "+"Центральный замок и Бесключевой доступ и запуск двигателя. ESP - Электронная система курсовой устойчовости. ABS + EBD антиблокировочная система тормозов с распределением тормозных усилий",
            ExternalDesignImg: x70ExternalDesign,
            salonImg:X70Salon,
            Safety:x90plusSafety,
        },
        cardImg:x70Card,
        imgAll:[
            {img:x70img1},{img:x70img2},{img:x70img3},{img:x70img4},{img:x70img5},
        ],
        info:[
            {text2:"12.3 дюймовая светодиодная панель поиборов"}, {text2:"Аудиосистема с 10 дюимовым сенсорным дисплеем, touchscreen. 6 динамиков"}, {text2:"Датчик давления в шинах"}, {text: "Электронный кондиционер",text2:"Круиз-контроль"}, {text2:"Система мониторинга \"слепых\" зон"}, {text2:"Управление аудиосистемой на руле"},
            {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электроусилитель руля"},{text2:"2-х диапазонная регулировка сидения переднего пассажира"},{text2:"Возможность подключения телефона Mirror Link USB"},{text2:"Дефлектор климатической системы для второго ряда сидений"},
            {text2:"Наружные зеркала с электоро регулировкой и подогревом"},{text2:"Система помощи при парковке (передний и задний парк-троник)"},{text2:"Электрические стеклоподьемники передних и задних дверей с функцией антизажатия"},
            {text2:"Электропривод двери багажного отделения с функцией автоматического открытия"},{text2:"3-х диапазонная электро регулировка сиденья водителя"},{text2:"Встороенный видео регистратор"}, {text2:"Кожаная отделка руля"},{text2:"Панорамная камера 360°"},{text2:"Система предупреждения о выезде из полосы движения"},{text2:"Электронный кондиционер"},{text2:"Электропривод складывания наружных зеркал"}
        ],
        prisList:x70plusPraisList
    },
    {name:"X70 Plus", car:{
            ExternalDesign:"Превосходить ожидания. Это стремление отражено не только в названии Jetour, но и в дизайне X70 Plus. Элегантный, просторный и многофункциональный, он поразит Вас уровнем технологий и комфорта.",
            salon:"Jetour x70 Plus насыщен технологиями для максимального комфорта и безопасности. Связь, навигация, музыка, дорожная информация — благодаря идеальному сочетанию техники и эмоций Вы управляете автомобилем уверенно и безопасно.",
            bez:"Для Jetour x70 Plus предлагается целый ряд ассистирующих систем, обеспечивающих исключительно высокий уровень безопасности.\n" +
                "Наивысшая оценка C-NCAP.",
            ExternalDesignImg:x70plusExternalDesign ,
            salonImg:X70plusSalon,
            Safety:x90plusSafety,
        },
        cardImg:x70plusCard,
        prisList:x70plusPraisList,
        imgAll:[
            {img:x70plusimg1},{img:x70plusimg2},{img:x70plusimg3},{img:x70plusimg4},{img:x70plusimg5},{img:x70plusimg6},
        ],
        info:[
            {text2:"12.3 дюймовая светодиодная панель поиборов"}, {text2:"Аудиосистема с 10 дюимовым сенсорным дисплеем, touchscreen. 6 динамиков"}, {text2:"Датчик давления в шинах"}, {text: "Электронный кондиционер",text2:"Круиз-контроль"}, {text2:"Система мониторинга \"слепых\" зон"}, {text2:"Управление аудиосистемой на руле"},
            {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электроусилитель руля"},{text2:"2-х диапазонная регулировка сидения переднего пассажира"},{text2:"Возможность подключения телефона Mirror Link USB"},{text2:"Дефлектор климатической системы для второго ряда сидений"},
            {text2:"Наружные зеркала с электоро регулировкой и подогревом"},{text2:"Система помощи при парковке (передний и задний парк-троник)"},{text2:"Электрические стеклоподьемники передних и задних дверей с функцией антизажатия"},
            {text2:"Электропривод двери багажного отделения с функцией автоматического открытия"},{text2:"3-х диапазонная электро регулировка сиденья водителя"},{text2:"Встороенный видео регистратор"}, {text2:"Кожаная отделка руля"},{text2:"Панорамная камера 360°"},{text2:"Система предупреждения о выезде из полосы движения"},{text2:"Электронный кондиционер"},{text2:"Электропривод складывания наружных зеркал"}
        ],

    },
    {name:"X90", car:{
            ExternalDesign:"Крупный CUV обладает современным дизайном, чем-то напоминающим экстерьер марки Chery. Отличается оригинальной и очень большой хромированной решеткой радиатора. Хромированная полоса над решеткой и фарами придает автомобилю особый шарм.",
            salon:"Jetour x90 насыщен технологиями для максимального комфорта и безопасности. Связь, навигация, музыка, дорожная информация — благодаря идеальному сочетанию техники и эмоций Вы управляете автомобилем уверенно и безопасно.",
            bez:"Для Jetour x90 предлагается целый ряд ассистирующих систем, обеспечивающих исключительно высокий уровень безопасности.\n" +
                "Наивысшая оценка C-NCAP.",
            ExternalDesignImg: x90ExternalDesign,
            salonImg:X90Salon,
            Safety:x90plusSafety,
        },
        cardImg:x90Card,
        imgAll:[
            {img:x90img1},{img:x90img2},{img:x90img3},{img:x90img4},{img:x90img5},
        ],
        info:[
            {text2:"12.3 дюймовая светодиодная панель поиборов"}, {text2:"Аудиосистема с 10 дюимовым сенсорным дисплеем, touchscreen. 6 динамиков"}, {text2:"Датчик давления в шинах"}, {text: "Электронный кондиционер",text2:"Круиз-контроль"}, {text2:"Система мониторинга \"слепых\" зон"}, {text2:"Управление аудиосистемой на руле"},
            {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электроусилитель руля"},{text2:"2-х диапазонная регулировка сидения переднего пассажира"},{text2:"Возможность подключения телефона Mirror Link USB"},{text2:"Дефлектор климатической системы для второго ряда сидений"},
            {text2:"Наружные зеркала с электоро регулировкой и подогревом"},{text2:"Система помощи при парковке (передний и задний парк-троник)"},{text2:"Электрические стеклоподьемники передних и задних дверей с функцией антизажатия"},
            {text2:"Электропривод двери багажного отделения с функцией автоматического открытия"},{text2:"3-х диапазонная электро регулировка сиденья водителя"},{text2:"Встороенный видео регистратор"}, {text2:"Кожаная отделка руля"},{text2:"Панорамная камера 360°"},{text2:"Система предупреждения о выезде из полосы движения"},{text2:"Электронный кондиционер"},{text2:"Электропривод складывания наружных зеркал"}
        ],
        prisList:x90plusPraisList
    },
    {name:"x90 Plus", car:{
            ExternalDesign:"Крупный CUV обладает современным дизайном, чем-то напоминающим экстерьер марки Chery. Отличается оригинальной и очень большой хромированной решеткой радиатора. Хромированная полоса над решеткой и фарами придает автомобилю особый шарм.",
            salon:"Jetour x90 Plus насыщен технологиями для максимального комфорта и безопасности. Связь, навигация, музыка, дорожная информация — благодаря идеальному сочетанию техники и эмоций Вы управляете автомобилем уверенно и безопасно.",
            bez:"Для Jetour x90 Plus предлагается целый ряд ассистирующих систем, обеспечивающих исключительно высокий уровень безопасности.\n" +
                "Наивысшая оценка C-NCAP.",
            ExternalDesignImg: x90plusExternalDesign,
            salonImg:X90plusSalon,
            Safety:x90plusSafety,
        },
        cardImg:x90plusCard,
        imgAll:[
            {img:x90plus1},{img:x90plus2},{img:x90plus3},{img:x90plus4},{img:x90plus5},{img:x90plus6}
        ],
        info:[
            {text2:"12.3 дюймовая светодиодная панель поиборов"}, {text2:"Аудиосистема с 10 дюимовым сенсорным дисплеем, touchscreen. 6 динамиков"}, {text2:"Датчик давления в шинах"}, {text: "Электронный кондиционер",text2:"Круиз-контроль"}, {text2:"Система мониторинга \"слепых\" зон"}, {text2:"Управление аудиосистемой на руле"},
            {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электроусилитель руля"},{text2:"2-х диапазонная регулировка сидения переднего пассажира"},{text2:"Возможность подключения телефона Mirror Link USB"},{text2:"Дефлектор климатической системы для второго ряда сидений"},
            {text2:"Наружные зеркала с электоро регулировкой и подогревом"},{text2:"Система помощи при парковке (передний и задний парк-троник)"},{text2:"Электрические стеклоподьемники передних и задних дверей с функцией антизажатия"},
            {text2:"Электропривод двери багажного отделения с функцией автоматического открытия"},{text2:"3-х диапазонная электро регулировка сиденья водителя"},{text2:"Встороенный видео регистратор"}, {text2:"Кожаная отделка руля"},{text2:"Панорамная камера 360°"},{text2:"Система предупреждения о выезде из полосы движения"},{text2:"Электронный кондиционер"},{text2:"Электропривод складывания наружных зеркал"}
        ],
        prisList:x90plusPraisList
    },
    {name:"x95", car:{
            ExternalDesign:"Крупный CUV обладает современным дизайном, чем-то напоминающим экстерьер марки Chery. Отличается оригинальной и очень большой хромированной решеткой радиатора. Хромированная полоса над решеткой и фарами придает автомобилю особый шарм.",
            salon:"Jetour x95 насыщен технологиями для максимального комфорта и безопасности. Связь, навигация, музыка, дорожная информация — благодаря идеальному сочетанию техники и эмоций Вы управляете автомобилем уверенно и безопасно.",
            bez:"Для Jetour x95 предлагается целый ряд ассистирующих систем, обеспечивающих исключительно высокий уровень безопасности.\n" +
                "Наивысшая оценка C-NCAP.",
            ExternalDesignImg: x90plusExternalDesign,
            salonImg:X90plusSalon,
            Safety:x90plusSafety,
        },
        cardImg:x95Card,
        imgAll:[
            {img:x90plus1},{img:x90plus2},{img:x90plus3},{img:x90plus4},{img:x90plus5},{img:x90plus6}
        ],
        info:[
            {text2:"12.3 дюймовая светодиодная панель поиборов"}, {text2:"Аудиосистема с 10 дюимовым сенсорным дисплеем, touchscreen. 6 динамиков"}, {text2:"Датчик давления в шинах"}, {text: "Электронный кондиционер",text2:"Круиз-контроль"}, {text2:"Система мониторинга \"слепых\" зон"}, {text2:"Управление аудиосистемой на руле"},
            {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электронный стояночный тормоз (ЕРВ) с функцией авто удержания Auto Hold"}, {text2:"Электроусилитель руля"},{text2:"2-х диапазонная регулировка сидения переднего пассажира"},{text2:"Возможность подключения телефона Mirror Link USB"},{text2:"Дефлектор климатической системы для второго ряда сидений"},
            {text2:"Наружные зеркала с электоро регулировкой и подогревом"},{text2:"Система помощи при парковке (передний и задний парк-троник)"},{text2:"Электрические стеклоподьемники передних и задних дверей с функцией антизажатия"},
            {text2:"Электропривод двери багажного отделения с функцией автоматического открытия"},{text2:"3-х диапазонная электро регулировка сиденья водителя"},{text2:"Встороенный видео регистратор"}, {text2:"Кожаная отделка руля"},{text2:"Панорамная камера 360°"},{text2:"Система предупреждения о выезде из полосы движения"},{text2:"Электронный кондиционер"},{text2:"Электропривод складывания наружных зеркал"}
        ],
        prisList:x90plusPraisList
    },
];


class Activcar extends Component{
    state={
        database:null,
        color:"white",
        activ: [],
        modification:false
    };

    componentDidMount() {
        const {database} = this.props;
        databaseCar.map(item => {
           if(database.name === item.name){
               this.state.activ = [];
               this.state.activ.push(item);
           }
        });
        this.setState({database});
    }
    render() {
        const {allCars}=this.props;
        const {database,color,activ,modification}=this.state;
        const activCar = activ[0];
        let img = database === null ? "null": database.img;
        let colorImgCar = color === "white" ? img.white : color === "red" ? img.red : color === "blue" ? img.blue : color === "grey" ? img.grey : color === "purple" ? img.purple : color === "black" ? img.black : null;
        let backgroundColor = color === "white"? {backgroundImage: "linear-gradient(#D2D2D2,  #ffffff)"} : color === "red" ?  {backgroundImage: "linear-gradient(#772929,  #ffffff)"}
        :color === "blue"? {backgroundImage: "linear-gradient(#5685B1,  #ffffff)"}:color=== "grey"?{backgroundImage: "linear-gradient(#54646F,  #FFFFFF)"}:color === "purple"?{backgroundImage: "linear-gradient(#2E0C29,  #AE7FA6)"}
        : color==="black"? {backgroundImage: "linear-gradient(#000000,  #ffffff)"}:null;
        return(
            <>
                {/*Модификатция*/}
                {modification? <Modification exit={()=>{this.setState({modification:false})}} database={databaseCar}  activ={activCar} />:null}
                {/*////*/}
                <div className={"blok-activCar"} style={{backgroundImage: "linear-gradient(#4B4E61,  #AFB5E2)"}} id={"machine_overview"}>
                    <div className={"activ-text-car"}>
                        <h1 className={"name-car-activ"}>{database === null? null:database.name}</h1>
                        <p className={"pot-text-carName"}>Экономичность и эффективность машины оснащен современными технологиями, которые повышают его экономичность и эффективность. Вы сможете сэкономить на топливе и одновременно уменьшить негативное воздействие на окружающую среду.</p>
                        <div className={"activ-booton-info-jetour"}>
                            тест-драйв  &#8594;
                        </div>
                    </div>
                    <div className={"car-img-activ"}>
                        <img src={colorImgCar === undefined ? noCar : colorImgCar }/>
                    </div>
                    <div className={"color-activCar"}>
                        {database === null?null:database.img.white ? <div style={{backgroundImage: "linear-gradient(#FFFFFF, #949494)"}} onClick={() => {
    this.setState({color: "white"})
}}/>: null}
                        {database === null?null:database.img.red ? <div style={{backgroundImage: "linear-gradient(#FE6363, #600000)"}} onClick={() => {
    this.setState({color: "red"})
}}/>: null}
                        {database === null?null:database.img.blue ? <div style={{backgroundImage: "linear-gradient(#698AFF, #1A276E)"}} onClick={() => {
    this.setState({color: "blue"})
}}/>: null}
                        {database === null?null:database.img.grey ? <div style={{backgroundImage: "linear-gradient(#CFCFCF, #3F3F3F)"}} onClick={() => {
    this.setState({color: "grey"})
}}/>: null}
                        {database === null?null:database.img.purple  ? <div style={{backgroundImage: "linear-gradient(#7B6184, #3D1B49)"}} onClick={() => {
    this.setState({color: "purple"})
}}/>: null}
                        {database === null?null:database.img.black ? <div style={{backgroundImage: "linear-gradient(#555555, #000000)"}} onClick={() => {
    this.setState({color: "black"})
}}/>: null}
                    </div>
                    <div className={"text-jetour-activ"}>
                        <img src={logo}/>
                    </div>
                    <div className={"activ-info-car"}>
                        <div style={{backgroundColor:"#2F313E"}}>
                            <div>
                                <h1><span className={"big-text"}>{database !==null? database.engineCapacity:"147"}</span>л</h1>
                                <p className={"pot-text"}>Мощность двигателя</p>
                            </div>
                        </div>
                        <div style={{backgroundColor:"#24242E"}}>
                            <div>
                                <h1><span className={"big-text"}>7.4</span>л</h1>
                                <p className={"pot-text"}>Расход на 100km</p>
                            </div>
                        </div>
                        <div style={{backgroundColor:"#2F313E"}}>
                            <div>
                                <h1><span className={"big-text"}>1.5</span>л</h1>
                                <p className={"pot-text"}>Обём двигателя</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"section1-activCar"}>
                    <div className={"activ-img1"}>
                        <img className={"img-section1"} src={activCar ? activCar.car.ExternalDesignImg:"https://www.livecars.ru/l/news/2017/11/03/nissan-gt-r-2018/1.jpg?1509725147"}/>
                    </div>
                    <div className={"text"} style={{backgroundColor:"#62647D"}}>
                        <span>
                            <h2>Внешний дизайн</h2>
                            <p>{activCar ? activCar.car.ExternalDesign:"Jetour Dashing 2023 часто сравнивают с Lamborghini Urus, что объясняется похожей внешностью этих машин. Оба кроссовера имеют характерный «хищный» передок, но у «китайца» совсем иная – безрамочная радиаторная решетка, а также элегантная двухэтажная оптика."}</p>
                        </span>
                    </div>
                    <div className={"activ-img2"}>
                        <img className={"img-section1"} src={activCar ? activCar.car.ExternalDesignImg:"https://www.livecars.ru/l/news/2017/11/03/nissan-gt-r-2018/1.jpg?1509725147"}/>
                    </div>
                </div>
                <div className={"section1-activCar"}>
                    <div>
                        <img className={"img-section1"} src={activCar ? activCar.car.salonImg:"https://www.livecars.ru/l/news/2017/11/03/nissan-gt-r-2018/1.jpg?1509725147"}/>
                    </div>
                    <div className={"text"} style={{backgroundColor:"#2F313E"}}>
                        <span>
                            <h2>Салон</h2>
                            <p>{activCar ? activCar.car.salon:""}</p>
                        </span>
                    </div>

                </div>
                <div className={"section1-activCar"}>
                    <div  className={"activ-img1"}>
                        <img className={"img-section1"} src={activCar ? activCar.car.Safety:"https://www.livecars.ru/l/news/2017/11/03/nissan-gt-r-2018/1.jpg?1509725147"}/>
                    </div>
                    <div className={"text"} style={{backgroundColor:"#62647D"}}>
                        <span>
                            <h2>Безопасность</h2>
                            <p>{activCar ? activCar.car.bez:""}</p>
                        </span>
                    </div>
                    <div  className={"activ-img2"}>
                        <img className={"img-section1"} src={activCar ? activCar.car.Safety:"https://www.livecars.ru/l/news/2017/11/03/nissan-gt-r-2018/1.jpg?1509725147"}/>
                    </div>
                </div>

                <div className={"slider-activCar"}>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <Slyder databaseImg={activCar} />
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className={"config-img-car"}>
                    <img src={imgConfig}/>
                    <div className={"border-text-config"}>
                        <h4 >Модификация</h4>
                        <p>Узнайте, какая модификация этой машины может стать идеальным сочетанием стиля, производительности и экономичности</p>
                        <div className={"booton-config"} onClick={()=>{ this.setState({modification:true})}}>Узнать подробнее</div>
                    </div>
                </div>


                <div className={"peculiarities"} id={"peculiarities"}>
                    <h1>Особенности</h1>
                    <div className={"blok-peculiarities"}>{activCar !== undefined?activCar.info.map((item,index) =>{
                        return(
                            <div key={index} className={"block-li"}>
                                <li><span>{item.text2}</span> </li>
                            </div>
                        )
                    }):''}
                    </div>
                </div>
                <div className={"peculiarities pris-list"} id={"price_list"}>
                    <h1>Прайс-лист и спецификации</h1>
                        <a href={activCar !== undefined?activCar.prisList:''}><img src={pdfImg}/>
                            <span>{activCar !== undefined?activCar.name:''}</span>
                        </a>
                </div>

                <Form/>

                <div className={"peculiarities pris-list"} id={"vsemodeli"}>
                    <h1>Все модели</h1>
                    <div className={"border-card-car"}>
                        {allCars.map((item, index) =>{
                            return(
                                <div key={index} id={index} className={"card-car-model"}>
                                    {!item.InStock?
                                        <div className={"inStock"}>
                                            Заказной
                                        </div>
                                        :null}
                                    <h2>{item.car.name}</h2>
                                    <hr/>
                                    <p>$ {item.car.price}</p>
                                    <div className={"block-card"}>
                                    </div>
                                    <span>{item.car.year}</span>
                                    <img className={"img-card"} src={item.car.cardImg}/>
                                    <img className={"img-card-hover"} src={item.car.img.white}/>
                                </div>
                            )
                        })}
                    </div>
                    <center>
                        <span className={"bottom-text-activCar"}>
                            Мы готовы оказать вам превосходное обслуживание и профессиональную поддержку на каждом этапе. Посетите наш сайт, чтобы осуществить свою заветную мечту.
                        </span>
                    </center>
                </div>

                <div className={"bottom-activ-syte"}>
                    <img src={logotip}/>
                </div>

            </>
        )
    }
}


function Slyder(databaseImg) {
    const tt = databaseImg.databaseImg !== undefined? databaseImg.databaseImg.imgAll : null;
    const imgs = tt !== null? tt.map((item, items) =>{
        if (items === 0){
            return(
                <div key={item.img} className="carousel-item active">
                    <img src={item.img} className="d-block w-100" alt="..."/>
                </div>
            )
        }else {
            return (
                <div key={item.img} className="carousel-item">
                    <img src={item.img} className="d-block w-100" alt="..."/>
                </div>
            )
        }


    }):"";
    return imgs;
}


export default Activcar;