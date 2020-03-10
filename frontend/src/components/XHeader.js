import React from 'react';

class XHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu_display: "block",
            menu_toggle_status: false,
            header_position: "block",
        };
        window.addEventListener("resize", this.menuButtonShowHandler);
        window.addEventListener("load", this.menuButtonShowHandler);
        document.addEventListener("scroll", this.windowScrollHandler);
    }

    toggleMenu = () => {
        let menu_toggle_status = this.state.menu_toggle_status;
        let menu_display = "";
        menu_toggle_status = !menu_toggle_status;
        if(menu_toggle_status){
            menu_display = "block";
        }else{
            menu_display = "none";
        }
        this.setState({
            menu_display,
            menu_toggle_status,
        });
    }
    menuButtonShowHandler = ()=>{
        let menu_button = document.querySelector("header .menu-button");
        let menu_button_display = window.getComputedStyle(menu_button).display;
        let menu_display = "";
        let menu_toggle_status = this.state.menu_toggle_status;
        if(menu_button_display === "block"){
            if(menu_toggle_status){
                menu_display = "block";
            }else{
                menu_display = "none";
            }
        }else{
            menu_display = "block";
        }
        this.setState({
            menu_display,
        });
    }
    windowScrollHandler = (e)=>{
        //let page_y = e.pageY;
        let header = document.querySelector("header");
        let scrollY = document.querySelector("html").scrollTop;
        let header_height= window.getComputedStyle(header).height;
        let header_fixedp = false;
        header_height = parseFloat(header_height);
        header_fixedp = (scrollY >= header_height * (2/3))? true : false;
        this.setState({header_position:(header_fixedp)?"fixed":"static"});

    }
    render(){
        return (
            <header style={{position:this.state.header_position}}>
              <nav className="d-flex flex-wrap">
                <a href="#" className="px-4 py-3">
                  <img src="logo-c473f739.png" alt="網頁設計前後端課程 | 五倍紅寶石" />
                </a>

                <div className="col d-md-none d-flex justify-content-end"  onClick={this.toggleMenu}>
                  <button className="menu-button" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="fas fa-bars"></div>
                  </button>
                </div>

                <div className="d-md-none w-100"></div>
                <div className="col" id="mobile-dropdown" style={{display:this.state.menu_display}}>
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

export { XHeader };
