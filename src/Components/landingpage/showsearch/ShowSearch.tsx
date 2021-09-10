import React from "react";
import { ProductAPI } from "../../../api/product.api";
import { IProps, IState, Product } from "./showSearchInterface";
import ShowProductCard from "./ShowProductCard";
import { Grid } from "@material-ui/core";

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
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {products.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <ShowProductCard
                  _id={product._id}
                  image={product.image}
                  manufacturer={product.manufacturer}
                  title={product.title}
                  bullet_points={product.bullet_points}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                  rating={product.rating}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.category === "" && this.props.priceRange === "") {
      console.log("fetchall");
      this.fetchAll().then((result) => {
        this.setState({
          products: result,
        });
      });
    } else {
      this.fetchSome('category', this.props.category).then((result) => {
        console.log(result);
        this.setState({
          products: result
        })
      })
    }
  }

  async fetchAll() {
    const resp = await ProductAPI.getAll();
    return resp;
  }

  async fetchSome(searchCriteria: string, searchTerm: string) {
    const resp = await ProductAPI.getSome(searchCriteria, searchTerm);
    return resp || [];
  }
}

export default ShowSearch;
