import {Component} from "react";


class SlyderImgCar extends Component{
    state={
      baza:[],
    };
    componentDidMount() {
        this.activ()
    }

    activ = ()=>{
        const {databaseimg} = this.props;
        console.log(databaseimg);
    };
    //
       //     <div key={item.img} className="carousel-item active">
       //         <img src={item.img} className="d-block w-100" alt="..."/>
       //     </div>
       // )}):null;
    render() {
        return(
            <>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }


}

export default SlyderImgCar;