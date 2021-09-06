import React from "react";
import './Searchbar.css';
import { ISearchbarProps, ISearchbarState } from "./searchbarInterface";

class Searchbar extends React.Component<ISearchbarProps, ISearchbarState> {

    // constructor(props:ISearchbarProps){
    //     super(props)
    // }

    render(){
        return(
            <div id="uber-search-div">
               
                    <div id="search-div">
                        <div>

                            <input type="text" placeholder="search by keyword" />
                        </div>
                        <div>
                            <select onChange={this.props.changeCategory} name="category" id="category">
                                <option value="">select category</option>
                                <option value="weights">weights</option>
                                <option value="fighting">fighting</option>
                                <option value="running">running</option>
                                <option value="gadgets">gadgets</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={this.props.changePriceRange} name="price" id="price">
                                <option value="">select price range</option>
                                <option value="10-30">10 - 30</option>
                                <option value="30-50">30 - 50</option>
                                <option value="50+">more than 50</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={this.props.changeDisplay} id="search-button">Search</button>
                        </div>
                    </div>
        
            </div>
        )
    }


}

export default Searchbar;