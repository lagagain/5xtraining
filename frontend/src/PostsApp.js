import React from 'react';




class List extends React.Component {
    nav = (<div className="posts-category pb-3 overwrite-posts">
                <div className="dropbar light-grey-bg">
                  <div className="container mb-3 ">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <nav className="navbar navbar-expand navbar-light bg-light p-0">
                          <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"
                                   href="#" id="link"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false"
                                   onClick={this.toggleCategoryBtn}
                                >
                                  所有類別
                                </a>
                                <div className="dropdown-menu" aria-labelledby="link">
                                  <a className="dropdown-item" href="">
                                    技術文章
                                  </a>
                                  <a className="dropdown-item" href="">
                                    媒體報導
                                  </a>
                                  <a className="dropdown-item" href="">
                                    最新公告
                                  </a>
                                  <a className="dropdown-item" href="">
                                    工作機會
                                  </a>
                                  <a className="dropdown-item" href="">
                                    社群活動
                                  </a>
                                  <a className="dropdown-item" href="">
                                    心得分享
                                  </a>
                                  <a className="dropdown-item" href="">
                                    案例分享
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
           </div>);
    posts = [
        (<div className="posts-lists-partial mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 center-block">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                  <div className="posts-wrap d-flex light-grey-bg">
                    <div className="cover col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-0 img-h clickable"
                         data-href="/posts/react-native-upgrade-60"
                         style={{
                             "background": `url("https://picsum.photos/540/305?random=${Math.ceil(Math.random()*1000)}")`,
                             "background-size": "cover",
                             "background-position": "center center",
                         }}
                    >
                    </div>
                    <div className="content col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-4 pr-4 pt-4 pb-4">
                      <div className="text-grey small">Mar 10 2020</div>
                      <div className="mt-2">
                        <h3>
                          <a href="/posts/react-native-upgrade-60">
                            React Native 升級教戰手冊 — 以 0.60 + AppBundle 為例
                          </a>
                        </h3>
                      </div>
                      <div className="summary mt-3 mb-3">
                        <p>
                          在開發 React Native （以下簡稱 RN） App 期間除了遇到很多雷之外，大致功能做完開始進入長期維護狀態也是偶爾就會有平台的問題冒出來得處理，有時候是 Apple/Google Play 改了些什麼會要求開發者某時候開始的 App 必須符合某些新規範或是 native API 改動，像是前陣子 RN App 用新版的 XCode build 出來的 App 跑起來會直接閃退，一查發現是 RN 自己使用的 iOS API 過舊導致的，但是修正好的 patch 只有在更新的 RN...
                        </p>
                      </div>
                      <div className="footer">
                        <span className="author text-grey small">By PastLeo</span>
                        <a href="/posts/react-native-upgrade-60" className="more">看更多</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>),
        (<div className="posts-lists-partial mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 center-block">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                  <div className="posts-wrap d-flex light-grey-bg">
                    <div className="cover col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-0 img-h clickable"
                         data-href="/posts/react-native-upgrade-60"
                         style={{
                             "background": `url("https://picsum.photos/540/305?random=${Math.ceil(Math.random()*1000)}")`,
                             "background-size": "cover",
                             "background-position": "center center",
                         }}
                    >
                    </div>
                    <div className="content col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-4 pr-4 pt-4 pb-4">
                      <div className="text-grey small">Mar 10 2020</div>
                      <div className="mt-2">
                        <h3>
                          <a href="/posts/react-native-upgrade-60">
                            React Native 升級教戰手冊 — 以 0.60 + AppBundle 為例
                          </a>
                        </h3>
                      </div>
                      <div className="summary mt-3 mb-3">
                        <p>
                          在開發 React Native （以下簡稱 RN） App 期間除了遇到很多雷之外，大致功能做完開始進入長期維護狀態也是偶爾就會有平台的問題冒出來得處理，有時候是 Apple/Google Play 改了些什麼會要求開發者某時候開始的 App 必須符合某些新規範或是 native API 改動，像是前陣子 RN App 用新版的 XCode build 出來的 App 跑起來會直接閃退，一查發現是 RN 自己使用的 iOS API 過舊導致的，但是修正好的 patch 只有在更新的 RN...
                        </p>
                      </div>
                      <div className="footer">
                        <span className="author text-grey small">By PastLeo</span>
                        <a href="/posts/react-native-upgrade-60" className="more">看更多</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>),
        (<div className="posts-lists-partial mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 center-block">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
                  <div className="posts-wrap d-flex light-grey-bg">
                    <div className="cover col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-0 img-h clickable"
                         data-href="/posts/react-native-upgrade-60"
                         style={{
                             "background": `url("https://picsum.photos/540/305?random=${Math.ceil(Math.random()*1000)}")`,
                             "background-size": "cover",
                             "background-position": "center center",
                         }}
                    >
                    </div>
                    <div className="content col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-4 pr-4 pt-4 pb-4">
                      <div className="text-grey small">Mar 10 2020</div>
                      <div className="mt-2">
                        <h3>
                          <a href="/posts/react-native-upgrade-60">
                            React Native 升級教戰手冊 — 以 0.60 + AppBundle 為例
                          </a>
                        </h3>
                      </div>
                      <div className="summary mt-3 mb-3">
                        <p>
                          在開發 React Native （以下簡稱 RN） App 期間除了遇到很多雷之外，大致功能做完開始進入長期維護狀態也是偶爾就會有平台的問題冒出來得處理，有時候是 Apple/Google Play 改了些什麼會要求開發者某時候開始的 App 必須符合某些新規範或是 native API 改動，像是前陣子 RN App 用新版的 XCode build 出來的 App 跑起來會直接閃退，一查發現是 RN 自己使用的 iOS API 過舊導致的，但是修正好的 patch 只有在更新的 RN...
                        </p>
                      </div>
                      <div className="footer">
                        <span className="author text-grey small">By PastLeo</span>
                        <a href="/posts/react-native-upgrade-60" className="more">看更多</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>),
    ]
    toggleCategoryBtn = (e) => {
        let target = e.target;//e.currentTarget;
        let parent = target.parentNode;
        let list_target = parent.querySelector(".dropdown-menu");

        list_target.classList.toggle("show");

        return false;
    };

    render(){
        return (
            <div>
              <Banner></Banner>

              {this.nav}
              
              {this.posts}

              <div>Pagination</div>
            </div>
        );
    }
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
                            <span itemProp="name">最新消息</span>
                          </a>
                        </h5>
                      </li>
                    </ol>
                    <h1 className="title mt-4 mb-3">最新消息</h1>
                    <h3 className="text-center mb-2">關於五倍還有更多你可以發掘的，都在這邊說給你知！</h3>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}


export default List;
