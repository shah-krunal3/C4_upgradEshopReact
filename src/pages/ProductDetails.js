import React from "react";
import "../../src/ProductDetails.css";
import { Button } from "@mui/material";
import "../../src/index.js";
import { createRoot } from "react-dom/client";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';

class Productdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loading: true,
    };
  }

  componentDidMount() {
    // Simulating an API call to fetch the product details
    setTimeout(() => {
      const product = {
        id: 1,
        name: "Product Name",
        price: 19.99,
        description: "Product Description",
      };
      this.setState({ product, loading: false });
    }, 1000);
  }

  render() {
    const { product, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="product-container">
        
        <div className="product-header">
          <img
            className="product-image"
            src=""
            alt="mobile"
          />
        <div className="product-info">
          <h1>{product.name }</h1>
          <Chip  label= {"Available Quantity:148"} sx={{color: "white", backgroundColor: "#3f51b5"}}  />
        </div>
        <div className="product-info-container">
          <div className="product-info-item">
            <p>Category: <b>{product.category}</b></p>
          </div>
          <div className="product-info-item">
            <p>Description: <i>{product.description}</i></p>
          </div>

          <div className="product-info-item">
            <span>&#8377;{product.price}</span>
          </div>
          <div className="product-info-item">
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="1"
            />

          </div>
          <div className="product-info-item">
            <Button className="button2" variant="contained" sx= {{backgroundColor: "#3f51b5"}}>
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Productdetails />);

export default Productdetails; 