import {Component} from "react";
import InfiniteSlider from "./crol"
import "./guarantee.css"
import Padval from "../../Bottom syte/padval"
import bakai from "../../IMG/Сотрудничество/Bakai bank.png"
import kyrgyzstan from "../../IMG/Сотрудничество/Kyrgyzstan bank.png"
import halyk from "../../IMG/Сотрудничество/Halyk bank.png"
import kampanion from "../../IMG/Сотрудничество/Kompanion bank.png"
import asia from "../../IMG/Сотрудничество/Asia mol.png"
import Events from "./Events/events"
import azorKg from "../../IMG/Сотрудничество/Azor kg.png"

class Guarantee extends Component {
    state={
        images: [
            bakai,
            kyrgyzstan,
            halyk,
            kampanion,
            asia,
            azorKg
]
    };
    render() {
        const {EventsDatabase}=this.props;
        return(
            <>

                <div className="container-about-the-brand">
                    <div className={"boxintex-shadow"}/>
                        <h1 className={"text-jetour"}>О бренде</h1>
                        <br/>
                        <h5 className={"text-jetour"}>СТРЕМИТЬСЯ ПРЕВЗОЙТИ СЕБЯ</h5>
                        <p>Мы не пытаемся превзойти других, оставить позади остальной мир. Вместо этого мы
                            учимся, как стать лучше. Призвание Jetour — идти по пути самосовершенствования.</p>
                        <p className={"text-jetour"}>В своей области мы стремимся двигаться вперед, развиваться, проявлять смелость,
                            исследуя неизведанное и принимая все новые вызовы. Мы каждый день
                            продолжаем превосходить себя ради лучшей жизни и будущего.</p>
                        <p className={"text-jetour"}>Бренд Jetour входит в состав холдинга Chery Commercial Vehicle Company и
                            рассчитанный на семейную и практичную аудиторию. Основываясь на накопленном
                            за более чем 20 лет опыте в производстве автомобилей, с учетом собственных
                            разработок международной команды специалистов, JETOUR представляет
                            семейство инновационных и интеллектуальных кроссоверов.</p>
                        <span className={"text-jetour"}>Превзойдите себя вместе с Jetour.</span>
                        <div className={"booton-info-jetour text-jetour"}>Узнать подробнее  &#8594;</div>
                </div>
                <br/>
                <h1 className={"text-models-body"} style={{ marginLeft:" 5%"}} id={"news"}>О событиях</h1>
                <Events database={EventsDatabase} />
                <br/>
                <br/>
                <h1 className={"text-models-body"} style={{ marginLeft:" 5%"}} id={"news"}>Нам доверяют</h1>
                <div className="blank">
                        <InfiniteSlider images={this.state.images} />
                </div>
                <Padval/>
            </>
        )
    }
}
export default Guarantee;