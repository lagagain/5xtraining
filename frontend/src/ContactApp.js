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
                    <ol className="breadcrumb" itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList">
                      <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
                        <a itemscope="itemscope" itemtype="https://schema.org/Thing" itemprop="item" href="/">
                          <span itemprop="name">首頁</span>
                        </a>
                      </li>
                      <li itemprop="itemListElement" itemscope="itemscope" itemtype="https://schema.org/ListItem">
                        <h5>
                          <a itemscope="itemscope" itemtype="https://schema.org/Thing" itemprop="item" href="/press">
                            <span itemprop="name">聯絡我們</span>
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
                    <form className="new_contact" id="new_contact" action="https://docs.google.com/forms/d/e/1FAIpQLSd2vF30UChnV62_VXwZejZlqwi2i9Wv8ddgBrJbop7lJIAM2A/formResponse" accept-charset="UTF-8" method="post" target="processForm">
                      <input type="hidden" name="" />
                      <div className="form-group">
                        <input className="form-control input-lg" placeholder="名字" type="text" name="entry.1883788675" id="contact_name" required />
                      </div>
                      <div className="form-group">
                        <input className="form-control input-lg" placeholder="信箱" type="email" name="entry.870224435" id="contact_email" required />
                      </div>
                      <div className="form-group">
                        <input className="form-control input-lg" placeholder="電話" type="text" name="entry.1333260650" id="contact_phone" required />
                      </div>
                      <div className="form-group">
                        <select className="form-control input-lg" id="sel1" name="entry.1349143913" required>
                          <option value="">請選擇主題</option>
                          <option value="專案開發">專案開發</option>
                          <option value="技術諮詢">技術諮詢</option>
                          <option value="企業內訓">企業內訓</option>
                          <option value="課程詢問">課程詢問</option>
                          <option value="其它">其它</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea rows="5" className="form-control" placeholder="留下你的訊息" name="entry.469786748" id="contact_message" required></textarea>
                      </div>
                      <div className="form-group">
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        <div className="g-recaptcha" data-sitekey="6LdJRhgUAAAAAFE0hyvJzsu_BpUeAiBQ0Lrq6xvV"></div>

                        <div className="has-error"></div>
                      </div>
                      <input type="submit" name="commit" value="送出" className="btn btn-red btn-block" data-disable-with="送出" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default App;
