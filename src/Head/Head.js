import './Head.css';

import imgLogo from "../IMG/Маторики/vehica-logo-black-retina-1.png"
import imgLogo1 from "../IMG/Маторики/vehica-logo-dark-retina-2.png"


import {Component} from "react";

    class Head extends Component{
        state = {
            aa: false
        };

        al=()=>{
            let too = window.pageYOffset- 100;
            let top = window.pageYOffset > 1000 && too < window.pageYOffset;

                if(top){
                    this.setState({aa: true})
                }else{
                    this.setState({aa: false})
                }
        };



        render() {
            window.onscroll = ()=> {
                this.al()
            };
            const {activ,onActiv,syte}=this.props;

            return(
                <>
                    <div className={!this.state.aa? "head-border": ""} id={"heder_syte1"}>
                            <nav className="navbar">
                                <div className="container-fluid">
                                    <button style={{color: "white"}} className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation">
                                        <svg style={{color:"white"}} xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </button>
                                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                                         aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Jetour</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
                                        </div>
                                        <div className="offcanvas-body">
                                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">Главный</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Контакты</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Новости</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                                       data-bs-toggle="dropdown" aria-expanded="false">
                                                        Все модели
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">X70</a></li>
                                                        <li><a className="dropdown-item" href="#">X70 plus</a>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider"/>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">Сровнить машины</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                                <input className="form-control me-2" type="search" placeholder="Поискать"
                                                       aria-label="Search"/>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                        <div className={"header-img-logo"}>
                            <img className={"header-img-logo"} src={imgLogo1} alt="img"/>
                        </div>
                        <div className={"header-sections-menu"}>
                            <a href={syte === "main" ? "#main_models": "#vsemodeli"}><div style={{color: "white"}}>МОДЕЛИ</div></a>

                            {syte === "main" ?
                                <>
                                <a href={"#obzor"}><div style={{color: "white"}} onClick={()=>{this.props.ObzorCar()}}>ОБЗОР</div></a>
                                    <a href={"#novosti"}><div style={{color: "white"}}>НОВОСТИ</div></a>
                                </>
                            : syte === "activCar"?
                                    <>
                                        <a href={"#obzor"}><div style={{color: "white"}}>ОСОБЕННОСТИ</div></a>
                                        <a href={""}><div style={{color: "white"}}>ПРАЙС-ЛИСТ</div></a>
                                    </>
                            :null}


                            <div style={{color: "white"}}>КОНТАКТЫ</div>
                        </div>
                        <div className={"header-feedback"}>
                            {activ === "main"?
                                <span onClick={()=>{this.props.form("applications")}}>Обратная связь</span>
                                :
                                <a href={''}>
                                    <i className="bi bi-box-arrow-right exit-botton" style={{color:"#ffffff"}} onClick={()=>{onActiv("main")}}/>
                                </a>
                            }</div>
                    </div>

                    <div className={this.state.aa? "head-border2": "dispay-none"} id={"heder_syte"}>
                        <nav className="navbar">
                            <div className="container-fluid">
                                <button style={{color: "white"}} className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                                        aria-label="Toggle navigation">
                                    <svg style={{ color:"black"}}  xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                </button>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                                     aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                                aria-label="Close"/>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                                   data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider"/>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Something else
                                                        here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <form className="d-flex mt-3" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search"
                                                   aria-label="Search"/>
                                            <button className="btn btn-outline-success" type="submit">Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className={"header-img-logo"}>
                            <img className={"header-img-logo"} src={imgLogo}/>
                        </div>
                        <div className={"header-sections-menu"}>
                            <a href={syte === "main"? "#models_main": "#vsemodeli"}><div  style={{color: "black"}}>МОДЕЛИ</div></a>
                            {syte === "main" ?
                                <>
                                    <a href={"#obzor"}><div style={{color: "black"}}>ОБЗОР</div></a>
                                    <a href={"#novosti"}> <div style={{color: "black"}}>НОВОСТИ</div></a>
                                </>
                                : syte === "activCar"?
                                    <>
                                        <a href={"#obzor"}><div style={{color: "black"}}>ОСОБЕННОСТИ</div></a>
                                        <div style={{color: "black"}}>ПРАЙС-ЛИСТ</div>
                                    </>
                                    :null}
                            <div style={{color: "black"}}>КОНТАКТЫ</div>
                        </div>
                        <div className={"header-feedback"}>
                        {activ === "main"?
                            <span>Обратная связь</span>
                            :
                            <a href={''}>
                                <i className="bi bi-box-arrow-right exit-botton" style={{color:"#000000"}} onClick={()=>{onActiv("main")}}/>
                            </a>
                            }</div>
                    </div>
                </>
            )
        }
        }



export default Head;

    //13.06   30
//15.06        34
    // 16.06   54
// 19.06      69     импр 12
//27.06       91
//29.06       81     8 6
//30.06       84     16 2 1

