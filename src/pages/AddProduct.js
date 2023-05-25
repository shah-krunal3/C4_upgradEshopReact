import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../Common/Navbar/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LockCloseIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [availableItems, setAvailableItems] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleManufacturerChange = (event) => {
    setManufacturer(event.target.value);
  };

  const handleAvailableItemsChange = (event) => {
    setAvailableItems(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
  };
  return (
    <Layout>
      <Container className="d-flex justify-content-center align-items-center vh-100 div-center">
        <Container className="content">
          <h5 className="text-center paddingTop10">Add Product</h5>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="formName" className="form-group">
              <Form.Control
                type="text"
                placeholder="Name *"
                value={name}
                onChange={handleNameChange}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="Furniture"
                  label="Category"
                  onChange={handleCategoryChange}
                  defaultValue="Furniture"
                >
                  <MenuItem value="Furniture">Furniture</MenuItem>
                  <MenuItem value="Apparel">Apparel</MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Personal Care">Personal Care</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <br />
            <FormGroup controlId="formManufacturer" className="form-group">
              <Form.Control
                type="text"
                placeholder="Manufacturer *"
                value={manufacturer}
                onChange={handleManufacturerChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formAvailableItems" className="form-group">
              <Form.Control
                type="text"
                placeholder="Available Items *"
                value={availableItems}
                onChange={handleAvailableItemsChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formPrice" className="form-group">
              <Form.Control
                type="text"
                placeholder="Price *"
                value={price}
                onChange={handlePriceChange}
              />
            </FormGroup>
            <br />
            <FormGroup controlId="formImageUrl" className="form-group">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={handleImageUrlChange}
              />
            </FormGroup>
            <br />
            <FormGroup
              controlId="formProductDescription"
              className="form-group"
            >
              <Form.Control
                type="text"
                placeholder="Product Description"
                value={productDescription}
                onChange={handleProductDescriptionChange}
              />
            </FormGroup>
            <br />
            <Button
              variant="primary"
              type="submit"
              value="SAVE PRODUCT"
              className="btn btn-primary width100"
            >
              SAVE PRODUCT
            </Button>
          </Form>
        </Container>
      </Container>
    </Layout>
  );
};
export default AddProduct;
