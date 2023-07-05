import "./form.css"
import img from "../../../IMG/Маторики/jetour form img.png"

function Form() {
    return(
        <>
            <div className={"peculiarities"}>
                <div className={"block-form"}>
                    <div className="block-inp">
                        <h2>Записаться на тест-драйв</h2>
                        <div className={"block-inp-text"}>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGrid"
                                       placeholder="Иия"/>
                                <label htmlFor="floatingInputGrid">Ваше имя</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputGrid1"
                                       placeholder="name@example.com"/>
                                <label htmlFor="floatingInputGrid">email адрес</label>
                            </div>
                            <div className="form-floating">
                                <input type="number" className="form-control" id="floatingInputGrid2"
                                       placeholder="+996 554 54 77 66"/>
                                <label htmlFor="floatingInputGrid">Телефон номер</label>
                            </div>
                        </div>
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid">
                                <option defaultValue>Хочу записатся на тест-драйв</option>
                                <option value="1">Хочу получить подробную консультацию</option>
                                <option value="2">Хочу поговорить об оформлении</option>
                                <option value="3">Обратная связь!</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Часто задаваемые вопросы</label>
                        </div>
                        <button className="btn btn-primary" type="button" onClick={()=>{if(window.confirm('Нажмите "OK", если вы не робот')){alert('Спасибо за доверие!')}else{alert("Простите но мы не можем продолжить опираться!")}}} >Button</button>
                    </div>
                    <div className="block-img">
                        <img src={img}/>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Form;