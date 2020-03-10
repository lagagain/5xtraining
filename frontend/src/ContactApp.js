import React from 'react';
import './App.css';
import { XHeader } from "./components/XHeader";
import { XFooter } from "./components/XFooter";


function App() {
    return (
        <div className="App">
          <XHeader></XHeader>
          <Banner></Banner>
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

export default App;
