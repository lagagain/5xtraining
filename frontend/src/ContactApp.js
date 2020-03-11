import React from 'react';
import './contact.css';
import { XHeader } from "./components/XHeader";
import { XFooter } from "./components/XFooter";


function App() {
    return (
        <div className="App">
          <XHeader></XHeader>
          <Banner></Banner>
          <Main></Main>
          <XFooter></XFooter>
        </div>
    );
}

class Banner extends React.Component{

    render(){
        return (
            <div className="top-banner red-bg pt-3 pb-3 contacts">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-right">
                    <div className="fb-like fb_iframe_widget" data-href="https://5xruby.tw/press" data-layout="button_count" data-size="large" data-action="like" data-share="true"></div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center text-white">
                    <ol className="breadcrumb" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
                      <li itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
                        <a itemScope="itemscope" itemType="https://schema.org/Thing" itemProp="item" href="/">
                          <span itemProp="name">首頁</span>
                        </a>
                      </li>
                      <li itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
                        <h5>
                          <a itemScope="itemscope" itemType="https://schema.org/Thing" itemProp="item" href="/press">
                            <span itemProp="name">聯絡我們</span>
                          </a>
                        </h5>
                      </li>
                    </ol>
                    <h1 className="title mt-4 mb-3">有任何問題嗎？馬上聯絡我們！</h1>
                    <h3 className="text-center mb-2"></h3>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class Main extends React.Component{

    componentDidMount(){
        let mount_map = document.querySelector("#mount-map");
        mount_map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.016266311726!2d121.513862!3d25.0424189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-z!5e0!3m2!1szh-TW!2stw!4v1482991564796" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
    render(){
        return (
            <div className="mt-5 mb-5 pb-5 overwrite-contacts">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                      <h3 className="mb-1">五倍紅寶石股份有限公司</h3>
                      10046 台北市中正區衡陽路 7 號 5 樓
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex pl-0 mb-3">
                      <div className="cml-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                        Tel：02-2331-5247
                        <br/>
                        Mobile：0928-617-687
                        <br/>
                        E-mail：
                        <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 pl-03 pr-0">
                        Fax：02-2331-8717
                        <br/>統編：24536806
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10" id="mount-map">
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="mb-3">
                      任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
                    </div>
                    <ContactForm></ContactForm>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class ContactForm extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            contact:{
                name: "",
                email: "",
                phone: "",
                sel1: "",
                message: "",
            },
            popup_display: "none",
        };
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.setState ({
            popup_display: "block",
        });
        return false;
    }
    onChange = (e)=>{
        window.tmp = this;
        let contact = this.state.contact;
        let target = e.target;
        let value = target.value;
        let name = target.name;
        contact = {...contact, [name]:value};
        console.table (contact);
        this.setState ({
            contact,
        });
        return false;
    }
    closePopup = (e) => {
        e.preventDefault();
        console.log ("close popup");
        this.setState ({
            popup_display: "none",
        });

        return false;
    }
    render(){
        return (
            <form className="new_contact"
                  id="new_contact"
                  onSubmit={this.onSubmit}
                  action=""
                  acceptCharset="UTF-8"
                  method=""
                  target="">
              <div className="form-group">
                <input className="form-control input-lg"
                       onChange={this.onChange}
                       placeholder="名字"
                       type="text"
                       name="name"
                       id="contact_name"
                       required />
              </div>
              <div className="form-group">
                <input className="form-control input-lg"
                       onChange={this.onChange}
                       placeholder="信箱"
                       type="email"
                       name="email"
                       id="contact_email"
                       required />
              </div>
              <div className="form-group">
                <input className="form-control input-lg"
                       onChange={this.onChange}
                       placeholder="電話"
                       type="text"
                       name="phone"
                       id="contact_phone"
                       required />
              </div>
              <div className="form-group">
                <select className="form-control input-lg"
                        onChange={this.onChange}
                        id="sel1"
                        name="sel1"
                        required>
                  <option value="">請選擇主題</option>
                  <option value="專案開發">專案開發</option>
                  <option value="技術諮詢">技術諮詢</option>
                  <option value="企業內訓">企業內訓</option>
                  <option value="課程詢問">課程詢問</option>
                  <option value="其它">其它</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows="5"
                          onChange={this.onChange}
                          className="form-control"
                          placeholder="留下你的訊息"
                          name="message"
                          id="contact_message"
                          required>
                </textarea>
              </div>
              
              <input type="submit"
                     name="commit"
                     value="送出"
                     className="btn btn-red btn-block"
              />
            <div className="popup-modal" style={{display:this.state.popup_display}}>
                <div className="container p-2 p-2 p-md-5 text-center">
                  <div className="row">
                    <h4 className="col">感謝您的來信，我們會儘快與您聯繫!</h4>
                  </div>
                  <hr/>
                  <div className="row mb-md-5 mb-2">
                    <h5>遞交的訊息</h5>
                  </div>
                  <div className="row pl-md-5 pl-2 mb-5 text-left">
                    <ul>
                      <li>
                        <span className="col-1">姓名：</span>
                        <p className="col d-inline">
                          {this.state.contact.name}
                        </p>
                      </li>
                      <li>
                        <span className="col-1">信箱：</span>
                        <p className="col d-inline">{this.state.contact.email}</p>
                      </li>
                      <li>
                        <span className="col-1">電話：</span>
                        <p className="col d-inline">{this.state.contact.phone}</p>
                      </li>
                      <li>
                        <span className="col-1">主題：</span>
                        <p className="col d-inline">{this.state.contact.sel1}</p>
                      </li>
                      <li>
                        <span className="col-1">訊息： </span>
                        <p>{this.state.contact.message}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="row justify-content-center">
                    <button className="col-3 p-2 btn btn-primary text-nowrap"
                            onClick={this.closePopup}>
                      關閉
                    </button>
                  </div>
                </div>
              </div>
            </form>
        );
    }
}

export default App;
