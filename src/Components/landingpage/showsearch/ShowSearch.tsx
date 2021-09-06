import React from "react";
import { forEachTrailingCommentRange } from "typescript";
import { ProductAPI } from "../../../api/product.api";
import { IProps, IState, Product } from "./showSearchInterface";
import Textfield from '@material-ui/core/Textfield';

class ShowSearch extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      products: [],
    };
  }

  render() {
    let { products }: { products: Product[] } = this.state;

    return (
      <div>
        <ul>
          {products.map((product) => {
            return (
              <li>
                <h3>{product.manufacturer}</h3>
                <h3>{product.title}</h3>
                <h3>{product.rating}</h3>
                <h3>{product.price}</h3>
                <img src={'/images/productimages/' + product.image + '.jpg'} alt="" />
                <ul>
                  {product.bullet_points.map((point) => {
                    return <li>{point}</li>
                  })}
                </ul>
               
                <p>{product.description}</p>
                <p>{product.category}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }



  componentDidMount() {
    this.fetchAll()
      .then((result) => {
        this.setState({
          products: result,
        });
      })
   
  }

  async fetchAll() {
    const resp = await ProductAPI.getAll();
    return resp;
  }
}

export default ShowSearch;
