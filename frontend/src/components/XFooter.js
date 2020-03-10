import React from 'react';

class XFooter extends React.Component{
    scrollToTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
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
              <div id="scrTop" className="" onClick={this.scrollToTop}>
                <i className="fa fa-angle-up" id="scrUp" aria-hidden="true"></i>
              </div>
            </footer>
        );
    }
}


export { XFooter };
