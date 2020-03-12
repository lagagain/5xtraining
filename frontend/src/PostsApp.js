import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";



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

    constructor(props){
        super(props);
        this.getAllPosts()
            .then(this.updateShowPosts);
        this.getAllUser();
        window.tmp = this;

        this.state = {
            posts: [],
            users: {},
        };
    }

    toggleCategoryBtn = (e) => {
        let target = e.target;//e.currentTarget;
        let parent = target.parentNode;
        let list_target = parent.querySelector(".dropdown-menu");

        list_target.classList.toggle("show");

        return false;
    };

    getAllPosts = async () => {
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        posts = await posts.json();
        this.posts = posts;
        return posts;
    };

    getAllUser = async () => {
        let users = await fetch('https://jsonplaceholder.typicode.com/users/');
        users = await users.json();
        this.users = users;
        this.setState({users});
    }

    updateShowPosts = async () => {
        if(this.posts){
            let posts = [];
            for(let i = 0; i < 4; i++){
                let post = this.posts[i];
                let author_id = post.userId;
                let author = new Proxy(this.state.users[author_id - 1] || {},
                                       {
                                           get(target, key){
                                               return (key in target) ? target[key] : "Not Found";
                                           },
                                       });

                posts.push(
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
                                       <a href="#post_id">
                                         { post.title }
                                       </a>
                                     </h3>
                                   </div>
                                   <div className="summary mt-3 mb-3">
                                     <p>
                                       { post.body }
                                     </p>
                                   </div>
                                   <div className="footer">
                                     <span className="author text-grey small">By { author.username }</span>
                                     <a href="post_id" className="more">看更多</a>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>)
                );
            }
            this.setState({posts});
        }else{
            this.getAllPosts()
                .then(this.updateShowPosts);
        }
    }

    render(){
        return (
            <div>
              <Banner></Banner>

              {this.nav}

              {this.state.posts}

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
