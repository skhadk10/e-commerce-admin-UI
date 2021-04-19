import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import {
  fetchAProduct,
  updateAProduct,
} from "../../page/edit-product/EditproductAction.js";

import { useParams } from "react-router-dom";
const initialState = {
  name: "",
  qty: "",
  IsAvaliable: true,
  price: 0,
  salePrice: 0,
  saleEndDate: Date(),
  description: "",
  images: [],
  categories: [],
};
const EditProductForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const [editProduct, setEditProduct] = useState(initialState);

  const { isLoading, status, message, product } = useSelector(
    (state) => state.selectedProduct
  );

  useEffect(() => {
    // /call api and update our state for a individual product
    if (!editProduct._id) {
      dispatch(fetchAProduct(_id));
      setEditProduct(product);
    }
  }, [dispatch, editProduct, _id]);

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;
    let val = value;
    if (name === "status") {
      val = checked;
    }
    setEditProduct({ ...editProduct, [name]: val });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, ...updateProduct } = editProduct;
    console.log(updateProduct);
    dispatch(updateAProduct(updateProduct));
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}

      {!product._id ? (
        <h1>product not found</h1>
      ) : (
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={editProduct.name}
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
            <Form.Check
              name="IsAvaliable"
              checked={editProduct.IsAvaliable}
              onChange={handleOnChange}
              type="switch"
              id="custom-switch"
              label="Avaliable"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              value={editProduct.price}
              onChange={handleOnChange}
              type="number"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sale Price</Form.Label>
            <Form.Control
              name="salePrice"
              value={editProduct.salePrice}
              onChange={handleOnChange}
              type="number"
              placeholder="45.0 "
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sale End Date</Form.Label>
            <Form.Control
              name="saleEndDate"
              type="Date"
              value={editProduct.saleEndDate}
              onChange={handleOnChange}
              placeholder="45.0 "
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              name="qty"
              type="number"
              value={editProduct.qty}
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
              value={editProduct.description}
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
              value={editProduct.images}
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
      )}
    </div>
  );
};

export default EditProductForm;
