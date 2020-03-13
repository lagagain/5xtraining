import React from 'react';
import { PUBLIC_URL } from "../config";


class Pagination extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.itemFactory = props.itemFactory || this.defaultItemFactory;
        this.current_page = props.current_page || 1;

        this.state = {
            current_page: this.current_page,
        };
    }

    defaultItemFactory = (page, text) => {
        return (<a href={`pages/${page}`}>
                  {text}
                </a>);
    }

    render(){
        let number_item = [];
        for(let i = 1; i <= this.props.max_page; i++){
            number_item.push(<li>
                               {this.itemFactory(i, i)}
                             </li>
                            );
        }

        return (
              <ul>
                <li>
                  {this.itemFactory(1,"首頁")}
                </li>
                {number_item}
                <li>
                  {this.itemFactory(this.props.max_page,"末頁")}
                </li>
                <li>
                  {this.itemFactory(this.props.current_page + 1, "下一頁")}
                </li>
              </ul>
        );
    }
}


export { Pagination };
