import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { XHeader } from "./components/XHeader";
import { XFooter } from "./components/XFooter";
import { PUBLIC_URL } from "./config.js";


function App() {
    return (
        <div className="App">
          <XHeader></XHeader>
          <Route path={PUBLIC_URL + "/"} exact component={Index} />
          <Route path={PUBLIC_URL + "#other"} component={Other} />
          <XFooter></XFooter>
        </div>
    );
}


class Index extends React.Component{
    render(){
        return (
            <div>
              <Banner></Banner>
              <About5X></About5X>
              <Course></Course>
              <RecentLecture></RecentLecture>
              <Showcase></Showcase>
              <KnowAboutUs></KnowAboutUs>
            </div>
        );
    }
}


class Banner extends React.Component{
    render(){
        return (
            <div id="banner" className="">
              <Carousel data-carousel-group="banner">
                <div className="slice">
                  <img src="https://picsum.photos/1260/446?random=1"></img>
                  <img src="https://picsum.photos/1260/446?random=2"></img>
                  <img src="https://picsum.photos/1260/446?random=3"></img>
                  <img src="https://picsum.photos/1260/446?random=4"></img>
                </div>
                <div className="d-flex" className="buttons">
                </div>
              </Carousel>
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
                <span>{this.props.status}</span>
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
            <div className="recent-lecture pt-4 pb-4">

              <div className="">
                <h3 className="section-title text-center">
                  <span>網頁課程推薦</span>
                </h3>
              </div>

              <Carousel data-carousel-group="recent-lecture">
                <div className="slice">
                  <div className="avatar-partial row text-left">
                    <div className="container">
                      <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 p-md-4 p-2">
                          <img src="https://picsum.photos/100/100?random=1" className="d-block" alt="程式課程推薦 | Felix Lin | 五倍紅寶石" />
                        </div>
                        <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                          <p className="d-block statement">慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。
                            <br/><span className="d-block text-red large mt-3 mb-2">Hana Chang</span>
                            <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="avatar-partial row text-left">
                    <div className="container">
                      <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 p-md-4 p-2">
                          <img src="https://picsum.photos/100/100?random=2" className="d-block" alt="程式課程推薦 | Felix Lin | 五倍紅寶石" />
                        </div>
                        <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                          <p className="d-block statement">慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。
                            <br/><span className="d-block text-red large mt-3 mb-2">Hana Chang</span>
                            <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="avatar-partial row text-left">
                    <div className="container">
                      <div className="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 p-md-4 p-2">
                          <img src="https://picsum.photos/100/100?random=3" className="d-block" alt="程式課程推薦 | Felix Lin | 五倍紅寶石" />
                        </div>
                        <div className="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                          <p className="d-block statement">慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。
                            <br/><span className="d-block text-red large mt-3 mb-2">Hana Chang</span>
                            <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="d-flex row" className="buttons">
                </div>
              </Carousel>
            </div>
        );
    }
}

class Carousel extends React.Component{
    auto_timer = null
    mouse_hover = false
    current_slice_id = 0
    slice_cnt = 0
    constructor(props){
        super(props);
        this.state = {
            slice_style :{
                left: "0%",
            },
        };
        window.tmp = this;
    }
    componentDidMount(){
        var carousel_group = this.props['data-carousel-group'];
        var carousel = document.querySelector(`.my-carousel[data-carousel-group='${carousel_group}']`);
        var slices = carousel.querySelectorAll(".slice > *");
        var button_group = carousel.querySelector(".buttons");
        this.slice_cnt = slices.length;

        for(let i = 0; i < this.slice_cnt; i++){
            let button = document.createElement("button");
            button.innerHTML = '<i class="fas fa-circle"></i>';
            button.setAttribute("data-carousel-target", i);
            button.addEventListener("click", this.buttonClick);
            button_group.append( button );
        }
        this.auto_timer = window.setInterval(this.autoRoll, 5000);
    }

    renderChildren = () => {
        return React.Children.map(this.props.children, child => {
            if (child.props.className === "slice"){
                let c = React.cloneElement(child, {
                    style: this.state.slice_style,
                });
                return c;
            }
            else{
                return child;
            }
        });
    }

    buttonClick = (e) => {
        let target = e.currentTarget;
        let index = target.getAttribute("data-carousel-target");
        this.current_slice_id = index;
        this.setState({
            slice_style:{
                left: (-index*100) + "%",
            }
        });
    }

    onMouseEnter = () =>{
        this.mouse_hover = true;
    }

    onMouseLeave = () => {
        this.mouse_hover = false;
    }

    autoRoll = () => {
        if(!this.mouse_hover){
            this.current_slice_id = (this.current_slice_id + 1) % this.slice_cnt;
            let index = this.current_slice_id;
            this.setState({
                slice_style:{
                    left: (-index*100) + "%",
                }
            });
        }
    }

    render(){
        return (
            <div className="my-carousel"
                 data-carousel-group={this.props["data-carousel-group"]}
                 onMouseEnter={this.onMouseEnter}
                 onMouseLeave={this.onMouseLeave}
            >
              {this.renderChildren()}
            </div>
        );
    }
}

class Other extends React.Component{
    render(){
        let query = this.props.location.query;

        return (
            <div className="container" style={{"background-color":"red"}}>
              <div className="row">
                <h1>Other Page - {query.name}</h1>
              </div>
              <div className="row">
                頁面施工中......
              </div>
            </div>
        );
    }
}

export default App;
