import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
          <XHeader></XHeader>
          <Banner></Banner>
          <About5X></About5X>
          <XFooter></XFooter>
        </div>
    );
}

class XHeader extends React.Component{
    render(){
        return (
            <header>
              <nav className="d-flex flex-wrap">
                <a href="/" className="px-4 py-3">
                  <img src="/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
                </a>

                <div className="col d-md-none d-flex justify-content-end">
                  <button className="menu-button" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="fas fa-bars"></div>
                  </button>
                </div>

                <div className="d-md-none w-100"></div>


                <div className="col" id="mobile-dropdown">
                  <ul className="d-flex flex-column flex-md-row mt-md-auto mt-4 justify-content-md-end">
                    <li className="p-3">
                      <i className="pr-1 far fa-gem"></i>
                      <a className="" href="#" target="">線上課程</a>
                    </li>
                    <li className="p-3">
                      <i className="pr-1 far fa-compass fa-lg"></i>
                      <a className="" href="#" target=""> ASTRO Camp</a>
                    </li>
                    <li className="p-3">
                      <a className="" href="#">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="12.59" height="19.215" viewBox="0 0 12.59 19.215">
                          <path id="bolt" d="M10.231,5.536H6.239L7.713,1.045A.834.834,0,0,0,6.91,0H1.927A.832.832,0,0,0,1.1.72L0,9.024a.832.832,0,0,0,.823.941H4.927l-1.6,6.73a.83.83,0,0,0,1.526.606l6.09-10.519A.829.829,0,0,0,10.231,5.536Z" transform="translate(0.762 0.75)" fill="none" stroke="#7d7d7d" strokeWidth="1.5"/>
                        </svg>
                        全方位課程
                        <span className="">
                          <img src="/new-301d86be.svg" alt="全方位網頁設計前後端實戰 - 假日班 | 五倍紅寶石" />
                        </span>
                      </a>
                    </li>
                    <XHeaderMenuItem name="短期課程" href="#"></XHeaderMenuItem>
                    <XHeaderMenuItem name="專案開發" href="#"></XHeaderMenuItem>
                    <XHeaderMenuItem name="企業代訓" href="#"></XHeaderMenuItem>
                    <XHeaderMenuItem name="空間租借" href="#"></XHeaderMenuItem>
                    <XHeaderMenuItem name="最新消息" href=""></XHeaderMenuItem>
                  </ul>
                </div>
              </nav>
            </header>
        );
    }
}

class XHeaderMenuItem extends React.Component{
    render() {
        return (
            <li className="p-3">
              <a className="" href={this.props.href}>{this.props.name}</a>
            </li>
        );
    }
}

class XFooter extends React.Component{
    render(){
        return (
            <footer className="">
              <div className="container">
                <div className="row">

                  <div className="col-12 col-md-3">
                    <a href="#" className="d-block mb-3 press-img">
                      <img src="/footer/press-img-3161693e.png" title="媒體報導" alt="媒體報導" />
                    </a>
                    <a href="#" className="d-block press-img" target="">
                      <img src="/footer/cakeresume-8938f367.png" title="CakeResume 找工作" alt="CakeResume 找工作"  />
                      <span className="text-muted">找工作</span>
                    </a>
                  </div>

                  <div className="col-12 col-md-9">
                    <div className="row">
                      <div className="col-12 mt-3 mt-md-0">
                        <div className="footer-nav">
                          <h5><a href="#">關於五倍紅寶石</a></h5>
                          <h5><a href="#">媒體報導</a></h5>
                          <h5><a href="#">團隊成員</a></h5>
                          <h5><a href="#">聯絡詢價</a></h5>
                          <h5><a href="#">常見問題</a></h5>
                          <h5><a href="#">工作機會</a></h5>
                          <h5><a target="" href="#">開源專案</a></h5>
                          <h5><a href="#">隱私權條款</a></h5>
                          <h5><a href="#">服務條款</a></h5>
                        </div>
                      </div>

                      <div className="col-12 mt-4">
                        <div className="row">
                          <div className="col-12 col-md-4 col-xl-3">
                            <div className="contact-info">
                              <strong className="large text-danger">02-2331-5247</strong>
                              <small>Mon - Fri / 09:30 - 22:00</small>
                              <a href="#" target=""><i className="media-icon fab fa-facebook-f"></i></a>
                              <a href="#" target=""><i className="media-icon fab fa-twitter" aria-hidden="true"></i></a>
                              <a href="#" target=""><i className="media-icon fab fa-github" aria-hidden="true"></i></a>
                            </div>
                          </div>

                          <div className="col-12 col-md-8 col-xl-9 mt-3 mt-md-0">
                            <div className="mail-address">
                              <p>有任何問題？</p>
                              <a href="#">hi@5xruby.tw</a>
                              <p>地址： <a target="" href="#">10046 台北市中正區衡陽路 7 號 5 樓</a></p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-5">
                    <div className="contact-info text-center">
                      <p>© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
                      <p>台北市短期補習班立案 第 7594 號</p>
                    </div>
                  </div>

                </div>
              </div>
              <div id="scrTop" className="">
                <i className="fa fa-angle-up" id="scrUp" aria-hidden="true"></i>
              </div>
            </footer>
        );
    }
}

class Banner extends React.Component{
    render(){
        return (
            <div id="banner" className="">
              <div className="slice">
                <img src="https://picsum.photos/1260/446?random=1"></img>
                <img src="https://picsum.photos/1260/446?random=2"></img>
                <img src="https://picsum.photos/1260/446?random=3"></img>
                <img src="https://picsum.photos/1260/446?random=4"></img>
              </div>
              <div className="d-flex" className="buttons">
                <button>⏺</button>
                <button>⏺</button>
                <button>⏺</button>
                <button>⏺</button>
              </div>
            </div>
        );
    }
}

class About5X extends React.Component{

    render(){
        return (
            "About 5xRuby"
        );
    }
}


export default App;
