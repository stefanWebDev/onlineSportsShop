import React from "react";
import gadgets from "./images/bike.jpg";
import weights from "./images/weights.jpg";
import fighting from "./images/fighting.jpg";
import running from "./images/running.jpg";
import "./Categories.css";

interface IProps {
  changeCategoryOnClickImage: (event: any) => void;
}

interface IState {}

class Categories extends React.Component<IProps, IState> {
  render() {
    return (
      <div id="category-div">
        <div className="image-div">
          <img
            onClick={this.props.changeCategoryOnClickImage}
            id="weights"
            className="category-img"
            src={weights}
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            onClick={this.props.changeCategoryOnClickImage}
            id="gadgets"
            className="category-img"
            src={gadgets}
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            onClick={this.props.changeCategoryOnClickImage}
            id="fighting"
            className="category-img"
            src={fighting}
            alt=""
          />
        </div>
        <div className="image-div">
          <img
            onClick={this.props.changeCategoryOnClickImage}
            id="running"
            className="category-img"
            src={running}
            alt=""
          />
        </div>
      </div>
    );
  }

  handleClick(e: any) {
    //console.log(e.target.id);
  }
}

export default Categories;
