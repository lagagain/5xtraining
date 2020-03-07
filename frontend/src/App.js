import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
          <XHeader></XHeader>
          <Banner></Banner>
          <About5X></About5X>
          <Course></Course>
          <RecentLecture></RecentLecture>
          <Showcase></Showcase>
          <KnowAboutUs></KnowAboutUs>
          <XFooter></XFooter>
        </div>
    );
}

class XHeader extends React.Component{
    render(){
        return (
            <header>
              <nav className="d-flex flex-wrap">
                <a href="#" className="px-4 py-3">
                  <img src="logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
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
                          <img src="new-301d86be.svg" alt="全方位網頁設計前後端實戰 - 假日班 | 五倍紅寶石" />
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
                      <img src="footer/press-img-3161693e.png" title="媒體報導" alt="媒體報導" />
                    </a>
                    <a href="#" className="d-block press-img" target="">
                      <img src="footer/cakeresume-8938f367.png" title="CakeResume 找工作" alt="CakeResume 找工作"  />
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
            <div id="about_5xruby" className="feature-section light-grey-bg pb-4">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 center-block pb-3">
                    <h3 className="section-title text-center mb-5 mt-5 pb-4">
                      <span>關於五倍紅寶石 About 5xRuby </span>
                    </h3>
                    <div className="feature-list d-flex text-center flex-wrap">
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <a href="talks">
                          <img src="feature-list-img1-0d20ab19.png" alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                          <h3 className="pt-3">網頁設計</h3>
                          <h3 className="pt-0 mt-0">前後端課程教學</h3>
                          <p className="pt-3 pb-3 text-center">帶你掌握<strong>程式技能轉職工程師</strong>，<strong>程式課程</strong>從入門到進階讓你快速上手，學員好評推薦<strong>轉職課程</strong>！</p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <a href="showcases">
                          <img src="feature-list-img2-26e4ca80.png" alt="頂尖技術網頁製作、專案開發 | 五倍紅寶石" />
                          <h3 className="pt-3">頂尖技術</h3>
                          <h3 className="pt-0 mt-0">網頁製作、專案開發</h3>
                          <p className="pt-3 pb-3 text-center"><strong>網站開發</strong>到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。</p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <a href="training">
                          <img src="feature-list-img3-d0a4089e.png" alt="資訊軟體技術顧問 | 五倍紅寶石" />
                          <h3 className="pt-3">資訊軟體開發</h3>
                          <h3 className="pt-0 mt-0">技術顧問</h3>
                          <p className="pt-3 pb-3 text-center">協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！</p>
                        </a>
                      </div>
                      <div className="col-12 col-sm-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <a href="posts/category/activity">
                          <img src="feature-list-img4-13321bf0.png" alt="前後端工程師社群經營問 | 默默會 | 五倍紅寶石" />
                          <h3 className="pt-3">前後端工程師</h3>
                          <h3 className="pt-0 mt-0">社群經營</h3>
                          <p className="pt-3 pb-3 text-center">Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class Course extends React.Component{

    render(){
        return (
            <div className="container mb-5">
              <h3 className="row section-title text-center mb-5 mt-5 pb-4">
                <span className="w-100">熱門網頁設計課程推薦</span>
              </h3>
              <div className="row mb-5">
                <div className="col-md-4 col-12 mb-md-0 mb-4">
                  <CourseCard img="vue-js-61eaa1c7.jpg" teather="許國政 (Kuro Hsu)" title="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" status="開放報名中" time="3 月｜假日班"></CourseCard>
                </div>
                <div className="col-md-4 col-12 mb-md-0 mb-4">
                  <CourseCard img="react-js-c77f3549.jpg" teather="講師：廖珀均 / 奶綠茶 (Milkmidi)" title="ReactJS 與 Webpack 全攻略入門班 - 假日班" status="開放報名中" time="4 月｜假日班"></CourseCard>
                </div>
                <div className="col-md-4 col-12 mb-md-0 mb-">
                  <CourseCard img="gtm-48e34654.jpg" teather="康晉嵐 (Jason Kang)" title="Google Tag Manager 數據追蹤碼課程 - 假日班" status="開放報名中" time="5 月｜假日班"></CourseCard>
                </div>
              </div>
              <div className="row text-center">
                <button className="bg-red p-3 m-auto">看更多網頁課程</button>
              </div>
            </div>
        );
    }
}

class CourseCard extends React.Component{

    render(){
        return (
            <div className="card  text-left">
              <img src={this.props.img}></img>
              <p className="course-status">
                <snap>{this.props.status}</snap>
              </p>
              <h4 className="mb-5">{this.props.title}</h4>
              <p className="course-teacher">講師：{this.props.teather}</p>
              <hr/>
              <p className="course-time">開課時間：{this.props.time}</p>
            </div>
        );
    }
}

class Showcase extends React.Component{

    render(){
        return (
            <div className="showcases pb-4">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12 col-md-12 center-block mt-5">
                    <h3 className="section-title text-center mt-5 pb-4">案例作品 Showcase</h3>
                    <div className="d-flex flex-wrap">
                      <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case">
                        <a href="#" target="">
                          <div className="lecture-wrap">
                            <img src="https://picsum.photos/338/206?random=1" alt="SpaceNextDoor" />
                            <h4 className="rl-padding mt-3 mb-3">SpaceNextDoor</h4>
                            <div className="rl-padding">
                              <p className="descri mb-5 text-left">Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.</p>
                            </div>
                          </div>
                        </a></div>
                      <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case">
                        <a href="#" target="">
                          <div className="lecture-wrap">
                            <img src="https://picsum.photos/338/206?random=2" alt="Shopmatic Go app" />
                            <h4 className="rl-padding mt-3 mb-3">Shopmatic Go app</h4>
                            <div className="rl-padding">
                              <p className="descri mb-5 text-left">Shopmatic Go is an exciting online platform where you can create a unique and comprehensive online store for your business, in a matter of minutes.</p>
                            </div>
                          </div>
                        </a></div>
                      <div className="showcases-partial col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4 case">
                        <a href="#" target="">
                          <div className="lecture-wrap">
                            <img src="https://picsum.photos/338/206?random=3" alt="跨境電子商務 Shopmatic" />
                            <h4 className="rl-padding mt-3 mb-3">跨境電子商務 Shopmatic</h4>
                            <div className="rl-padding">
                              <p className="descri mb-5 text-left">Shopmatic manages the entire ecosystem for anyone wanting to sell online. We go the extra mile to ensure that we help you in every step of the process to grow your business online - from developing your own unique webstore, to listing you on marketplaces and social channels, to providing you insights on how to sell online.</p>
                            </div>
                          </div>
                        </a></div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-3"><a className="text-red" href="#">...更多案例</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class KnowAboutUs extends React.Component{

    render(){
        return (
            <div className="know-about-us">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h3 className="text-center mt-3 mb-2">想更瞭解我們嗎？</h3>
                    <p className="text text-center mb-4 mt-4">您可以看看
                      <a className="text-red" href="/faq">常見問題</a>
                      或者直接
                      <a className="text-red" href="/contacts">線上洽詢</a>
                      ，會有親切的客服人員回答您的問題，<br/>也可以透過社群網站隨時關注我們的動態。</p>
                  </div>
                  <div className="social-btn bottom-spacing-lg mx-auto mb-5">
                    <a target="_blank" className="rl-spacing mr-4" href="https://www.facebook.com/5xruby"><img src="icon/icon-fb-2f24e7a0.png" alt="facebook icon" /></a>
                    <a target="_blank" className="rl-spacing ml-3" href="https://twitter.com/5xruby"><img src="icon/icon-twitter-89f8d087.png" alt="twitter icon" /></a>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

class RecentLecture extends React.Component{

    render(){
        return (
            <div className="recent-lecture container">

              <div className="">
                <h3 className="section-title text-center">
                  <span>網頁課程推薦</span>
                </h3>
              </div>

              <div className="avatar-partial row text-left">
                <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                    <img src="https://picsum.photos/100/100?random=1" className="d-block" alt="程式課程推薦 | Felix Lin | 五倍紅寶石" />
                  </div>
                  <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                    <p className="d-block statement">慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。
                      <br/><span className="d-block text-red large mt-3 mb-2">Hana Chang</span>
                      <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span></p>
                  </div>
                </div>
              </div>

              <div className="d-flex row" className="buttons">
                <button>⏺</button>
                <button>⏺</button>
                <button>⏺</button>
                <button>⏺</button>
              </div>
            </div>
        );
    }
}

export default App;
