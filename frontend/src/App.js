import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
          <XHeader></XHeader>
          <XContent></XContent>
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

class XContent extends React.Component{
    render(){
        return (<div>
                  <h1>Content</h1>
                  <div>Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.

                  </div>
                  Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat.

                  j
                  <div>Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat.

                  </div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.

                  j
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.

                  </div>
                  Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.

                  j
                  <div>Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit.

                  </div>

                </div>);
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




export default App;
