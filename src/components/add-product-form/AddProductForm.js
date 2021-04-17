import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const initialState = {
  name: "",
  qty: "",
  IsAvaliable: "off",
  price: 0,
  salePrice: 0,
  saleEndDate: null,
  description: "",
  images: [],
  categories: [],
};
const AddProductForm = () => {
  const [newProduct, setNewProduct] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  //   const Product = {
  //     name,
  //     slug,
  //   Quantity,
  //     qty,
  //     description,
  //     price,
  //     saleProice,
  //     images: [],
  //     thumnail,
  //     categories: [],
  //   };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={newProduct.name}
            onChange={handleOnChange}
            type="text"
            placeholder="Enter product name"
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group>
          <Form.Check type="switch" id="custom-switch" label="Avaliable" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={newProduct.price}
            onChange={handleOnChange}
            type="number"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sale Price</Form.Label>
          <Form.Control
            name="salePrice"
            value={newProduct.salePrice}
            onChange={handleOnChange}
            type="number"
            placeholder="45.0 "
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sale End Date</Form.Label>
          <Form.Control name="saleEndPrice" type="Date" placeholder="45.0 " />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="qty"
            type="number"
            value={newProduct.qty}
            onChange={handleOnChange}
            placeholder="50"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            value={newProduct.description}
            onChange={handleOnChange}
            as="textarea"
            rows={3}
            placeholder="description"
            required
          />
        </Form.Group>

        {/* <Form.Group>
          <Form.File
            name="images"
            value={newProduct.images}
            onChange={handleOnChange}
            id="exampleFormControlFile1"
            label="Images"
          />
        </Form.Group> */}

        {/* <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Categories</Form.Label>
          <Form.Control
            name="categories"
            value={newProduct.categories}
            onChange={handleOnChange}
            as="select"
            multiple
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
