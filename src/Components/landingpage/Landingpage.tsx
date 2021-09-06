import React from "react";
import Navbar from "../bars/Navbar";
import Searchbar from "../bars/Searchbar";
import Categories from "./categories/Categories";
import ContentRight from "./fillerRight/ContentRight";
import { IProps, IState } from "./interface";
import './Landingpage.css';
import ShowSearch from "./showsearch/ShowSearch";


class Landingpage extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.changeDisplayProperties = this.changeDisplayProperties.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changePriceRange = this.changePriceRange.bind(this);

        this.state = {
            displayCategories: true,
            displayContentRight: true,
            displayShowSearch: false,
            category: "",
            priceRange: ""
        }
    }

    render(){
        
        return (
            <div>
                <div id="header-div">
                    <Navbar />
                </div>
                <div id="searchbar-div">
                    <Searchbar changePriceRange={this.changePriceRange} changeCategory={this.changeCategory} changeDisplay={this.changeDisplayProperties} />
                </div>
                <div id="landingpage-main-div">
                   
                     { this.state.displayCategories ? <Categories /> : null }
                    { this.state.displayContentRight ? <ContentRight /> : null }
                    { this.state.displayShowSearch ? <ShowSearch category={this.state.category} priceRange={this.state.priceRange} /> : null }
                </div>
            </div>
        )
    }

    changeDisplayProperties(){
        this.setState({
            displayCategories: false,
            displayContentRight: false,
            displayShowSearch: true
        })
    }

    changeCategory(event:any){
     
        this.setState({
            category: event.target.value
        })
    }

    changePriceRange(event:any){
        this.setState({
            priceRange: event.target.value
        })
    }
}

export default Landingpage;