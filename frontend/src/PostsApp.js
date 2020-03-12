import React from 'react';




class List extends React.Component {
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
              <div className="posts-category pb-3 overwrite-posts">
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
              </div>

              {/* <Main></Main> */}
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
