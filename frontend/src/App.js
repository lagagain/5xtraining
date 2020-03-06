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
              <nav className="container-fluid">
                <div className="row">
                  <a href="/" className="px-4 py-3 col-2">
                    <img src="/logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
                  </a>

                  <div className="col" id="mobile-dropdown">
                    <div className="d-flex d-md-none justify-content-end">
                      <button className="menu-button" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="fas fa-bars"></div>
                      </button>
                    </div>
                    <ul className="d-flex flex-column flex-md-row mt-md-auto mt-4 justify-content-end">
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
                            <path id="bolt" d="M10.231,5.536H6.239L7.713,1.045A.834.834,0,0,0,6.91,0H1.927A.832.832,0,0,0,1.1.72L0,9.024a.832.832,0,0,0,.823.941H4.927l-1.6,6.73a.83.83,0,0,0,1.526.606l6.09-10.519A.829.829,0,0,0,10.231,5.536Z" transform="translate(0.762 0.75)" fill="none" stroke="#7d7d7d" stroke-width="1.5"/>
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
        return (<h1>Content</h1>);
    }
}

class XFooter extends React.Component{
    render(){
        return (<h1>Footer</h1>);
    }
}




export default App;
