import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import {
  fetchAProduct,
  updateAProduct,
} from "../../page/edit-product/EditproductAction.js";

import { useParams } from "react-router-dom";
import ProductCategoryList from "../product-category-list/ProductCategoryList.js";
const initialState = {
  name: "",
  slug: "",
  qty: 0,
  status: true,
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
    // rerender huda or refresh garda same aauni condition second ko
    if (!editProduct._id || editProduct._id !== product._id) {
      dispatch(fetchAProduct(_id));
      setEditProduct(product);
    }
  }, [dispatch, product, editProduct, _id]);

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

  const onCatSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (checked) {
      // put _id in side the array
      setEditProduct({
        ...editProduct,
        categories: [...editProduct.categories, value],
      });
    } else {
      // take _id in the array
      const updateCatIds = editProduct.categories.map((id) => id !== value);
      setEditProduct({
        ...editProduct,
        categories: updateCatIds,
      });
    }
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>slug</Form.Label>
            <Form.Control
              name="slug"
              type="text"
              value={editProduct.slug}
              required
              disabled
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              name="status"
              id="status"
              type="switch"
              label="Available"
              checked={editProduct.status}
              // value={editProduct.status}
              onChange={handleOnChange}
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
          <hr />
          <ProductCategoryList
            onCatSelect={onCatSelect}
            SelectedCatIds={editProduct.categories}
          />
          <hr />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};

export default EditProductForm;
