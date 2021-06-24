import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Spinner, Alert, Image } from "react-bootstrap";
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
  imgToRemove: [],
  categories: [],
};
const EditProductForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const [editProduct, setEditProduct] = useState(initialState);

  const [images, setImages] = useState([]);
  const [imgToDelete, setimgToDelete] = useState([]);

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

    const formData = new FormData();
    // append form data
    Object.keys(updateProduct).map((key) => {
      key !== "images" && formData.append(key, updateProduct[key]);
    });
    // append new images
    images.length &&
      [...images].map((image) => {
        formData.append("images", image);
      });

    // append image to delete
    imgToDelete.length && formData.append("imgToDelete", imgToDelete);
    dispatch(updateAProduct(formData));
  };

  const onImageDeleteSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (checked) {
      // put img in side the array
      setimgToDelete([...imgToDelete, value]);
    } else {
      // take _id in the array
      const updateImgToDelete = imgToDelete.filter((path) => path !== value);
      setimgToDelete(updateImgToDelete);
    }
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

  const handleOnSelectChange = (e) => {
    const { files } = e.target;

    setImages(files);
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
        <Form onSubmit={handleOnSubmit} entype="multipart/form-data">
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

          <hr />
          <ProductCategoryList
            onCatSelect={onCatSelect}
            SelectedCatIds={editProduct.categories}
          />

          <hr />
          <div className="d-flex justify-content-start">
            {editProduct?.images?.length &&
              editProduct.images.map((imgsource, i) => (
                <div>
                  <Image
                    src={imgsource}
                    width="80px"
                    height="auto"
                    className="m-2"
                  />

                  <Form.Check
                    type="checkbox"
                    onChange={onImageDeleteSelect}
                    defaultValue={imgsource}
                    checked={imgToDelete?.includes(imgsource)}
                    label="Delete"
                  />
                </div>
              ))}
          </div>
          <hr />
          <Form.Group>
            <Form.File
              name="images"
              onChange={handleOnSelectChange}
              id="exampleFormControlFile1"
              label="upload image file only"
              multiple
              accept="image/*"
            />
          </Form.Group>
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
