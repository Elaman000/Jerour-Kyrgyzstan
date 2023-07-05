import React, {Component} from "react";

import "./Assembly.css"
import Models from "./Models/Models"

class Assembly extends Component{

    render() {
        const {database, activCar} = this.props;
        return(
            <>
                <div className={"body-border"} >
                    <Models activCar={(w,activDatabase)=>activCar(w,activDatabase,"activCar")} database={database}/>
                </div>
            </>
        )
    }
    }
export default Assembly;