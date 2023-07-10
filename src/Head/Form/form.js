
import "./form.css"
import React, {Component} from "react";



 class FormApplications extends Component{




     render() {
         return(
             <>
                 <div className={"borger-Applications"}>
                     <div className={"block-Applications"}>
                         <svg onClick={()=>{this.props.form("")}}   xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                              className="bi bi-x-square" viewBox="0 0 16 16">
                             <path
                                 d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                             <path
                                 d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                         </svg>
                         <center>
                             <h1>Форма заявки</h1>
                         </center>
                         <div className="block-inp2">
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
                                     <label htmlFor="floatingInputGrid"  >Телефон номер</label>
                                 </div>
                             </div>
                             <br/>
                             <div className="form-floating">
                                 <select className="form-select" id="floatingSelectGrid">
                                     <option defaultValue>Хочу записатся на тест-драйв</option>
                                     <option value="1">Хочу получить подробную консультацию</option>
                                     <option value="2">Хочу поговорить об оформлении</option>
                                     <option value="3">Обратная связь!</option>
                                 </select>
                                 <label htmlFor="floatingSelectGrid">Часто задаваемые вопросы</label>
                             </div>
                             <br/>
                             <button style={{marginRight:"1em"}} className={"btn btn-primary"}>
                                 <i className="bi bi-telegram "/> Telegram bot
                             </button>
                             <button  className="btn btn-primary" type="button" onClick={()=>{if(window.confirm('Нажмите "OK", если вы не робот')){alert('Спасибо за доверие!')}else{alert("Простите но мы не можем продолжить опираться!")}}} >
                                 Отправить</button>

                         </div>
                     </div>
                 </div>
             </>
         )
     }


 }
 export default FormApplications;